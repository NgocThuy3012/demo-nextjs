import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import style from './dropdown.module.css';
import {Quicksand} from '@next/font/google';
import clsx from 'clsx'
import Image from 'next/image';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const quicksand = Quicksand({ subsets: ['latin'] });

const CDropdown = ({label, Icon, data}) => {
    
    return (
        <div className={clsx(style.dropdown, {textWhite: Icon})}>
            {Icon && <Icon className={style.iconleft}/>}
            <span className={clsx(quicksand.className, style.title )}>{label}</span>
            <KeyboardArrowDownIcon className={style.icon}/>
            {data && <div className={style.content}>
                <div className={style.data}>
                    {data?.map((item, index) => (
                        <div key={index} className={style.item}>
                            <Image
                                alt=''
                                src={item.img}
                                width={40}
                                height={40}
                            />
                            <div className={style.name}>{item.name}</div>
                        </div>
                    ))}
                </div>
                <div className={style.seeMore}>
                        <AddCircleOutlineIcon className={style.iconseeMore}/>
                        <span>More Categories</span>
                    </div>
            </div>}
        </div>
    )
}

export default CDropdown