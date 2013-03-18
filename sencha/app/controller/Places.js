Ext.define('sencha.controller.Places', {

    extend: 'Ext.app.Controller',

    config: {

    },

    init: function () {
        console.log("init places");
        var placesStore = Ext.getStore("Places");
        placesStore.load(function () {
            console.log('places loaded');
        });
    }


});
