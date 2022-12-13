import CHeader from '../../../common/components/layout/CHeader'
import CNavbar from '../../../common/components/layout/CNavbar'
import CBanner from '../components/CBanner'
import style from '../styles/homePage.module.css'
import {Quicksand} from '@next/font/google'
import clsx from 'clsx'
import CCategories from '../components/CCategories'
import CProducts from '../components/CProducts'
import CBestSellers from '../components/CBestsellers'
import CDeals from '../components/CDeals'

const quicksand = Quicksand({ subsets: ['latin'] });

const HomePage = () => {
    return (
        <>
            <CHeader/>
            <CNavbar/>
            <div className={clsx(style.content, quicksand.className)}>
                <CBanner/>
                <CCategories/>
                <CProducts/>
                <CBestSellers/>
                <CDeals/>
            </div>
        </>
    )
}

export default HomePage