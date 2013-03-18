Ext.define("sencha.view.Places.List", {
    extend: "Ext.dataview.List",
    id: "PlacesList",
    config: {
        docked: 'top',
        store: "Places",
        emptyText: "Loading list of Places...",
        itemTpl: [
            '<div class="b-places__item">',
            "{name}",
            "</div>"
        ]
    }
});