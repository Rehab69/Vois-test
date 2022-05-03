import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmptyDataSets,
  setSchools,
  setSelectedCamps,
  setSelectedSchools,
} from "../../types/Action";
import { RootState } from "../../store/store";

interface camps {
  placeholder: string;
  dropDownItems: Array<string>;
}

export default function CampsDropDown(props: camps) {
  const [camps, setCamps] = useState<string>("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const selectedCamps: any = useSelector(
    (state: RootState) => state.chartReducer.selectedCamps
  );

  const handleChange = (event: SelectChangeEvent<typeof camps>) => {
    if (event.target.value !== selectedCamps) {
      dispatch(setSelectedSchools([]));
      dispatch(setEmptyDataSets({}));
    }
    setCamps(event.target.value);
    dispatch(setSelectedCamps(event.target.value));
    dispatch(setSchools());
    window.localStorage.setItem("camp", event.target.value);
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
