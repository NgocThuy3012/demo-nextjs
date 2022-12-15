import style from './footer.module.css'
import Image from 'next/image'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import {datafooter} from '../../../../mock/footer'
import clsx from 'clsx'

const CFooter = () => {
    return (
        <div className={style.footer}>
            <div className=''>
                <Image
                    alt=''
                    src={'/Logo.svg'}
                    width={215}
                    height={66}
                />
                <div className={clsx(style.content, style.margin)}>
                    Pellentesque posuere orci lobortis
                </div>
                <div className={style.content}>
                    <RoomOutlinedIcon className={style.icon}/>
                    <span>Address: </span>
                    5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </div>
                <div className={style.content}>
                    <HeadsetMicOutlinedIcon className={style.icon}/>
                    <span>Call Us: </span>
                    (+91) - 540-025-124553 
                </div>
                <div className={style.content}>
                    <SendOutlinedIcon className={style.icon}/>
                    <span>Email: </span>
                    contact@nestmart.com
                </div>
                <div className={style.content}>
                    <AccessTimeOutlinedIcon className={style.icon}/>
                    <span>Hours: </span>
                    10:00 - 18:00, Mon - Sat 
                </div>
            </div>
            <div className={style.footerList}>
                {datafooter.map((item, index) => (
                    <div key={index}>
                        <div className={style.title}>{item.title}</div>
                        <div>
                            {item.children?.map((e, i) => (
                                <div key={i} className={style.content}>{e.name}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className={style.title}>App & Payment</div>
                <div>
                    <div className={style.content}>
                        Install NetMart App from App Store or Google Play
                    </div>
                    <div className={style.image}>
                        <Image
                            alt=''
                            src={'/img/appstore.svg'}
                            width={128}
                            height={38}
                        />
                        <Image
                            alt=''
                            src={'/img/googleplay.svg'}
                            width={128}
                            height={38}
                        />
                    </div>
                    <div className={style.content}>Secured Payment Gateways</div>
                    <Image
                        alt=''
                        src={'/img/payment.svg'}
                        width={224}
                        height={32}
                    />
                </div>
            </div>
        </div>
    )
}

export default CFooter