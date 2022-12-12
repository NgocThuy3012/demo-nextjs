import style from './categories.module.css';
import {Montserrat} from '@next/font/google';
import clsx from 'clsx';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Image from 'next/image';
import {categories, list} from '../../../../mock/categories'


const mont = Montserrat({ subsets: ['latin'] });

const CCategories = () => {
    
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div>
                    <div className={style.title}>Featured Categories</div>
                </div>
                <div>
                    {categories.map((item,index)=>(
                        <span key={index} className={clsx(style.item, mont.className, {[style.active]: item.active ?? false})}>
                            {item.label}
                        </span>
                    ))}
                </div>
                <div className={style.arrow}>
                    <span className={style.arrowBack}> <ArrowBackOutlinedIcon/></span>
                    <span className={style.arrowForward}><ArrowForwardOutlinedIcon/></span>
                </div>
            </div>
            <div className={style.categoryList}>
                {list.map((item, index) => (
                    <div key={index} className={clsx(style.category,{[style.activeCategory]: item.active ?? false})} style = {{background: `${item.color}`}}>
                        <Image src={item.img} alt='' width = {120} height = {120}/>
                        <div className={style.categoryName}>{item.name}</div>
                        <div className={style.count}>{item.count}</div>
                    </div>
                ))}
                
            </div>
            <div className={style.hotCategory}>
                <div className={style.categoryItem}>
                    <div>
                        Everyday Fresh & Clean with Our Products
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CCategories