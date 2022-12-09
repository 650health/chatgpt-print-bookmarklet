(function () {

    document.querySelectorAll('html *.overflow-hidden').forEach(function(node) {
        node.classList.remove('overflow-hidden');
        node.classList.add('overflow-hidden-off');
    });

    document.querySelectorAll('html *.absolute').forEach(function(node) {
        node.classList.remove('absolute');
        node.classList.add('absolute-off');
    });

    document.querySelectorAll('html *.overflow-hidden-off').forEach(function(node) {
        node.classList.remove('overflow-hidden-off');
        node.classList.add('overflow-hidden');
    });

    document.querySelectorAll('html *.absolute-off').forEach(function(node) {
        node.classList.remove('absolute-off');
        node.classList.add('absolute');
    });

})();
