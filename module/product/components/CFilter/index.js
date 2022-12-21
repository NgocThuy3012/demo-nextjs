import { useState } from 'react';
import style from './filter.module.css'
import CSlider from '../../../../common/components/control/CSlider';
import {formatter} from '../../../../common/utils/formatNumber'
import { brands, usedList} from '../../../../mock/filter';
import CCheckbox from '../../../../common/components/control/CCheckbox';


const CFilter = () => {
    const [value, setValue] = useState([10, 70]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const valueLabelFormat = (value) => {
     
        return formatter.format(value);
    }
    
    const calculateValue = (value) => {
        return (237/100) * value;
    }

    return (
        <div className={style.main}>
            <div className={style.title}>Filter items</div>
            <div className={style.list}>
                <div>
                    Price Range:
                    <span className={style.price}>
                        {valueLabelFormat(calculateValue(value[0]))} - {valueLabelFormat(calculateValue(value[1]))}
                    </span>
                </div>
                <CSlider
                    value = {value}
                    handleChange = {handleChange}
                    valueLabelFormat = {valueLabelFormat}
                    calculateValue = {calculateValue}
                />
                <div>Used for:</div>
                {usedList.map((item, index) => (
                    <div key={index}><CCheckbox data={item}/></div>
                ))}
                <div>Brand:</div>
                {brands.map((item, index) => (
                    <div key={index}><CCheckbox data={item}/></div>
                ))}
                
                
            </div>
        </div>
    )
}

export default CFilter