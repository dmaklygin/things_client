Ext.define('sencha.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'sencha.view.Places.Page'
    ],
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,
        items: [
            {
                title: 'New Thing',
                iconCls: 'add',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'New Thing'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Things',
                iconCls: 'maps',
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Things'
                }
            },
            {
                title: 'Places',
                xclass: 'sencha.view.Places.Page',
                iconCls: 'action'
//                items:
////                {
////                    docked: 'top',
////                    xtype: 'titlebar',
////                    title: 'Places'
////                }
//                {
//                    xclass:"sencha.view.Places.Page"
//                }
            },
            {
                title: 'Profile',
                iconCls: 'action',
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Profile'
                }
            }
        ]
    }
});
