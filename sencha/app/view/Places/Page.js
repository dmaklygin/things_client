Ext.define("sencha.view.Places.Page", {
    extend: "Ext.Container",
    id: "Places",
    requires: [
        "sencha.view.Places.List"
    ],
    config: {
        layout: 'vbox',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Places'
            },
            {
                xclass: "sencha.view.Places.List",
                flex: 1
            }
        ]
    }
});