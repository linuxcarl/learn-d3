import json from "../../public/mocks/data.json";
//exmple by web https://bl.ocks.org/domoritz/cd636b15fa0e187b51b73fc60b4d3014
(function () {
  vegaEmbed("#barChart", json)
    // result.view provides access to the Vega View API
    .then((result) => console.log(result))
    .catch(console.warn);
})();