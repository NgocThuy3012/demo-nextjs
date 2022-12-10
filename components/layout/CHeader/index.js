import Image from "next/image"
import style from "./header.module.css"
import CDropdown from "../../control/CDropdown"
import CInput from "../../control/CInput"
import SearchIcon from '@mui/icons-material/Search';
import { InputBase} from '@mui/material'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CMenu from './CMenu';

const CHeader = () => {
    const menu = [
        {
            icon: PermIdentityOutlinedIcon,
            label:'Account',
            link:'',
            count:'',
        },
        {
            icon: ChangeCircleOutlinedIcon,
            label:'Compare',
            link:'',
            count:'',
        },
        {
            icon: FavoriteBorderOutlinedIcon,
            label:'Wishlist',
            link:'',
            count: 5,
        },
        {
            icon: ShoppingCartOutlinedIcon,
            label:'Cart',
            link:'',
            count: 4,
        },
    ];

    return (
        <div className={style.main}>
            <div className={style.headerLeft}>
                <Image
                    src={"/Logo.svg"}
                    alt="logo"
                    width={215}
                    height={66}
                />
                <div className={style.search}>
                    <CDropdown/>
                    <div className={style.line}></div>
                    <div className={style.input}>
                        <InputBase
                            sx = {{fontSize: '12px'}}
                            placeholder = 'Search for items'
                        />
                        <SearchIcon color="action" />
                    </div>
                </div>
            </div>
            <div className={style.headerRight}>
                {menu.map((item, index) => (
                    <CMenu 
                        link = {item.link}
                        Icon = {item.icon}
                        label = {item.label}
                        key = {index}
                        count = {item.count}
                    />
                ))}
            </div>
        </div>
    )
}

export default CHeader