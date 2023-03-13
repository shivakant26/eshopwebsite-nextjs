import AllProduct from "@/component/AllProduct";
import SalesUpto from "@/component/SalesUpto";
import { useRouter } from "next/router";
import Styles from "../../styles/Layout.module.css";
import RangeSlider from "@/component/Common/RangeSlider";

const EveryThings = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  return (
    <>
      <div className="everythings_pg">
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
              <AllProduct />
            </div>
          </div>
        </div>
      </div>
      <SalesUpto />
    </>
  );
};
export default EveryThings;
