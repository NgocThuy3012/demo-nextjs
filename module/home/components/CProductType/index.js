import style from './producttype.module.css'
import CProductInfo from '../../../../common/components/layout/CProductInfo'
import {data} from '../../../../mock/producttype'

const CProductType = () => {
    return (
        <div className={style.productList}>
            {data.map((item, index) => (
                <div key={index}>
                    <div className={style.title}>{item.type}</div>
                    {item.products?.map((product, i) => (
                        <CProductInfo key={i}  data={product}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default CProductType