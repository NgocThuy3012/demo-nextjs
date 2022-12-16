import Countdown from 'react-countdown'
import style from './countdown.module.css'

const CCountdown = ({date}) => {
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if (completed) {
            return <></>;
        } else {
            return (
                <div className={style.discounttime}>
                    <div className={style.time}>
                        <div className={style.number}>{days}</div>
                        <div className={style.unit}>Days</div>
                    </div>
                    <div className={style.time}>
                        <div className={style.number}>{hours}</div>
                        <div className={style.unit}>Hours</div>
                    </div>
                    <div className={style.time}>
                        <div className={style.number}>{minutes}</div>
                        <div className={style.unit}>Mins</div>
                    </div>
                    <div className={style.time}>
                        <div className={style.number}>{seconds}</div>
                        <div className={style.unit}>Sec</div>
                    </div>
                </div>
            );
        }
    }
    return (
        <div>
            <Countdown
                date={new Date(date)}
                renderer={renderer}
            />
        </div>
    )
}

export default CCountdown