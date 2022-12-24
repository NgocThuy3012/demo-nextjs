import CBanner from "../../../common/components/layout/CBanner";
import style from "../styles/index.module.css";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import CTable from "../../../common/components/control/CTable";
import { Quicksand } from "@next/font/google";
import CSelect from "../../../common/components/control/CSelect";

const quicksand = Quicksand({ subsets: ["latin"] });

const MCart = () => {
  return (
    <div className={quicksand.className}>
      <div className={style.breadcrumb}>
        <span>Home</span>
        <KeyboardArrowRightOutlinedIcon />
        <span>Shop</span>
        <KeyboardArrowRightOutlinedIcon />
        <span className={style.page}>Your Cart </span>
      </div>
      <div className={style.main}>
        <div className={style.content}>
          <div className={style.contentLeft}>
            <div className={style.title}>Your Cart</div>
            <div className={style.description}>
              <span> There are 5 products in your cart</span>
              <span>Clear Cart</span>
            </div>
            <CTable />
            <div className={style.btnGroup}>
              <button className={style.btnContinue}>Continue Shopping</button>
              <button
                className={style.btnCheckout}
                style={{ padding: "15px 18px" }}
              >
                Update Cart
              </button>
            </div>
            <div>
              <div className={style.calculate}>
                <div>Calculate Shipping</div>
                <div>
                  <span>Flat rate:</span>
                  <span>5%</span>
                </div>
                <CSelect />
              </div>
              <div>
                <div>Apply Coupon</div>
                <div>Using A Promo Code?</div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.totalPrice}>
              <div className={style.subtotal}>
                <span>Subtotal</span>
                <span className={style.price}>$12.31</span>
              </div>
              <div className={style.ship}>
                <div className={style.freeShip}>
                  <span>Shipping</span>
                  <span className={style.united}>Free Shipping</span>
                </div>
                <div className={style.freeShip}>
                  <span>Estimate for</span>
                  <span className={style.united}>United Kingdom</span>
                </div>
              </div>
              <div className={style.total}>
                <span>Total</span>
                <span className={style.price}>$12.31</span>
              </div>
              <button className={style.btnCheckout} style={{ width: "100%" }}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
        <CBanner
          title="Stay home & get your daily needs from our shop"
          description="Start You'r Daily Sopping with Nest Mart"
          img="/img/banner2.jpg"
          size="40"
          linegHeight="48"
          color="rgba(59, 183, 126, 0.2)"
        />
      </div>
    </div>
  );
};

export default MCart;
