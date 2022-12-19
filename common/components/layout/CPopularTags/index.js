import style from './popularTags.module.css'
import {popularTags as list} from '../../../../mock/blog'

const CPopularTags = () => {
    return (
        <div className={style.main}>
            <div className={style.title}>Popular Tags</div>
            <div className={style.list}>
                {list.map((item, index) => (
                    <div key={index} className={style.item}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CPopularTags