import Image from 'next/image'
import style from './card.module.css'
import {cards} from '../../../../mock/blog'

const CCard = () => {
    return (
        <div className={style.main}>
            {cards.map((item, index) => (
                <div key={index} className={style.item}>
                    <Image
                        alt=''
                        src={item.img}
                        width={30}
                        height={30}
                    />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default CCard