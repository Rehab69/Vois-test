import { useState,useRef ,useEffect} from "react"; 
import { createLessonsArray } from "./utils";
import {Line,getDatasetAtEvent, getElementAtEvent} from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
import {useNavigate}  from "react-router-dom";

ChartJS.register(...registerables);


interface dataSets {
  data: any;
}
export default function MyChart(props: dataSets) {
    const [data,setData]=useState()
    const chartRef = useRef()
    const navigate = useNavigate();
  
    const details = () => {
        navigate("/details")
    }
    
  useEffect(() => {
    let config = createLessonsArray(props.data);
    console.log("proops",config)
 //@ts-ignore
    setData(config.data)
    
  }, [props.data]);
  console.log("chart props", data);
//@ts-ignore
  return data?<Line data={data} ref={chartRef} 
  //@ts-ignore
onClick={details}
   />:<div></div>
}
