import { useState, useEffect } from "react";

import SchoolsMultiDropDown from "../SchoolsMultiDropDown/SchoolsMultiDropDown";
import CountriesDropDown from "../CountriesDropDown/CountriesDropDown";
import "./MainPage.css";
import { getData } from "./dataAPI";
import { useDispatch } from "react-redux";
import { setBasicData, setCountries } from "../../types/Action";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CampsDropDown from "../CampsDropDown/CampsDropDown";
import MyChart from "../Chart/Chart";
import SideCard from "../../SideCard/SideCard";
import DetailsCard from "../DetailsPage/DetailsCard";


function MainPage() {
  const dispatch = useDispatch();
  const countries: any = useSelector(
    (state: RootState) => state.chartReducer.countries
  );
  const camps: any = useSelector((state: RootState) => state.chartReducer.camps);
  const schools: any = useSelector(
    (state: RootState) => state.chartReducer.schools
  );
  const newDataSets: any = useSelector(
    (state: RootState) => state.chartReducer.newDataSets
  );
  const basicData: any = useSelector(
    (state: RootState) => state.chartReducer.basicData
  );

  let labels = Array.from(new Set(basicData.map((obj: any) => obj.month)));

  useEffect(() => {
    (async () => {
      const response: [Array<string>, Array<string>, Array<string>] | string =
        await getData(
          "https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json"
        );
      dispatch(setBasicData(response[0]));
      dispatch(setCountries(response[1]));
    })();
  }, []);

  useEffect(() => {
    // console.log(countries)
  }, [countries]);

 
  return (
    <>
    <div className="topContainer">
      {/* <DropDown placeholder='schools' dropDownItems={countries}/> */}
      <CountriesDropDown placeholder="countries" dropDownItems={countries} />
      <CampsDropDown placeholder="camps" dropDownItems={camps} />

      <SchoolsMultiDropDown placeholder="schools" dropDownItems={schools} />
      
    </div>
    
    {Object.entries(newDataSets).length>0 &&
    
    <div className="topContainer"><MyChart data={newDataSets}/>
   <div className="side"> <SideCard  data={newDataSets}/></div>
    </div>
   
 }

 
  </>
  );
}

export default MainPage;
