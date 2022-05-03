import {
  SET_BASICDATA,
  SET_COUNTRIES,
  SET_SELECTEDCOUNTRY,
  SET_CAMPS,
  SET_SELECTEDCAMPS,
  SET_SCHOOLS,
  SET_SELECTEDSCHOOLS,
  SET_CHARTDATASETS,
  SET_DETAILSCARDPOINT,
  SET_EMPTYDATASETS,
} from "../types/Action";

interface state {
  basicData: Array<any>;
  countries: Array<any>;
  selectedCountry: string;
  camps: Array<any>;
  selectedCamps: string;
  schools: Array<any>;
  selectedSchools: Array<any>;
  newDataSets: any;
  detailsCardPoint: any;
  totalLessons: string | number;
}

const initState: state = {
  basicData: [],
  countries: [],
  selectedCountry: "",
  camps: [],
  selectedCamps: "",
  schools: [],
  selectedSchools: [],
  newDataSets: {},
  detailsCardPoint: {},
  totalLessons: 0,
};

export default function mainReducer(state = initState, action: any) {
  switch (action.type) {
    case SET_BASICDATA:
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
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case SET_CAMPS:
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
      let filterdSchools = state.basicData.filter((obj) => {
        return (
          obj.country === state.selectedCountry &&
          obj.camp === state.selectedCamps
        );
      });
      const schools = Array.from(
        new Set(filterdSchools.map((obj: any) => obj.school))
      );
      return {
        ...state,
        schools,
      };
    case SET_SELECTEDSCHOOLS:
      return {
        ...state,
        selectedSchools: [...action.payload],
      };
    case SET_CHARTDATASETS:
    //   let temp: any = {};
    //   let lessonsNum = 0;

      const filteredData = state.basicData.filter(
        (i) =>
          i.country === state.selectedCountry &&
          i.camp === state.selectedCamps &&
          state.selectedSchools.includes(i.school)
      );

      const dataSet = filteredData.reduce((a, c) => {
        return {
          ...a,
          [c.school]: {
            ...a[c.school],
            label: c.school,
            data: [...(a[c.school]?.data ?? []), { x: c.month, y: c.lessons }],
          },
        };
      }, {});

      return {
        ...state,
        newDataSets: dataSet,
      };
    case SET_DETAILSCARDPOINT:
      return {
        ...state,
        detailsCardPoint: { ...action.payload },
      };
    case SET_EMPTYDATASETS:
      return {
        ...state,
        newDataSets: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
