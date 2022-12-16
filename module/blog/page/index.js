import style from '../styles/index.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import {tags} from '../../../mock/blog'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import {data} from '../../../mock/blog'
import clsx from 'clsx'
import {Quicksand} from '@next/font/google'
import Image from 'next/image';
import CBlog from '../components/CBlog';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CCard from '../components/CCard';

const quicksand = Quicksand({ subsets: ['latin'] });

const MBlog = () => {
    return (
        <div className={clsx(style.main, quicksand.className)}>
            <div className={style.banner}>
                <div>
                    <div className={style.header}>Blog & News</div>
                    <div className={style.breadcrumb}>
                        <span>Home</span>
                        <KeyboardArrowRightIcon/>
                        <span>Blog & News</span>
                    </div>
                </div>
                <div className={style.tagList}>
                    {tags.map((item, index) => (
                        <div key={index} className={clsx(style.tag, {[style.active]: item.active})}>
                            <CloseIcon className={style.iconClose}/>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.content}>
                <div className={style.contentLeft}>
                    <div className={style.category}>
                        <div className={style.title}>
                            <Image
                                alt=''
                                src={'/img/kitchen.svg'}
                                width={32}
                                height={35}
                            />
                            <span>Kitchen Articles</span>
                        </div>
                        <div className={style.show}>
                            <GridViewIcon/>
                            <span>Show: 50</span>
                            <KeyboardArrowDownIcon/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.search}>
                        <SearchIcon/>
                        <InputBase
                            placeholder = 'Search your recipes...'
                        />
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.contentLeft}>
                    <div>
                        {data.map((item, index) => (
                            <CBlog key={index} data={item}/>
                        ))}
                    </div>
                </div>
                <div>
                    <CCard/>
                </div>
            </div>
        </div>
    )
}

export default MBlog