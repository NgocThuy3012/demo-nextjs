import Image from "next/image"
import style from "./header.module.css"

const CHeader = () => {
    return (
        <div className={style.main}>
            <div className={style.header_left}>
                <Image
                    src={"/Logo.svg"}
                    alt="logo"
                    width={215}
                    height={66}
                />
                <div className={style.search}>

                </div>
            </div>
        </div>
    )
}

export default CHeader