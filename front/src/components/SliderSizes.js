import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ledServices from '../services/ledServices';

export default function SliderSizes(props) {
  const {led,updateLed} = props;

  const handleChange = async(event, newValue) => {
    //do a get request to the server
    const res = await ledServices.brightnessControl({...led,brightness:newValue});
    if(res.status === 200){
      updateLed(res.data);
    }

  };

  return (
    <Box width={300}>
      <Slider
        size="small"
        value={led.brightness}
        aria-label="Small"
        valueLabelDisplay="auto"
        onChangeCommitted={handleChange}
      />
    </Box>
  );
}