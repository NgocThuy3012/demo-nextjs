import style from './banner.module.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {InputBase} from '@mui/material'

const CBanner = ({title, description, img, size, linegHeight, color}) => {
    return (
        <div className={style.main} style={{background: `${color} url(${img}) no-repeat right bottom`}}>
            <div className={style.content}>
                <div className={style.title} style={{fontSize: `${size}px`, linegHeight: `${linegHeight}px`}}>
                   {title}
                </div>
                <div className={style.description}>
                    {description}
                </div>
                <div className={style.sendMail}>
                    <div className={style.inputMail}>
                        <SendOutlinedIcon className={style.icon}/>
                        <InputBase
                            sx = {{fontSize: '12px'}}
                            placeholder = 'Your emaill address'
                        />
                    </div>
                    <button className={style.btnSend}>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default CBanner