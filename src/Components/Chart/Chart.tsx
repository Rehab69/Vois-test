import { useState,useRef ,useEffect} from "react"; 
import { createLessonsArray } from "./utils";
import {Line,getDatasetAtEvent, getElementAtEvent} from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
import {useNavigate}  from "react-router-dom";
import { setDetailsCardPoint } from "../../types/Action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";



ChartJS.register(...registerables);


interface dataSets {
  data: any;
}
export default function MyChart(props: dataSets) {
    const [data,setData]=useState()
    const chartRef = useRef<HTMLInputElement>()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const details = () => {
        navigate("/details")
    }
    const selectedCountry: any = useSelector((state: RootState) => state.chartReducer.selectedCountry);
    const selectedCamps: any = useSelector((state: RootState) => state.chartReducer.selectedCamps);

  useEffect(() => {
    
    let config = createLessonsArray(props.data);
 //@ts-ignore
    setData(config.data)
    
  }, [props.data]);

  const  onClick=(event:any) => {
    //@ts-ignore
    //console.log("OOOO",getElementsAtEvent(chartRef.current, event))
    //@ts-ignore
    let point= getElementAtEvent(chartRef.current,event)[0].element.$context.raw
    dispatch(setDetailsCardPoint(point))
    details()

  }
  //@ts-ignore
  return data?<Line data={data} ref={chartRef} 
 onClick={onClick}
//   onClick=(event)=>{
//    console.log("yy",getElementAtEvent(chartRef.current, event)[0].element)
//    let point= getElementAtEvent(chartRef.current, event)[0].element
// setDetailsCardPoint(point)
// setDetailsCardPoint({"dd":"dd"})
// }
//.element.raw
   />:<div></div>
}
