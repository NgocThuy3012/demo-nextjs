import CProduct from '../../../../common/components/layout/CProduct'
import { list} from '../../../../mock/bestsellers'
import style from './related.module.css'

const CRelated = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div>
                    <div className={style.title}>Related products</div>
                </div>
            </div>
            <div className={style.bestList}>
                {list.map((item, index) => (
                    <CProduct key={index} product={item}/>
                ))}
            </div>               
        </div>
    )
}

export default CRelated