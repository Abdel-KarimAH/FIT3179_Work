var vg_1 = "crashes_map.vg.json";
vegaEmbed("#map_visual", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_2 = "FatalitiesByOperator.vg.json";
vegaEmbed("#Bubble_visual", vg_2).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_3 = "donut_chart.vg.json";
vegaEmbed("#donut_visual", vg_3).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_4 = "WorldCloud.vg.json";
vegaEmbed("#WorldCloud_visual", vg_4).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);