import { letterFrequency } from "../../public/mocks/data.js";
import { bar } from "britecharts";
import { select } from "d3-selection";
require("britecharts/dist/css/britecharts.css");

const britechartsBar = () => {
  const barChart = bar();
  const barContainer = select("#chart");

  barChart.valueLabel("frequency").nameLabel("letter").width(900).height(600);

  barContainer.datum(letterFrequency).call(barChart);
};

(function () {
    britechartsBar();
})();
