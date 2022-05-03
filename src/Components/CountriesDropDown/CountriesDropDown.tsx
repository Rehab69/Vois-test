import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  setCamps,
  setEmptyDataSets,
  setSelectedCountry,
  setSelectedSchools,
} from "../../types/Action";
import { RootState } from "../../store/store";

interface countries {
  placeholder: string;
  dropDownItems: Array<string>;
}

export default function CountriesDropDown(props: countries) {
  const [country, setCountry] = useState<string>("");

  const selectedCountry: any = useSelector(
    (state: RootState) => state.chartReducer.selectedCountry
  );

  useEffect(() => {
    console.log(selectedCountry);
    if (selectedCountry) {
      setCountry(selectedCountry);
    }
  }, []);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent<typeof country>) => {
    if (event.target.value !== selectedCountry) {
      dispatch(setSelectedSchools([]));
      dispatch(setEmptyDataSets({}));
    }
    setCountry(event.target.value);
    dispatch(setSelectedCountry(event.target.value));
    dispatch(setCamps());
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
          value={country}
          onChange={handleChange}
          autoWidth
          label={props.placeholder}
        >
          {props.dropDownItems.map((item: any) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
