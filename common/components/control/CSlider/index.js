import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material'


const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3BB77E',
    height: 5,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      backgroundColor: '#3BB77E',
      border: '1px solid #3BB77E',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: '#3BB77E',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 5,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#F2F3F4' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 5,
    },
  }));

  
const CSlider = ({value, handleChange, valueLabelFormat, calculateValue}) => {
    return (
        <AirbnbSlider
            getAriaValueText={valueLabelFormat}
            getAriaLabel={() => 'Temperature range'}
            valueLabelDisplay="auto"
            valueLabelFormat={valueLabelFormat}
            scale={calculateValue}
            value={value}
            onChange={handleChange}
            disableSwap
        />
    )
}

export default CSlider