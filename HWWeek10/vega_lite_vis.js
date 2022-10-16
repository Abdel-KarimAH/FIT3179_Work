var vg_1 = "crashes_map.vg.json";
vegaEmbed("#map_visual", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_2 = "FatalitiesByOperator.vg.json";
vegaEmbed("#bubble_visual", vg_2).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
