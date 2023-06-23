(function () {
    if (window.PRINTER_FRIENDLY) {
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
      document.querySelectorAll('html .self-end button').forEach(function(node) {
          node.parentElement.classList.remove('hidden');
      });
      window.PRINTER_FRIENDLY = null;
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
      document.querySelectorAll('html .self-end button').forEach(function(node) {
          node.parentElement.classList.add('hidden');
      });
      window.PRINTER_FRIENDLY = true;
    }
})();
