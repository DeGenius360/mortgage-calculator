import React, {Fragment} from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount, reverseOrder }) => {
  return (
    <>
      <Stack my={1.4}>
        {/**Fake dom */}
        <Stack gap={1} direction='column'>
        <Typography variant="subtitle2">{label}</Typography>
          {reverseOrder ? (
            <Typography variant="h5">{unit}{amount}</Typography>
          ) : (
            <Typography variant="h5">{amount}{unit}</Typography>
          )}
        </Stack>
        <Slider
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          marks
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={onChange}
          value={value}
          
        />
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption" color='text.secondary'>{unit} {min}</Typography>
          <Typography variant="caption" color='text.secondary'>{unit}{max}</Typography>
        </Stack>
      </Stack>
  </>
  );
};

export default SliderComponent;
