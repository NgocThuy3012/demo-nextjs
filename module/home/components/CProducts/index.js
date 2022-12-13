import style from './products.module.css';
import {Quicksand} from '@next/font/google';
import clsx from 'clsx';
import {categories} from '../../../../mock/categories'
import {products} from '../../../../mock/product'
import CProduct from '../../../../common/components/layout/CProduct'

const quick = Quicksand({ subsets: ['latin'] });

const CProducts = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div>
                    <div className={style.title}>Popular Products</div>
                </div>
                <div>
                    {categories.map((item,index)=>(
                        <span key={index} className={clsx(style.item, quick.className, {[style.active]: item.active ?? false})}>
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>
            <div className={style.productList}>
                {products.map((item, index) => (
                    <CProduct key = {index} product = {item}/>
                ))}
            </div>
        </div>
    )
}

export default CProducts