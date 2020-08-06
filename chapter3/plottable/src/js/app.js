import { letterFrequency } from "../../public/mocks/data.js";
import { Scales, Axes, Plots, Dataset, Components } from "plottable";
require("../css/style.css");
export const plottableBarChart = () => {
  const xScale = new Scales.Category();
  const yScale = new Scales.Linear();

  const xAxis = new Axes.Category(xScale, "bottom");
  const yAxis = new Axes.Numeric(yScale, "left");

  const plot = new Plots.Bar();
  const letter = (d) => d.letter;
  const frequency = (d) => d.frequency;
  plot.x(letter, xScale);
  plot.y(frequency, yScale);

  const dataset = new Dataset(letterFrequency);
  plot.addDataset(dataset);

  const chart = new Components.Table([
    [yAxis, plot],
    [null, xAxis],
  ]);
  chart.renderTo("#plottable-container");
};
(function () {
  plottableBarChart();
})();
