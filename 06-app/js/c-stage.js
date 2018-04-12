var $stage = function() {
    function show() {
        $(app.config.appContainer).append($('<div class="admin-app-stage"></div>'));
    }

    function getPanel(router) {
        var panel = router.replace(/-(.)/g, function(letter) {
                return letter.toUpperCase();
            }).replace(/#\//, '$')
            .replace(/-/g, '');

        return panel + 'Panel';
    }

    function load(router) {
        var panel = getPanel(router);
        eval(panel + ".show({'container': '.admin-app-stage'});");
    }

    return { show: show, load: load };
}();