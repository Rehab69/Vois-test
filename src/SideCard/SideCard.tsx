import { useState } from "react"; 
import Radio from '@mui/material/Radio'



interface dataSets {
  data: any;
}
export default function SideCard(props: dataSets) {
    const [data,setData]=useState()
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
      };
    
      const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
      });
 
  return <div>
    <p> First School</p> <Radio {...controlProps('b')} color="secondary" />
    <p> First School </p><Radio {...controlProps('b')} color="success" />
    <p> First School</p> <Radio {...controlProps('b')} color="secondary" />

  </div>;
}
