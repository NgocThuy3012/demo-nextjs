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
                    <div className={style.bannerImg}>
                        <Image
                            alt=''
                            src={'/img/delivery.svg'}
                            width={418}
                            height={360}
                            className={style.delivery}
                        />
                        <Image
                            alt=''
                            src={'/img/tomato.svg'}
                            width={203}
                            height={240}
                            className={style.tomato}
                        />
                        <Image
                            alt=''
                            src={'/img/bellpeper.svg'}
                            width={203}
                            height={240}
                            className={style.bellpeper}
                        />
                        <Image
                            alt=''
                            src={'/img/garlic.svg'}
                            width={203}
                            height={240}
                            className={style.garlic}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage