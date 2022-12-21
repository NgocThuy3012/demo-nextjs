import { Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

const CCheckbox = ({data}) => {
    const [checked, setChecked] = useState(data.checked)

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    
    return (
        <>
            <FormControlLabel 
                control={
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        sx={{
                            color: '#D7DEDB',
                                '&.Mui-checked': {
                                color: '#3BB77E',
                                },
                        }}
                    />
                }
                sx={{
                    color: `${checked ? '#253D4E':'#B6B6B6'}`,
                }}
                    label={data.name}
                />
        </>
    )
}

export default CCheckbox