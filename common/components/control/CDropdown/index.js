import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import style from './dropdown.module.css';
import {Quicksand} from '@next/font/google';
import clsx from 'clsx'

const quicksand = Quicksand({ subsets: ['latin'] });

const CDropdown = ({label, Icon}) => {
    
    return (
        <div className={clsx(style.dropdown, {textWhite: Icon})}>
            {Icon && <Icon className={style.iconleft}/>}
            <span className={clsx(quicksand.className, style.title )}>{label}</span>
            <KeyboardArrowDownIcon className={style.icon}/>
        </div>
    )
}

export default CDropdown