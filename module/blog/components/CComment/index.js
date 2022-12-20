import Image from 'next/image'
import style from './comment.module.css'

const CComment = () => {
    return (
        <div className={style.main}>
            <Image
                alt=''
                src='/img/avatar.jpg'
                width={80}
                height={80}
            />
            <div>
                <div className={style.time}>
                    <span className={style.name}>Sophia</span>
                    <li>6 minutes ago </li>
                </div>
                <div>
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                </div>
                <div className={style.reply}>Reply here</div>
            </div>
        </div>
    )
}

export default CComment