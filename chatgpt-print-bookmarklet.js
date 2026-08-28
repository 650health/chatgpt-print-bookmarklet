(async function () {
    let style = document.getElementById('__print_fix__');
    if (!style) {
      // ChatGPT virtualizes long conversations. Scroll through the conversation
      // and clone each mounted turn before removing the application shell.
      let conversationRoot = document.createElement('main');
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

      document.body.replaceChildren(conversationRoot);

      let css = `
        @layer __print_fix__ {
          html, body {
            background: #fff !important;
          }
          html {
            -webkit-text-size-adjust: none !important;
            text-size-adjust: none !important;
          }
          body *, body *::before, body *::after {
            background: transparent !important;
            box-shadow: none !important;
            font-size: 8pt !important;
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
            color: #000 !important;
            width: 70% !important;
            margin-inline-start: auto !important;
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
          .absolute {
            position: static !important;
          }
          .fixed, header, div[class^="mx-"], div.py-2 {
            display: none !important;
          }
          .sm\\:p-8 {
            border: none !important;
            padding: 0px !important;
          }
          span[data-state="closed"] button {
            color: #555555 !important;
            display: flex !important;
          }
          span[data-state="closed"] button svg {
            display: none !important;
          }
          * {
            line-height: 1.3 !important;
            margin: 0px !important;
          }
          h1 {
            font-size: 12pt !important;
            margin-top: 5px !important;
            margin-bottom: 5px !important;
          }
          h2 {
            font-size: 10pt !important;
            margin-top: 5px !important;
            margin-bottom: 3px !important;
          }
          h3 {
            font-size: 9pt !important;
            margin-top: 5px !important;
            margin-bottom: 3px !important;
          }
          h4 {
            font-size: 8pt !important;
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
        }
      `;

      style = document.createElement('style');
      style.id = '__print_fix__';
      style.textContent = css;
      document.head.prepend(style);

      // All styles containing _tableContainer. e.g _tableContainer_1rjym_1
      document.querySelectorAll('[class*=_tableContainer]').forEach(el => {
        el.className = [...el.classList].filter(c =>
          !c.includes('_tableContainer')
        ).join(' ');
      });
      document.querySelectorAll('html *.horzScrollShadows').forEach(function(node) {
          node.classList.remove('horzScrollShadows');
      });
      document.querySelectorAll('code.whitespace-pre\\!').forEach(el => {
        el.classList.replace('whitespace-pre!', 'is-wrapped');
        el.style.whiteSpace = 'pre-wrap';
      });

      let h1 = document.createElement('h1');
      h1.textContent = document.title;
      conversationRoot.prepend(h1);

      window.scrollTo(0, 0);
      // Safari quirks
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
})();
