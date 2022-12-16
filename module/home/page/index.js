import CBanner from '../components/CBanner'
import style from '../styles/homePage.module.css'
import {Quicksand} from '@next/font/google'
import clsx from 'clsx'
import CCategories from '../components/CCategories'
import CProducts from '../components/CProducts'
import CBestSellers from '../components/CBestsellers'
import CDeals from '../components/CDeals'
import CProductType from '../components/CProductType'
import Image from 'next/image'

const quicksand = Quicksand({ subsets: ['latin'] });

const HomePage = () => {
    return (
        <>
            <div className={clsx(style.content, quicksand.className)}>
                <CBanner/>
                <CCategories/>
                <CProducts/>
                <CBestSellers/>
                <CDeals/>
                <CProductType/>
                <div className={style.banner}>
                    <div className={style.bannercontent}>
                        <div className={style.title}>
                            Stay home & get your daily needs from our shop
                        </div>
                        <div className={style.description}>
                        {` Start You'r Daily Sopping with Nest Mart`}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage