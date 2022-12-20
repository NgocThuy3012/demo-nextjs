import style from '../styles/index.module.css'
import CPopularTags from '../../../common/components/layout/CPopularTags'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import clsx from 'clsx'
import {Quicksand} from '@next/font/google'
import Image from 'next/image';
import { Rating, TextField } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CBanner from '../../../common/components/layout/CBanner';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';

const quicksand = Quicksand({ subsets: ['latin'] });

const MProduct = () => {
    return (
        <div className={clsx(style.main, quicksand.className)}>
            <div className={style.breadcrumb}>
                <span>Home</span>
                <KeyboardArrowRightIcon/>
                <span>Vegetables & tubers</span>
                <KeyboardArrowRightIcon/>
                <span className={style.active}>Seeds of Change Organic</span>
            </div>
            <div className={style.content}>
                <div className={style.contentLeft}>
                    <div className={style.productInfo}> 
                        <div className={style.productImage}>
                            <Image
                                alt=''
                                src={'/img/product.jpg'}
                                width={586}
                                height={421}
                            />
                        </div>
                        <div className={style.topContent}>
                            <div className={style.inStock}>
                                In Stock
                            </div>
                            <div className={style.name}>
                                Seeds of Change Organic Quinoa, Brown
                            </div>
                            <div className={style.ratings}>
                                <Rating value={4} readOnly emptyIcon={<StarOutlinedIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                            </div>
                            <div className={style.price}>
                                <span className={style.priceNew}>$38</span>
                                <span className={style.priceOld}>$42</span>
                            </div>
                            <div className={style.shortDescription}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!
                            </div>
                            <div className={style.btnGroup}>
                                <TextField 
                                    type={'number'} 
                                    sx={{ width: '100px' }}
                                    defaultValue= {1}
                                />
                                <button className={style.btnAdd}><ShoppingCartOutlinedIcon className={style.iconCart}/> Add To Cart</button>
                                <div className={style.icon}><FavoriteBorderIcon/></div>
                                <div className={style.icon}><AllInclusiveOutlinedIcon/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.sidebar}>
                    <CPopularTags/>
                </div>
            </div>
            <CBanner 
                title = 'Stay home & get your daily needs from our shop'
                description = "Start You'r Daily Sopping with Nest Mart"
                img = '/img/banner2.jpg'
                size = '40'
                linegHeight = '48'
                color = 'rgba(59, 183, 126, 0.2)'
            />
        </div>
    )
}

export default MProduct