import { AnyAction } from "@reduxjs/toolkit";

export const SET_COUNTRIES:string = "SET_COUNTRIES";
export const SET_SELECTEDCOUNTRY:string = "SET_SELECTEDCOUNTRY";
export const SET_BASICDATA:string = "SET_BASICDATA";
export const SET_CAMPS:string = "SET_CAMPS";
export const SET_SELECTEDCAMPS:string = "SET_SELECTEDCAMPS";
export const SET_SCHOOLS:string = "SET_SCHOOLS";
export const SET_SELECTEDSCHOOLS:string = "SET_SELECTEDSCHOOLS";
export const SET_CHARTDATASETS:string = "SET_CHARTDATASETS";



interface ActionSetBasicData {
    type: string,
    payload: any,
}
interface ActionSetCountries {
    type: string,
    payload: any,
}
interface ActionSetSelectedCountry {
    type: string,
    payload: any,
}
interface ActionSetCamps {
    type: string,
    
}
interface ActionSetSelectedCamps {
    type: string,
    payload: any,
}
interface ActionSetSchools {
    type: string,
    
}
interface ActionSetSelectedSchools {
    type: string,
    payload: any,
}
interface ActionSetChartDataSets {
    type: string,
    
}
export const setBasicData =(payload:any): ActionSetBasicData => {
    return{
        type: SET_BASICDATA,
        payload:payload
    }
}

export const setCountries =(payload:any): ActionSetCountries => {
    return{
        type: SET_COUNTRIES,
        payload:payload
    }
}
export const setSelectedCountry =(payload:any): ActionSetSelectedCountry => {
    return{
        type: SET_SELECTEDCOUNTRY,
        payload:payload
    }
}
export const setCamps =(): ActionSetCamps => {
    return{
        type: SET_CAMPS,
    }
}
export const setSelectedCamps =(payload:any): ActionSetSelectedCamps => {
    return{
        type: SET_SELECTEDCAMPS,
        payload:payload
    }
}
export const setSchools =(): ActionSetSchools => {
    return{
        type: SET_SCHOOLS,
    }
}
export const setSelectedSchools =(payload:any): ActionSetSelectedSchools => {
    return{
        type: SET_SELECTEDSCHOOLS,
        payload:payload
    }
}
export const setChartDataSets =(): ActionSetChartDataSets => {
    return{
        type: SET_CHARTDATASETS,
    }
}
//export type Action = ActionSetCountries |ActionSetSelectedCountry |ActionSetBasicData ;