import clsx from 'clsx'
import {Quicksand} from '@next/font/google';
import style from './deals.module.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {deals} from '../../../../mock/dealsOfTheDays'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CCountdown from '../../../../common/components/control/CCountdown'

const quick = Quicksand({ subsets: ['latin'] });

const CDeals = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div>
                    <div className={style.title}>Deals Of The Days</div>
                </div>
                <div>
                    <span className={clsx(style.item, quick.className)}>
                        All Deals
                        <ArrowForwardIosOutlinedIcon className={style.icon}/>
                    </span>
                </div>
            </div>
            <div className={style.list} >
                {deals.map((product, index) => (
                    <div key={index} className={style.product} style = {{background: `url(${product.img}) no-repeat`}}>
                        <div className={style.info}>
                           <CCountdown date = {product.date}/>
                            <div className={style.infodetail}>
                                <div className={style.productName}>{product.name}</div>
                                <div className={style.ratings}>
                                    {[...Array(product.rating)].map((x,i) => (
                                        <StarOutlinedIcon key={i} className={style.star}/>
                                    ))}
                                    {[...Array(5-product.rating)].map((x,i) => (
                                        <StarOutlinedIcon key={i} className={style.rating}/>
                                    ))}
                                    <span style={{marginLeft: '11px'}}>({product.rating})</span>
                                </div>
                                <div className={style.rating}>500 gram</div>
                                <div className={style.bottom}>
                                    <div className={style.price}>
                                        <div className={style.priceNew}>{product.price_new}</div>
                                        <div className={style.priceOld}>{product.price_old}</div>
                                    </div>
                                    <div>
                                        <button className={style.addBtn}>
                                            Add 
                                            <AddOutlinedIcon className={style.iconBtn}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CDeals