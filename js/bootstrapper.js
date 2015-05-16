/*globals app, window, jQuery, ko */
(function (app, window, jQuery, ko) {
    "use strict";

    var start,
        compose;

    compose = function () {
        
        // register jQuery
        app.register({
            name: 'jquery',
            factory: function () {
                return jQuery;
            }
        });
        
        // register knockout
        app.register({
            name: 'ko',
            factory: function () {
                return ko;
            }
        });

        var _app = app.resolve('AppModel');
        ko.applyBindings(_app());

    };

    start = function () {
        compose();
    };

    start();

} (app, window, jQuery, ko));
