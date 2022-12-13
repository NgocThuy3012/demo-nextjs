import style from './product.module.css';
import {Montserrat} from '@next/font/google';
import clsx from 'clsx';
import Image from 'next/image';
import {categories} from '../../../../mock/categories'
import {products} from '../../../../mock/product'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const mont = Montserrat({ subsets: ['latin'] });

const CProduct = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div>
                    <div className={style.title}>Popular Products</div>
                </div>
                <div>
                    {categories.map((item,index)=>(
                        <span key={index} className={clsx(style.item, mont.className, {[style.active]: item.active ?? false})}>
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>
            <div className={style.productList}>
                {products.map((item, index) => (
                    <div key={index} className={style.product}>
                        <div className={style.productImg}>
                            <Image 
                                alt=''
                                src={item.img}
                                width={210}
                                height={140}
                            />
                        </div>
                        <div className={style.category}>Hodo Foods</div>
                        <div className={style.productName}>{item.name}</div>
                        <div className={style.ratings}>
                            <StarOutlinedIcon className={style.star}/>
                            <StarOutlinedIcon className={style.star}/>
                            <StarOutlinedIcon className={style.star}/>
                            <StarOutlinedIcon className={style.rating}/>
                            <span style={{marginLeft: '11px'}}>({item.rating})</span>
                        </div>
                        <div className={style.rating}>500 gram</div>
                        <div className={style.bottom}>
                            <div className={style.price}>
                                <div className={style.priceNew}>{item.price_new}</div>
                                <div className={style.priceOld}>{item.price_old}</div>
                            </div>
                            <div>
                                <button className={style.addBtn}>
                                    Add 
                                    <AddOutlinedIcon className={style.iconBtn}/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CProduct