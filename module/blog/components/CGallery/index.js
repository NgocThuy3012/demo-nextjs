import style from './gallery.module.css'
import Image from 'next/image'
import {images} from '../../../../mock/blog'

const CGallery = () => {
    return (
        <div className={style.main}>
            <div className={style.title}>Gallery</div>
            <div className={style.list}>
                {images.map((item, index) => (
                    <Image
                        key={index}
                        alt=''
                        src={item.src}
                        width={80}
                        height={80}
                        className={style.item}
                    />
                ))}
            </div>
        </div>
    )
}

export default CGallery