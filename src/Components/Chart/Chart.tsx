import { useState,useRef ,useEffect} from "react"; 
import { createLessonsArray } from "./utils";
import {Line,getDatasetAtEvent, getElementAtEvent} from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
import {useNavigate}  from "react-router-dom";
import { setDetailsCardPoint } from "../../types/Action";


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
 //@ts-ignore
    setData(config.data)
    
  }, [props.data]);
  // const  onClick=(event:any) => {
  //   console.log(getElementAtEvent(chartRef.current, event));
  // }
  return data?<Line data={data} ref={chartRef} 
 //onClick={onClick}
//   onClick=(event)=>{
//    console.log("yy",getElementAtEvent(chartRef.current, event)[0].element)
//    let point= getElementAtEvent(chartRef.current, event)[0].element
// setDetailsCardPoint(point)
// setDetailsCardPoint({"dd":"dd"})
// }
//.element.raw
   />:<div></div>
}
