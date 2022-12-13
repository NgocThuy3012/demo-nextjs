import Image from 'next/image';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import style from './product.module.css'
import clsx from 'clsx'

const CProduct = ({product}) => {
    
    return (
        <div className={style.product}>
            <div className={style.productImg}>
                <Image 
                    alt=''
                    src={product.img}
                    width={210}
                    height={140}
                />
            </div>
            <div className={style.category}>Hodo Foods</div>
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
            {product.status && <div className={clsx(style.status,
                {[style.discount]: product.status[0].id === 1 ?? false},
                {[style.hot]: product.status[0].id === 2 ?? false},
                {[style.sale]: product.status[0].id === 3 ?? false},
            )}>
                {product.status[0].title}
            </div>}
        </div>
    )
}

export default CProduct