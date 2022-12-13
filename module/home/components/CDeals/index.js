import clsx from 'clsx'
import {Quicksand} from '@next/font/google';
import style from './deals.module.css'

const quick = Quicksand({ subsets: ['latin'] });

const CDeals = () => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div>
                    <div className={style.title}>Deals Of The Days</div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}

export default CDeals