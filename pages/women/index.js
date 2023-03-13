import AllProduct from "@/component/AllProduct";
import RangeSlider from "@/component/Common/RangeSlider";
import SalesUpto from "@/component/SalesUpto";
import { useRouter } from "next/router";
import Styles from "../../styles/Layout.module.css";

const Women = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  return (
    <>
      <div className="singular_page_section">
        <div className={Styles.page_layout}>
          <div className={Styles.layout_sidebar}>
            <div className={Styles.sidebar_wr}>
              <div className={Styles.search_product}>
                <input type="search" placeholder="Search Products..." />
                <button>
                  <i class="fa fa-search"></i>
                </button>
              </div>
              <RangeSlider />
              <div className={Styles.product_category}>
                <h5>Categories</h5>
                <ul>
                  <li>
                    <a href="#">Accessories</a>
                    <span>(7)</span>
                  </li>
                  <li>
                    <a href="#">Men</a>
                    <span>(14)</span>
                  </li>
                  <li>
                    <a href="#">Women</a>
                    <span>(17)</span>
                  </li>
                </ul>
              </div>
              <div className={Styles.product_list_widgets}>
                <h5>Our Best Seller</h5>
              </div>
            </div>
          </div>
          <div className={Styles.layout_content}>
            <div className={Styles.product_list}>
              <div className={Styles.breadcamb}>
                <span>Home / {slug}</span>
              </div>
              <div className={Styles.women_pg_content}>
                <h1>Women</h1>
                <p>
                  Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                  mauris vitae erat consequat auctor eu in elit. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                  felis dapibus condimentum sit amet a augue. Sed non neque elit
                  sed ut.
                </p>
              </div>
              <AllProduct />
            </div>
          </div>
        </div>
      </div>
      <SalesUpto />
    </>
  );
};

export default Women;
