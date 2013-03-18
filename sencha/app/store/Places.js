Ext.define("sencha.store.Places", {
    extend: "Ext.data.Store",
    requires: [
        "Ext.data.proxy.JsonP"
    ],
    config: {
        model: "sencha.model.Place",
        proxy: {
            type: "jsonp",
            url: "http://localhost:3000/places",
            callbackKey: "callback",
            noCache: false,
            startParam: "",
            pageParam: "",
            limitParam: "",
//            extraParams: {
//                apikey:"8a341f85c657435989e75c9a83294762"
//            },
            reader: {
                type: "json",
                rootProperty: "places"
//                ,
//                record: "place"
            }
        }
    }
});