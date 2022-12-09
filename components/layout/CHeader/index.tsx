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

const CHeader = () => {
    const menu = [
        {
            icon: PermIdentityOutlinedIcon,
            label:'Account',
            link:''
        },
        {
            icon: ChangeCircleOutlinedIcon,
            label:'Compare',
            link:''
        },
        {
            icon: FavoriteBorderOutlinedIcon,
            label:'Wishlist',
            link:''
        },
        {
            icon: ShoppingCartOutlinedIcon,
            label:'Cart',
            link:''
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

            </div>
        </div>
    )
}

export default CHeader