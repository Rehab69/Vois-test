import {useState} from 'react';
import { useSelector } from "react-redux";
import {useNavigate}  from "react-router-dom";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RootState } from "../../store/store";
import './DetailsCard.css'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function DetailsCard() {
    // const countries: any = useSelector(
    //     (state: RootState) => state.chartReducer.countries
    //   );
    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    }
    const totalLessons: any = useSelector((state: RootState) => state.chartReducer.totalLessons);
    const selectedCountry: any = useSelector((state: RootState) => state.chartReducer.selectedCountry);
    const selectedCamps: any = useSelector((state: RootState) => state.chartReducer.selectedCamps);
    const selectedSchools: any = useSelector((state: RootState) => state.chartReducer.selectedSchools);
    const detailsCardPoint: any = useSelector((state: RootState) => state.chartReducer.detailsCardPoint);
  return (
    <div className='card'>
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography variant="h5" component="div">
          Details 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Country: {selectedCountry}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Camp: {selectedCamps}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
         Month: {detailsCardPoint.x}  
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
Number of lessons {detailsCardPoint.y}          
<br />
        </Typography>
        {/* <Typography variant="body2">
{selectedCountry}          
<br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={home}>Home</Button>
      </CardActions>
    </Card>
    </div>
  );
}
