import { useState, useRef, useEffect } from "react";
import { createLessonsArray } from "./utils";
import { Line, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartData,
  ChartDataset,
  registerables,
  ScatterDataPoint,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import { setDetailsCardPoint } from "../../types/Action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

ChartJS.register(...registerables);

interface dataSets {
  data: any;
}
export default function MyChart(props: dataSets) {
  const chartRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const details = () => {
    navigate("/details");
  };

  const newDataSets: any = useSelector(
    (state: RootState) => state.chartReducer.newDataSets
  );

  let config = createLessonsArray(newDataSets);

  const onClick = (event: any) => {
    //@ts-ignore
    let point = getElementAtEvent(chartRef.current, event)[0].element.$context
      .raw;
    dispatch(setDetailsCardPoint(point));
    details();
  };
  return config?.data ? (
    <Line
      data={{
        labels: config.data.labels,
        datasets: config.data.datasets as ChartDataset<
          "line",
          (number | ScatterDataPoint | null)[]
        >[],
      }}
      ref={chartRef}
      onClick={onClick}
    />
  ) : (
    <div></div>
  );
}
