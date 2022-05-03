const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export function createLessonsArray(dataSet: any) {
  const chartData = Object.keys(dataSet).reduce((a, c) => {
    const color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    const reducedData = dataSet[c].data.reduce(
      (accu: any, cur: any) => ({
        ...accu,
        [cur.x]: cur.y + (accu[cur.x] ?? 0),
      }),
      {}
    );
    return {
      ...a,
      [c]: {
        ...dataSet[c],
        backgroundColor: color,
        borderColor: color,
        data: Object.keys(reducedData ?? {})
          .map((i) => ({ x: i, y: reducedData[i] }))
          .sort((a, b) => labels.indexOf(a.x) - labels.indexOf(b.x)),
      },
    };
  }, {});

  const config = {
    type: "line",
    data: {
      labels,
      datasets: Object.values(chartData),
    },
    options: {},
  };
  return config;
}
