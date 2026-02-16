(function () {
    if (window.PF) {
      document.querySelector('div[role=presentation]').classList.add('flex');
      document.querySelectorAll('html *.overflow-hidden-off').forEach(function(node) {
          node.classList.remove('overflow-hidden-off');
          node.classList.add('overflow-hidden');
      });
      document.querySelectorAll('html *.overflow-auto-off').forEach(function(node) {
          node.classList.remove('overflow-auto-off');
          node.classList.add('overflow-auto');
      });
      document.querySelectorAll('[class*=_tableContainer]').forEach(el => {
        el.className = [...el.classList].map(c => (
          c.includes('_tableContainer') && c.endsWith('-off') ? c.slice(0, -4) : c
        )).join(' ');
      });
      document.querySelectorAll('html *.horzScrollShadows-off').forEach(function(node) {
          node.classList.remove('horzScrollShadows-off');
          node.classList.add('horzScrollShadows');
      });
      document.querySelectorAll('html *.h-full-off').forEach(function(node) {
          node.classList.remove('h-full-off');
          node.classList.add('h-full');
      });
      document.querySelectorAll('html *.shadow-md-off').forEach(function(node) {
        node.classList.remove('shadow-md-off');
        node.classList.add('shadow-md');
      });
      document.querySelectorAll('html *.absolute-off').forEach(function(node) {
          node.classList.remove('absolute-off');
          node.classList.add('absolute');
      });
      document.querySelectorAll('html *.isolate').forEach(function(node) {
          node.style.display = 'flex';
      });
      document.querySelectorAll('html *.fixed').forEach(function(node) {
          node.style.display = '';
      });
      document.querySelectorAll('div[class^=mx-], div.py-2').forEach(function(node) {
          node.style.display = '';
      });
      document.querySelectorAll('button[data-testid=good-response-turn-action-button]').forEach(function(node) {
          node.parentElement.style.display = '';
      });
      document.getElementById("pf-styles").remove();
      let e = document.getElementsByClassName('sm:p-8');
      if (e.length > 0) {
          e[0].removeAttribute("style");
      }
      document.querySelectorAll('span[data-state="closed"] button').forEach(b => {
        if (b.dataset.origClass!=null) {
          b.setAttribute("class", b.dataset.origClass);
          delete b.dataset.origClass;
        }
        b.style.textDecoration = "";
        b.querySelectorAll("svg").forEach(s => { s.style.display=""; });
      });
      let vf = document.querySelector("body > div");
      vf.className = window.vfClassName;
      window.PF = null;
    } else {
      document.querySelectorAll('html *.overflow-hidden').forEach(function(node) {
          node.classList.remove('overflow-hidden');
          node.classList.add('overflow-hidden-off');
      });
      document.querySelectorAll('html *.overflow-auto').forEach(function(node) {
          node.classList.remove('overflow-auto');
          node.classList.add('overflow-auto-off');
      });
      // All styles containing _tableContainer. e.g _tableContainer_1rjym_1
      document.querySelectorAll('[class*=_tableContainer]').forEach(el => {
        el.className = [...el.classList].map(c =>
          c.includes('_tableContainer') ? `${c}-off` : c
        ).join(' ');
      });
      document.querySelectorAll('html *.horzScrollShadows').forEach(function(node) {
          node.classList.remove('horzScrollShadows');
          node.classList.add('horzScrollShadows-off');
      });
      document.querySelectorAll('html *.shadow-md').forEach(function(node) {
        node.classList.remove('shadow-md');
        node.classList.add('shadow-md-off');
      });
      document.querySelectorAll('html *.h-full').forEach(function(node) {
          node.classList.remove('h-full');
          node.classList.add('h-full-off');
      });
      document.querySelectorAll('html *.absolute').forEach(function(node) {
          node.classList.remove('absolute');
          node.classList.add('absolute-off');
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
      let styleElement = document.createElement("style");
      styleElement.id = "pf-styles";
      document.head.appendChild(styleElement);
      styleElement.sheet.insertRule("article > div {padding: 0px !important;}", 0);
      styleElement.sheet.insertRule("article > div > div {max-width: 100% !important;}", 0);
      styleElement.sheet.insertRule(".markdown td, .markdown th { padding: 2px !important;}", 0);
      styleElement.sheet.insertRule(".markdown .justify-center { justify-content: start !important;}", 0);
      styleElement.sheet.insertRule(".border { border: 0px !important;}", 0);
      styleElement.sheet.insertRule("* { font-size: 12px; line-height: 1.3; margin: 0px !important;}", 0);
      styleElement.sheet.insertRule("h1 { font-size: 18px !important; margin-top: 5px !important; margin-bottom: 3px !important;}", 0);
      styleElement.sheet.insertRule("h2 { font-size: 16px !important; margin-top: 5px !important; margin-bottom: 3px !important;}", 0);
      styleElement.sheet.insertRule("h3 { font-size: 14px !important; margin-top: 5px !important; margin-bottom: 3px !important;}", 0);
      styleElement.sheet.insertRule("h4 { font-size: 12px !important; margin-top: 5px !important; margin-bottom: 3px !important;}", 0);
      styleElement.sheet.insertRule("td, th { min-width: auto !important; min-height: auto !important;}", 0);
      styleElement.sheet.insertRule("div, p, ul, table, tr, td, th, h1, h2, h3, h4 { break-inside: avoid !important; break-before: avoid !important; break-after: avoid !important;}", 0);
      styleElement.sheet.insertRule(".markdown p, .markdown ul, .markdown ol, .markdown table, .markdown h1, .markdown h2, .markdown h3, .markdown h4 { display: block !important;}", 0);
      let e = document.getElementsByClassName('sm:p-8');
      if (e.length > 0) {
          e[0].setAttribute("style", "border: none !important; padding: 0px !important; box-shadow: none !important;");
      }
      document.querySelectorAll('span[data-state="closed"] button').forEach(b => {
        b.dataset.origClass = b.getAttribute("class");
        b.className = "flex";
        b.style.textDecoration = "underline";
        b.querySelectorAll("svg").forEach(s => { s.style.display = "none"; });
      });
      let vf = document.querySelector("body > div");
      window.vfClassName = vf.className;
      vf.className = "";
      window.PF = true;
    }
})();
