import CDropdown from '../../control/CDropdown'
import style from './navbar.module.css'
import GridViewIcon from '@mui/icons-material/GridView';
import {Quicksand} from '@next/font/google';
import clsx from 'clsx'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import navigation from '../../../routes/navigation'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import {list} from '../../../../mock/categories'

const quicksand = Quicksand({ subsets: ['latin'] });

const CNavbar = () => {
   

    return (
        <div className={clsx(quicksand.className, style.main)}>
            <div className={style.menuLeft}>
                <div className={style.allCategory}>
                    <CDropdown
                        label = 'Browse All Categories'
                        Icon = {GridViewIcon}
                        data = {list}
                    />
                </div>
                <div className={style.navigation}>
                    <div className={style.menuItem}>
                        <LocalFireDepartmentOutlinedIcon className={style.icon}/>
                        <span>Hot Deals</span>
                    </div>
                    {navigation.map((nav, index) => (
                        <div key = {index} className={style.menuItem}>
                            <span>{nav.title}</span>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className={style.menuRight}>
                <HeadsetMicOutlinedIcon className={style.headPhone}/>
                <div>
                    <div className={style.numberPhone}>1900 - 8888</div>
                    <div className={style.support}>24/7 Support Center</div>
                </div>
            </div>
        </div>
    )
}

export default CNavbar