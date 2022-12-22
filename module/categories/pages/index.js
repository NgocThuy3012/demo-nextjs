import style from "../styles/index.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import { tags } from "../../../mock/blog";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import clsx from "clsx";
import { Quicksand } from "@next/font/google";
import CBanner from "../../../common/components/layout/CBanner";
import CPagination from "../../../common/components/control/CPagination";
import CProduct from "../../../common/components/layout/CProduct";
import { products } from "../../../mock/product";

const quicksand = Quicksand({ subsets: ["latin"] });

const MCategory = () => {
  return (
    <div className={clsx(style.main, quicksand.className)}>
      <div className={style.banner}>
        <div>
          <div className={style.header}>Vegetables & tubers</div>
          <div className={style.breadcrumb}>
            <span>Home</span>
            <KeyboardArrowRightIcon />
            <span>Vegetables & tubers</span>
          </div>
        </div>
        <div className={style.tagList}>
          {tags.map((item, index) => (
            <div
              key={index}
              className={clsx(style.tag, { [style.active]: item.active })}
            >
              <CloseIcon className={style.iconClose} />
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className={style.filter}>
        <div>There are 568 products in this category</div>
        <div className={style.sort}>
          <div className={style.show}>
            <GridViewIcon />
            <span>Show: 50</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className={style.show}>
            <GridViewIcon />
            <span>Sort by: Featured</span>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <div className={style.content}>
        {products.map((item, index) => (
          <CProduct key={index} product={item} />
        ))}
        {products.map((item, index) => (
          <CProduct key={index} product={item} />
        ))}
      </div>
      <CPagination />
      <CBanner
        title="Stay home & get your daily needs from our shop"
        description="Start You'r Daily Sopping with Nest Mart"
        img="/figure.png"
        size="40"
        linegHeight="48"
        color="#ffd4ff"
      />
    </div>
  );
};

export default MCategory;
