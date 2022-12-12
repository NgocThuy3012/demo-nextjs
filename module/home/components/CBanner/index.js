import style from './banner.module.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {InputBase} from '@mui/material'

const CBanner = () => {
    return (
        <div className={style.main}>
            <div className={style.content}>
                <div className={style.title}>
                    Don’t miss amazing grocery deals
                </div>
                <div className={style.description}>
                    Sign up for the daily newsletter 
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