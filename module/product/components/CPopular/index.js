import style from './popular.module.css'
import {popularItems} from '../../../../mock/filter'
import CProductInfo from '../../../../common/components/layout/CProductInfo'

const CPopular = () => {
    return (
        <div className={style.main}>
            <div className={style.title}>Popular Items</div>
            <div className={style.list}>
                {popularItems.map((item, index)=>(
                    <CProductInfo key={index} data={item}/>
                ))}
            </div>
        </div>
    )
}

export default CPopular