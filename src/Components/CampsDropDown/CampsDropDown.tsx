//import * as React from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { useDispatch } from "react-redux";
import { setSchools, setSelectedCamps } from "../../types/Action";

interface camps {
  placeholder: string;
  dropDownItems: Array<string>;
}

export default function CampsDropDown(props: camps) {
  const [camps, setCamps] = useState<string>("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent<typeof camps>) => {
    setCamps(event.target.value);
    dispatch(setSelectedCamps(event.target.value));
    dispatch(setSchools())
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {props.placeholder}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={camps}
          onChange={handleChange}
          autoWidth
          label={props.placeholder}
        >
          {props.dropDownItems.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
