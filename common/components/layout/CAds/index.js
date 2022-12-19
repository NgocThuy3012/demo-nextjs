import style from './ads.module.css'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const CAds = () => {
    return (
        <div className={style.main}>
            <div className={style.label}>Summer Deals</div>
            <div className={style.title}>TOP HEALTHY FOOD</div>
            <div className={style.description}>Get 35% OFF on selected items</div>
            <button className={style.btnShop}>
                <span className={style.titleShopnow}>Shop Now</span>
                <ArrowForwardOutlinedIcon/>
            </button>
        </div>
    )
}

export default CAds