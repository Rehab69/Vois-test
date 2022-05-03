import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RootState } from "../store/store";
import { useSelector } from "react-redux";


interface data{
    data:any
}
export default function SideCard(props:data) {
    const totalLessons: any = useSelector((state: RootState) => state.chartReducer.totalLessons);

  return (
    <FormControl>
      <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
       <label>{totalLessons}</label>
        <FormControlLabel
          value="start"
          control={<Radio />}
          label="Start"
          labelPlacement="start"
        />
        
      </RadioGroup>
    </FormControl>
  );
}
