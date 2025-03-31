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
      document.querySelectorAll('html *.absolute-off').forEach(function(node) {
          node.classList.remove('absolute-off');
          node.classList.add('absolute');
      });
      document.querySelectorAll('html *.isolate').forEach(function(node) {
          node.style.display = 'flex';
      });
      document.getElementById("pf-styles").remove();
      let e = document.getElementsByClassName('sm:p-8');
      if (e.length > 0) {
          e[0].removeAttribute("style");
      }
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
      document.querySelectorAll('html *.absolute').forEach(function(node) {
          node.classList.remove('absolute');
          node.classList.add('absolute-off');
      });
      document.querySelectorAll('html *.isolate').forEach(function(node) {
          node.style.display = 'none';
      });
      document.querySelector('div[role=presentation]').classList.remove('flex');
      let styleElement = document.createElement("style");
      styleElement.id = "pf-styles";
      document.head.appendChild(styleElement);
      styleElement.sheet.insertRule("article > div {padding: 0px !important;}", 0);
      styleElement.sheet.insertRule("* { font-size: 12px; line-height: 1.3; margin: 0px !important;}", 0);
      let e = document.getElementsByClassName('sm:p-8');
      if (e.length > 0) {
          e[0].setAttribute("style", "border: none !important; padding: 0px !important;");
      }
      window.PF = true;
    }
})();
