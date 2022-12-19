import CAds from '../../../../common/components/layout/CAds'
import CBanner from '../../../../common/components/layout/CBanner'
import CCard from '../../../../common/components/layout/CCard'
import CGallery from '../../../../common/components/layout/CGallery'
import CPopularTags from '../../../../common/components/layout/CPopularTags'
import CTrending from '../../../../common/components/layout/CTrending'
import style from './detail.module.css'
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
import clsx from 'clsx'
import {Quicksand} from '@next/font/google'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import CComment from '../../components/CComment'
import CPostComment from '../../components/CPostComment'

const quicksand = Quicksand({ subsets: ['latin'] });

const MBlogDetail = () => {
    return (
        <div className={clsx(style.main, quicksand.className)}>
            <div className={style.content}>
                <div className={style.contentLeft}>
                    <div className={style.header}>
                        <div className={style.category}>
                            Recipes
                        </div>
                        <div className={style.title}>
                            Enjoy my favourite molten chocolate cake in this summer
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
                    <div className={style.image}>
                        <Image
                            alt=''
                            src={'/img/blog.jpg'}
                            width={1015}
                            height={473}
                        />
                    </div>
                    <div className={style.blogContent}>
                        <p>
                            Helping everyone live happier, healthier lives at home through their kitchen. Kitchn is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.
                        </p>
                        <p className={style.paraphrase}>
                            <span className={style.dropcap}>T</span>
                            his is a site for people who like to get their hands dirty while they cook. It is for those who care about the quality of their food, and how it affects the health of themselves and the planet. It is for cooks who care about 
                        </p>
                        <p>create a beautiful kitchen. It’s a place to dive in deep, and embrace the joy of one of our basic needs: Food, cooked at home, nourishing ourselves and our households. </p>
                        <div className={style.attention}>
                            Lorem ipsum dolor sit amet cons
                        </div>
                        <p>
                            Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque ullamcorper eu neque, augue quam quis lacus pretium eros est amet turpis nunc in turpis massa et eget facilisis ante molestie penatibus dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus
                        </p>
                        <div className={style.img}>
                            <Image
                                alt=''
                                src={'/img/blog1.jpg'}
                                width={440}
                                height={410}
                            />
                            <Image
                                alt=''
                                src={'/img/blog2.jpg'}
                                width={440}
                                height={410}
                            />
                        </div>
                        <p>
                            Sit quis semper sit sapien. Massa bibendum scelerisque metus phasellus semper sed. Enim, lacus faucibus aliquam id vitae a et pellentesque amet. Felis quam lacinia elementum arcu. Tempor ullamcorper donec sit arcu varius diam luctus ultrices.. 
                        </p>
                        <div className={style.noteMain}>
                            <div className={style.note}>
                                Et nisi, ut arcu nec enim fames facilisi justo, mi amet, vitae in vehicula a, id placerat consequat mauris non adipiscing in sed et dui tristique at amet, nunc
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.
                        </p>
                    </div>
                    <div className={style.commentsForm}>
                        <div className={style.info}>
                            <div className={style.tags}>
                                <div className={style.tag}>Design</div>
                                <div className={style.tag}>Perspiciatis </div>
                            </div>
                            <div className={style.tags}>
                                <div className={style.rating}>
                                    <ChatBubbleOutlineOutlinedIcon className={style.iconStar}/>
                                    182 comments
                                </div>
                                <div className={style.rating}>
                                    <FavoriteBorderOutlinedIcon className={style.iconStar}/>
                                    268 likes
                                </div>
                                <div className={style.rating}>
                                    <StarOutlinedIcon className={style.iconStar}/>
                                    Rate: 9/10
                                </div>
                            </div>
                        </div>
                        <div className={style.comment}>
                            <CComment/>
                        </div>
                        <CPostComment/>
                            
                    </div>
                </div>
                <div>
                    <div className={style.search}>
                        <SearchIcon/>
                        <InputBase
                            placeholder = 'Search your recipes...'
                        />
                    </div>
                    <CCard/>
                    <CTrending/>
                    <CGallery/>
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

export default MBlogDetail