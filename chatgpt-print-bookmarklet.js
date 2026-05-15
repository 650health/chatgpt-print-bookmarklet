(function () {
    let style = document.getElementById('__print_fix__');
    if (!style) {
      let css = `
          html, body, body * {
            height: auto !important;
            max-height: none !important;
            min-height: 0 !important;
            max-width: 100% !important;
            overflow: visible !important;
            content-visibility: visible !important;
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
          .markdown .justify-center {
            justify-content: start !important;
          }
          .border {
            border: 0px !important;
          }
          * {
            font-size: 12px;
            line-height: 1.3;
            margin: 0px !important;
          }
          h1 {
            font-size: 18px !important;
            margin-top: 5px !important;
            margin-bottom: 3px !important;
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
          div, p, ul, table, tr, td, th, h1, h2, h3, h4 {
            break-inside: avoid !important;
            break-before: avoid !important;
            break-after: avoid !important;
          }
          .markdown p, .markdown ul, .markdown ol, .markdown table, .markdown h1, .markdown h2, .markdown h3, .markdown h4 {
            display: block !important;
          }
      `;

      style = document.createElement('style');
      style.id = '__print_fix__';
      style.textContent = css;
      document.head.appendChild(style);

      // All styles containing _tableContainer. e.g _tableContainer_1rjym_1
      document.querySelectorAll('[class*=_tableContainer]').forEach(el => {
        el.className = [...el.classList].filter(c =>
          !c.includes('_tableContainer')
        ).join(' ');
      });
      document.querySelectorAll('html *.horzScrollShadows').forEach(function(node) {
          node.classList.remove('horzScrollShadows');
      });
      document.querySelectorAll('html *.shadow-md').forEach(function(node) {
        node.classList.remove('shadow-md');
      });
      document.querySelectorAll('html *.h-full').forEach(function(node) {
          node.classList.remove('h-full');
      });
      document.querySelectorAll('html *.absolute').forEach(function(node) {
          node.classList.remove('absolute');
      });
      document.querySelectorAll('html *.isolate').forEach(function(node) {
          node.style.display = 'none';
      });
      document.querySelectorAll('html *.fixed').forEach(function(node) {
          node.style.display = 'none';
      });
      document.querySelectorAll('div[class^=mx-], div.py-2').forEach(function(node) {
          node.style.display = 'none';
      });
      document.querySelectorAll('button[data-testid=good-response-turn-action-button]').forEach(function(node) {
          node.parentElement.style.display = 'none';
      });
      document.querySelector('div[role=presentation]').classList.remove('flex');
      let e = document.getElementsByClassName('sm:p-8');
      if (e.length > 0) {
          e[0].setAttribute("style", "border: none !important; padding: 0px !important; box-shadow: none !important;");
      }
      document.querySelectorAll('span[data-state="closed"] button').forEach(b => {
        b.className = "flex";
        b.style.color = "#555555";
        b.querySelectorAll("svg").forEach(s => { s.style.display = "none"; });
      });
      document.querySelectorAll('code.whitespace-pre\\!').forEach(el => {
        el.classList.replace('whitespace-pre!', 'is-wrapped');
        el.style.whiteSpace = 'pre-wrap';
      });
      document.querySelectorAll('header').forEach(el => {
        el.style.display = 'none';
      });
      document.querySelector("body > div").className = "";
    }
})();
