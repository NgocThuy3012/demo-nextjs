import style from './bestSellers.module.css'
import {categories, list} from '../../../../mock/bestsellers'
import Product from '../BestsellersItem'
import clsx from 'clsx'
import {Quicksand} from '@next/font/google';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const quick = Quicksand({ subsets: ['latin'] });

const CBestSellers = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div>
                    <div className={style.title}>Best Sellers</div>
                </div>
                <div>
                    {categories.map((item,index)=>(
                        <span key={index} className={clsx(style.item, quick.className, {[style.active]: item.active ?? false})}>
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>
            <div className={style.bestseller}>
                <div className={style.banner}>
                    <div className={style.bannerTitle}>
                        Bring nature into your home 
                    </div>
                    <button className={style.btnShop}>
                        <span className={style.titleShopnow}>Shop Now</span>
                        <ArrowForwardOutlinedIcon/>
                    </button>
                </div>
                <div className={style.list}>
                    <div className={style.bestList}>
                       {list.map((item, index) => (
                            <Product key={index} product={item}/>
                       ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CBestSellers