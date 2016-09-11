L.Control.PluginBoilerplate = L.Control.extend({
    _map: null,
    includes: L.Mixin.Events,
    options: {
        position: 'bottomright'
    },
    onAdd: function (map) {
        this._map = map;
        var container = L.DomUtil.create('div', 'basemaps leaflet-control closed');

        // Disable events on container
        L.DomEvent.disableClickPropagation(container);
        if (!L.Browser.touch) {
            L.DomEvent.disableScrollPropagation(container);
        }
        L.DomEvent.on(slider, 'mousedown mouseup click', L.DomEvent.stopPropagation);

        // TODO: if mouse enter / leave events are needed, uncomment this
        // L.DomEvent.on(container, 'mouseenter', function() {
        //     // TODO
        // }, this);
        //
        // L.DomEvent.on(container, 'mouseleave', function() {
        //     // TODO
        // }, this);


        // TODO: if this plugin provides events, adapt the following
        // this.fire('event_name', {event data obj});

        this._container = container;
        return this._container;
    }
});

L.control.pluginboilerplate = function (options) {
  return new L.Control.PluginBoilerplate(options);
};