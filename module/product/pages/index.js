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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CFilter from '../components/CFilter';
import CAds from '../../../common/components/layout/CAds';

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
                        <div>
                            <div className={style.productImage}>
                                <Image
                                    alt=''
                                    src={'/img/product.jpg'}
                                    width={586}
                                    height={421}
                                />
                            </div>
                            <div className={style.thumb}>
                                <div className={clsx(style.iconNavigate, style.navActive)}>
                                    <ArrowBackIcon/>
                                </div>
                                <div className={clsx(style.thumbActive, style.thumbItem)}>
                                    <Image
                                        alt=''
                                        src={'/img/thumb1.jpg'}
                                        width={106}
                                        height={84}
                                    />
                                </div>
                                <div className={style.thumbItem}>
                                    <Image
                                        alt=''
                                        src={'/img/thumb2.jpg'}
                                        width={106}
                                        height={84}
                                    />
                                </div>
                                <div className={style.thumbItem}>
                                    <Image
                                        alt=''
                                        src={'/img/thumb3.jpg'}
                                        width={106}
                                        height={84}
                                    />
                                </div>
                                <div className={style.thumbItem}>
                                    <Image
                                        alt=''
                                        src={'/img/thumb4.jpg'}
                                        width={106}
                                        height={84}
                                    />
                                </div>
                                <div className={style.iconNavigate}>
                                    <ArrowForwardIcon/>
                                </div>
                            </div>
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
                            <div className={style.vendor}>
                                <div>
                                    <span className={style.vendorTitle}>Vendor:</span>
                                    <span className={style.nest}>NestMart</span>
                                </div>
                                <div>
                                    <span className={style.vendorTitle}>SKU:</span>
                                    <span className={style.nest}>FWM15VKT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.description}>
                        <div className={style.tabs}>
                            <div className={clsx(style.tab, style.tabActive)}>Description</div>
                            <div className={style.tab}>Additional info</div>
                            <div className={style.tab}>Reviews (3)</div>
                        </div>
                        <div>
                            <p>
                                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                            </p>
                            <p>
                                Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. 
                            </p>
                            <div className={style.descriptionTitle}>Packaging & Delivery</div>
                            <p>
                                Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.
                            </p>

                            <p>
                                Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund. 
                            </p>
                            <div className={style.descriptionTitle}>Suggested Use</div>
                            <p>                                
                                Refrigeration not necessary.
                            </p>
                            <p>Stir before serving</p>
                            <div className={style.descriptionTitle}>
                                Other Ingredients
                            </div>
                            <p>
                                Organic raw pecans, organic raw cashews.
                                This butter was produced using a LTG (Low Temperature Grinding) process.
                                Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.sidebar}>
                    <CFilter/>
                    <CPopularTags/>
                    <CAds/>
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