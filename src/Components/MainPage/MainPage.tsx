import DropDown from '../DropDown';
import { useState,useEffect } from 'react';
import MultiDropDown from '../MultiDropDown/MultiDropDown';
import './MainPage.css'

function MainPage() {
    const [countries,setCountries]=useState<string[]>([]);
    const [camps,setCamps]=useState<string[]>([]);
    const [schools,setSchools]=useState<string[]>([]);



    useEffect(()=>{
        fetch(
          "https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json")
                      .then((res) => res.json())
                      .then((json) => {
                        setCountries(Array.from(new Set( json.map((obj:any)=>obj.country))))
                        setCamps(Array.from(new Set( json.map((obj:any)=>obj.camp))))
                         setSchools(Array.from(new Set( json.map((obj:any)=>obj.school))))
    
                         
    
                      })
                      console.log("countries",countries)
                      console.log("camps",camps)
                      console.log("schools",schools)
    
      })
   

  return (
    <div className='topContainer' >
        <DropDown/>
        <DropDown/>
        <MultiDropDown/>

    </div>
  );
}

export default MainPage;