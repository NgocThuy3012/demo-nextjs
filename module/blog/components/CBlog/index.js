import Image from 'next/image'
import style from './blog.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

const CBlog = ({data}) => {
    return (
        <div className={style.main}>
            <Image
                alt=''
                src={data.img}
                width={437}
                height={366}
                className={style.img}
            />
            <div className={style.content}>
                <div className={style.title}>
                    {data.title}
                </div>
                <div className={style.description}>
                    {data.description}
                </div>
                <div className={style.bottom}>
                    <div className={style.author}>
                        <Image
                            alt=''
                            src={'/img/author.jpg'}
                            width={30}
                            height={30}
                        />
                        <span>Sugar Rosie</span>
                        <span className={style.time}>2 hours ago</span>
                    </div>
                    <div className={style.icon}>
                        <TurnedInNotIcon/>
                        <FavoriteBorderIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBlog