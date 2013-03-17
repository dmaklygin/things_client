Ext.define('MyApp.controller.Things', {

    extend: 'Ext.app.Controller'

    config: {
        control: {
            loginButton: {
                tap: 'doLogin'
            },
            'button[action=logout]': {
                tap: 'doLogout'
            }
        },

        refs: {
            loginButton: 'button[action=login]'
        }
    }


});
