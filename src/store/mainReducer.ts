import {
  SET_BASICDATA,
  SET_COUNTRIES,
  SET_SELECTEDCOUNTRY,
  SET_CAMPS,
  SET_SELECTEDCAMPS,
  SET_SCHOOLS,
  SET_SELECTEDSCHOOLS,
  SET_CHARTDATASETS,
} from "../types/Action";

interface state {
  basicData: Array<any>;
  countries: Array<any>;
  selectedCountry: string;
  camps: Array<any>;
  selectedCamps: string;
  schools: Array<any>;
  selectedSchools: Array<any>;
  //chartDataSets: Array<any>;
  newDataSets: any;
}

const initState: state = {
  basicData: [],
  countries: [],
  selectedCountry: "",
  camps: [],
  selectedCamps: "",
  schools: [],
  selectedSchools: [],
  //chartDataSets: [],
  newDataSets: {},
};

export default function mainReducer(state = initState, action: any) {
  switch (action.type) {
    case SET_BASICDATA:
      console.log("set basic data");

      return {
        ...state,
        basicData: [...action.payload],
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: [...action.payload],
      };
    case SET_SELECTEDCOUNTRY:
      console.log("set country");
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case SET_CAMPS:
      console.log("set camps");
      let filterdCamps = state.basicData.filter((obj) => {
        return obj.country === state.selectedCountry;
      });
      var camps = Array.from(new Set(filterdCamps.map((obj: any) => obj.camp)));
      return {
        ...state,
        camps: camps,
      };
    case SET_SELECTEDCAMPS:
      return {
        ...state,
        selectedCamps: action.payload,
      };
    case SET_SCHOOLS:
      console.log("set schools");
      let filterdSchools = state.basicData.filter((obj) => {
        return (
          obj.country === state.selectedCountry &&
          obj.camp === state.selectedCamps
        );
      });
      var schools = Array.from(
        new Set(filterdSchools.map((obj: any) => obj.school))
      );
      return {
        ...state,
        schools: schools,
      };
    case SET_SELECTEDSCHOOLS:
      console.log("set schools", action.payload);

      return {
        ...state,
        selectedSchools: [...action.payload],
      };
    case SET_CHARTDATASETS:
      console.log("set data sets");
      let temp: any = {};
      state.selectedSchools.map((school) => {
        let filterdData = state.basicData.filter((obj) => {
          return (
            obj.country === state.selectedCountry &&
            obj.camp === state.selectedCamps &&
            obj.school === school
          );
        });
        let newDataMonth: any = {};
        filterdData.map((month) => {
          newDataMonth[month.id] = month;
        });
        temp[school] = newDataMonth;
      });

      return {
        ...state,
        newDataSets: temp,
      };
    default:
      return {
        ...state,
      };
  }
}
