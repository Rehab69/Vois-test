import { ActiveElement, ChartEvent } from "chart.js";
import { globalAgent } from "http";

export function createLessonsArray(rawData: any) {
    console.log("rawdata",rawData)
  const lessons: any = {};

  for (let [i, v] of Object.entries(rawData)) {
    if (!lessons.hasOwnProperty(i)) lessons[i] = {};
    for (let [x, y] of Object.entries(rawData[i])) {
      //@ts-ignore
      if (!lessons[i][y.month]) lessons[i][y.month] = 0;
      //@ts-ignore
      lessons[i][y.month] += y.lessons;
    }
  }
  //   for (let [i, v] of Object.entries(lessons)) {
  //     //@ts-ignore
  //     lessons[i] = Object.values(v);
  //   }
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
  console.log("month",lessons)

  const data = {
      
    labels,
    datasets: Object.entries(lessons).map(([i, v]) => {
      const color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
      return {
        label: i,
        backgroundColor: color,
        borderColor: color,
        //@ts-ignore
        data: Object.entries(v).map(([month, less]) => {
          return { x: month, y: less };
        }),
       
      };
    }),
  };
  console.log("data",data.datasets)
 data.datasets.forEach((set)=>{
      set.data.sort(function(a:any,b:any){
          console.log("a,b",a,b)
          console.log("a.values",a.x)
         return labels.indexOf(a.x)-labels.indexOf(b.x)
    })
  }
  )

  const config = {
    type: "line",
    data,
    options: {
      scales: {
        y:{
            min:0,
            max:500
        }
      },
}}
  return config;
}
