import { letterFrequency } from "../../public/mocks/data";
import * as fc from "d3fc";
import * as d3 from "d3";

export const d3fcBarChart = function () {
  const barSeries = fc
    .autoBandwidth(fc.seriesSvgBar())
    .crossValue((d) => d.letter)
    .align("left")
    .mainValue((d) => d.frequency)
    .decorate((selection) => {
      selection.select("path").style("fill", "steelblue");
    });
  const yExtent = fc
    .extentLinear()
    .pad([0, 0.5])
    .include([0])
    .accessors([(d) => d.frequency]);

  const chart = fc
    .chartCartesian(d3.scaleBand(), d3.scaleLinear())
    .xDomain(letterFrequency.map((d) => d.letter))
    .xPadding(0.2)
    .yDomain(yExtent(letterFrequency))
    .yTicks(10, "%")
    .yOrient("left")
    .svgPlotArea(barSeries);
  d3.select("body").transition().style("color", "red");

  d3.select("#barChart").datum(letterFrequency).call(chart);
};

(function () {
  d3fcBarChart();
})();
