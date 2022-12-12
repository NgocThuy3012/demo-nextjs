import style from './header.module.css'

const CMenu = ({Icon, label, link, count}) => {
    return (
        <div className={style.menuItem}> 
            <div className={style.icon}>
                {count && <div className={style.wishlistCount}>{count}</div>}
                <Icon/>
            </div>
            <span>{label}</span>
        </div>
    )
}

export default CMenu