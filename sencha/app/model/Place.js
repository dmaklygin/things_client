Ext.define("sencha.model.Place", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "_id", type: "string" },
            { name: "name", type: "string" },
            { name: "address", type: "string" },
            { name: "city", type: "string" },
            { name: "country", type: "string" },
            { name: "coordinates", type: "array" }
        ]
    }
});