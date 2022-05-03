//import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import { setCamps, setSelectedCountry } from '../../types/Action';
import { useDispatch } from "react-redux";

interface countries{
  placeholder:string,
  dropDownItems:Array<string>
}

export default function CountriesDropDown(props:countries) {
  const [country, setCountry] = useState<string>('');
  const [open, setOpen] = useState(false);



  const dispatch = useDispatch();


  const handleChange = (event: SelectChangeEvent<typeof country>) => {
    setCountry(event.target.value);
    console.log("country",event.target.value)

    dispatch(setSelectedCountry(event.target.value))
    dispatch(setCamps())
    console.log("proops",props)
  };

 


  return (

    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{props.placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={country}
          onChange={handleChange}
          autoWidth
          label={props.placeholder}
        >
  
          {props.dropDownItems.map((item:any)=><MenuItem key={item} value={item}>
            {item}
          </MenuItem>)
          }
          
          
        
        </Select>
      </FormControl>
    </div>
  );
}
