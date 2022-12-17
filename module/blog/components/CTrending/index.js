import style from './trending.module.css'
import {trending} from '../../../../mock/blog'
import Image from 'next/image'

const CTrending = () => {
    return (
        <div className={style.main}>
            <div className={style.title}>Trending now</div>
            <div className={style.list}>
                {trending.map((item, index) => (
                    <div key={index} className={style.item}>
                        <Image
                            alt=''
                            src={item.img}
                            width={85}
                            height={85}
                        />
                        <div>
                            <div className={style.name}>{item.name}</div>
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CTrending