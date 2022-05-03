import { useEffect } from "react";
import SchoolsMultiDropDown from "../SchoolsMultiDropDown/SchoolsMultiDropDown";
import CountriesDropDown from "../CountriesDropDown/CountriesDropDown";
import { getData } from "./dataAPI";
import { useDispatch } from "react-redux";
import { setBasicData, setCountries } from "../../types/Action";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CampsDropDown from "../CampsDropDown/CampsDropDown";
import MyChart from "../Chart/Chart";
import "./MainPage.css";

function MainPage() {
  const dispatch = useDispatch();
  const countries: any = useSelector(
    (state: RootState) => state.chartReducer.countries
  );
  const camps: any = useSelector(
    (state: RootState) => state.chartReducer.camps
  );
  const schools: any = useSelector(
    (state: RootState) => state.chartReducer.schools
  );
  const newDataSets: any = useSelector(
    (state: RootState) => state.chartReducer.newDataSets
  );
 

  useEffect(() => {
    (async () => {
      const response: [Array<string>, Array<string>, Array<string>] | string =
        await getData(
          "https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json"
        );
        
      dispatch(setBasicData(response[0]));
      dispatch(setCountries(response[1]));
    })();
  },[]);

 

  return (
    <>
      <div className="topContainer">
        <CountriesDropDown placeholder="countries" dropDownItems={countries} />
        <CampsDropDown placeholder="camps" dropDownItems={camps} />

        <SchoolsMultiDropDown placeholder="schools" dropDownItems={schools} />
      </div>

      {Object.entries(newDataSets).length > 0 && (
        <div className="topContainer">
          <MyChart data={newDataSets} />
        </div>
      )}
    </>
  );
}

export default MainPage;
