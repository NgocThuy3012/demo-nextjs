import { useState } from 'react';
import style from './filter.module.css'
import CSlider from '../../../../common/components/control/CSlider';

const CFilter = () => {
    const [value, setValue] = useState([10, 70]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className={style.main}>
            <div className={style.title}>Filter items</div>
            <div className={style.list}>
                <div>
                    Price Range:
                    <span>$16 - $173</span>
                </div>
                <CSlider
                    value = {value}
                    handleChange = {handleChange}
                />
            </div>
        </div>
    )
}

export default CFilter