import { letterFrequency } from "../../public/mocks/data";
export const billBoardBarChart = () => {
  //data formatting
  const categories = letterFrequency.map(({ letter }) => letter);
  const frequencies = letterFrequency.map(({ frequency }) => frequency);
  bb.generate({
    data: {
      x: "x",
      columns: [
        ["x", ...categories],
        ["frequency", ...frequencies],
      ],
      type: "bar",
    },
    axis: {
      x: {
        type: "category",
      },
    },
    bindto: "#chart-container",
  });
};
(function () {
  billBoardBarChart();
})();
