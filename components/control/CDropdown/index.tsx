import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import style from './dropdown.module.css';
import {Quicksand} from '@next/font/google';
import clsx from 'clsx'

const quicksand = Quicksand({ subsets: ['latin'] });

const CDropdown = () => {
    return (
        <div className={style.dropdown}>
            <span className={clsx(quicksand.className, style.title)}>All Categories</span>
            <KeyboardArrowDownIcon/>
        </div>
    )
}

export default CDropdown