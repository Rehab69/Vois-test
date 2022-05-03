import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSchools, setChartDataSets } from "../../types/Action";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { RootState } from "../../store/store";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
interface schools {
  placeholder: string;
  dropDownItems: Array<string>;
}

export default function SchoolsMultiDropDown(props: schools) {
  const theme = useTheme();
  const [school, setSchool] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent<typeof school>) => {
    if (event.target.value == "all") {
      let value = props.dropDownItems;
      setSchool(value);
      dispatch(setSelectedSchools(props.dropDownItems));
      dispatch(setChartDataSets());
    } else {
      const {
        target: { value },
      } = event;
      dispatch(setSelectedSchools(value));
      dispatch(setChartDataSets());
      setSchool(typeof value === "string" ? value.split(",") : value);
    }
  };
  const selectedCountry: any = useSelector(
    (state: RootState) => state.chartReducer.selectedCountry
  );
  const selectedCamps: any = useSelector(
    (state: RootState) => state.chartReducer.selectedCamps
  );
  useEffect(() => {
    setSchool([]);
  }, [selectedCountry, selectedCamps]);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">
          {props.placeholder}
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={school}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          <MenuItem value="all"> Show all</MenuItem>

          {props.dropDownItems.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, school, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
// style={getStyles(props.dropDownItems, personName, theme)}
