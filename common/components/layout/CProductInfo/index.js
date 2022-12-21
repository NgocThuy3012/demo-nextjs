import Image from 'next/image'
import style from './productinfo.module.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Rating } from '@mui/material';

const CProductInfo = ({data}) => {
    return (
        <div className={style.product}>
            <Image
                alt=''
                src={data.img}
                width={132}
                height={132}
                className={style.image}
            />
            <div>
                <div className={style.productName}>{data.name}</div>
                <div className={style.ratings}>
                    <Rating value={data.rating} className={style.star} readOnly emptyIcon={<StarOutlinedIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                    <span style={{marginLeft: '11px'}}>({data.rating})</span>
                </div>
                <div className={style.rating}>500 gram</div>
                <div className={style.bottom}>
                    <div className={style.price}>
                        <div className={style.priceNew}>{data.price_new}</div>
                        <div className={style.priceOld}>{data.price_old}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CProductInfo