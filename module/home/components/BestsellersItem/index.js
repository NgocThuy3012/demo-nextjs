import Image from 'next/image';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import style from './item.module.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import clsx from 'clsx'
import Rating from '@mui/material/Rating';

const Product = ({product}) => {
    return(
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
                <Rating value={product.rating} className={style.star} readOnly emptyIcon={<StarOutlinedIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                <span style={{marginLeft: '11px'}}>({product.rating})</span>
            </div>
            <div className={style.rating}>500 gram</div>
            <div className={style.bottom}>
                <div className={style.price}>
                    <div className={style.priceNew}>{product.price_new}</div>
                    <div className={style.priceOld}>{product.price_old}</div>
                </div>
            </div>
            <div className={style.line}>
                <div className={style.highlight}></div>
            </div>
            <div className={style.sold}>Sold: 90/120</div>
            <button className={style.btnAdd}><ShoppingCartOutlinedIcon className={style.iconCart}/> Add To Cart</button>
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

export default Product