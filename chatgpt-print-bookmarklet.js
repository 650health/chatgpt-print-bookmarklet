(async function () {
    let style = document.getElementById('__print_fix__');
    if (!style) {
      // ChatGPT virtualizes long conversations. Scroll through the conversation
      // and clone each mounted turn into a separate printable snapshot.
      let conversationRoot = document.createElement('main');
      conversationRoot.id = '__print_snapshot__';
      let collected = new Map();
      let scrollRoot = [...document.querySelectorAll('[class*="scroll-root"]')]
        .find(node => node.scrollHeight > node.clientHeight);

      scrollRoot.scrollTop = 0;
      for (let previous = -1; previous !== scrollRoot.scrollTop;) {
        previous = scrollRoot.scrollTop;
        await new Promise(resolve => setTimeout(resolve, 250));

        let mounted = [
          ...document.querySelectorAll('[data-testid^="conversation-turn-"]')
        ];
        mounted.forEach((turn, index) => {
          let id = turn.dataset.turnId;
          if (collected.has(id)) return;

          let next = mounted
            .slice(index + 1)
            .find(candidate => collected.has(candidate.dataset.turnId));
          let clone = turn.cloneNode(true);
          conversationRoot.insertBefore(
            clone,
            next ? collected.get(next.dataset.turnId) : null
          );
          collected.set(id, clone);
        });

        scrollRoot.scrollTop += scrollRoot.clientHeight / 2;
      }

      let css = `
          html, body {
            background: #fff !important;
          }
          body * {
            background: transparent !important;
          }
          html, body, body * {
            height: auto !important;
            max-height: none !important;
            min-height: 0 !important;
            max-width: 100% !important;
            overflow: visible !important;
            content-visibility: visible !important;
            -webkit-mask-image: none !important;
            -webkit-mask: none !important;
          }
          div.user-message-bubble-color {
            width: 70% !important;
          }
          article > div {
            padding: 0px !important;
          }
          article > div > div {
            max-width: 100% !important;
          }
          .markdown td, .markdown th {
            padding: 2px !important;
          }
          .markdown [class*="_tableWrapper"] {
            display: block !important;
          }
          .markdown .justify-center {
            justify-content: start !important;
          }
          .border {
            border: 0px !important;
          }
          .shadow-md {
            box-shadow: none !important;
          }
          .absolute {
            position: static !important;
          }
          .fixed, header, div[class^="mx-"], div.py-2 {
            display: none !important;
          }
          .sm\\:p-8 {
            border: none !important;
            padding: 0px !important;
            box-shadow: none !important;
          }
          span[data-state="closed"] button {
            color: #555555 !important;
            display: flex !important;
          }
          span[data-state="closed"] button svg {
            display: none !important;
          }
          * {
            font-size: 12px;
            line-height: 1.3;
            margin: 0px !important;
          }
          h1 {
            font-size: 18px !important;
            margin-top: 5px !important;
            margin-bottom: 5px !important;
          }
          h2 {
            font-size: 16px !important;
            margin-top: 5px !important;
            margin-bottom: 3px !important;
          }
          h3 {
            font-size: 14px !important;
            margin-top: 5px !important;
            margin-bottom: 3px !important;
          }
          h4 {
            font-size: 12px !important;
            margin-top: 5px !important;
            margin-bottom: 3px !important;
          }
          td, th {
            min-width: auto !important;
            min-height: auto !important;
          }
          pre, pre code, .cm-content {
            white-space: pre-wrap !important;
            overflow-wrap: anywhere !important;
            word-break: break-word !important;
            min-width: 0 !important;
          }
          tr, img, svg {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
          h1, h2, h3, h4 {
            break-after: avoid !important;
            page-break-after: avoid !important;
          }
          .markdown p, .markdown ul, .markdown ol, .markdown table, .markdown h1, .markdown h2, .markdown h3, .markdown h4 {
            display: block !important;
          }
          [aria-label="Response actions"], [aria-label="Copy"], [aria-label="Your message actions"], [data-testid="writing-block-header-surface"], [data-testid="cot-v5-tool-icon-pile"] {
            display: none !important;
          }
      `;

      style = document.createElement('style');
      style.id = '__print_fix__';
      style.textContent = css;

      // All styles containing _tableContainer. e.g _tableContainer_1rjym_1
      conversationRoot.querySelectorAll('[class*=_tableContainer]').forEach(el => {
        el.className = [...el.classList].filter(c =>
          !c.includes('_tableContainer')
        ).join(' ');
      });
      conversationRoot.querySelectorAll('.horzScrollShadows').forEach(function(node) {
          node.classList.remove('horzScrollShadows');
      });
      conversationRoot.querySelectorAll('code.whitespace-pre\\!').forEach(el => {
        el.classList.replace('whitespace-pre!', 'is-wrapped');
        el.style.whiteSpace = 'pre-wrap';
      });

      conversationRoot.querySelectorAll(
        'script, iframe, frame, frameset, object, embed, applet, meta[http-equiv="refresh"]'
      ).forEach(node => node.remove());
      let urlAttributes = /^(action|formaction|href|src|xlink:href)$/i;
      conversationRoot.querySelectorAll('*').forEach(node => {
        [...node.attributes].forEach(attribute => {
          if (
            /^on/i.test(attribute.name) ||
            attribute.name.toLowerCase() === 'srcdoc' ||
            (urlAttributes.test(attribute.name) && /^\s*javascript:/i.test(attribute.value))
          ) {
            node.removeAttribute(attribute.name);
          }
        });
      });

      let h1 = document.createElement('h1');
      h1.textContent = document.title;
      conversationRoot.prepend(h1);

      // Replace the page with a script-free document so React is destroyed
      // without mutating its managed DOM or changing the conversation URL.
      let printDocument = document.implementation.createHTMLDocument(document.title);
      [
        [document.documentElement, printDocument.documentElement],
        [document.body, printDocument.body]
      ].forEach(([source, target]) => {
        [...source.attributes].forEach(attribute =>
          target.setAttribute(attribute.name, attribute.value)
        );
      });
      printDocument.documentElement.classList.remove('dark');
      printDocument.documentElement.classList.add('light');
      printDocument.documentElement.dataset.chatTheme = 'default';
      printDocument.documentElement.style.colorScheme = 'light';
      printDocument.body.classList.remove('dark');
      printDocument.body.style.colorScheme = 'light';

      document.head.querySelectorAll('meta[name="viewport"], link[rel="stylesheet"], style')
        .forEach(node => {
          let clone = node.cloneNode(true);
          if (node.href) clone.href = node.href;
          printDocument.head.appendChild(clone);
        });
      printDocument.head.appendChild(style);
      printDocument.body.appendChild(conversationRoot);

      document.open();
      document.write('<!doctype html>' + printDocument.documentElement.outerHTML);
      document.close();
    }
})();
