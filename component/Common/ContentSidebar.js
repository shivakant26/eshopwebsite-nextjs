import Link from "next/link";
import Styles from "../../styles/Layout.module.css";
import RangeSlider from "./RangeSlider";
const ContentSidebar = () => {
  return (
    <>
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
              <Link href="/accessories">Accessories</Link>
              <span>(7)</span>
            </li>
            <li>
              <Link href="/men">Men</Link>
              <span>(14)</span>
            </li>
            <li>
              <Link href="/women">Women</Link>
              <span>(17)</span>
            </li>
          </ul>
        </div>
        <div className={Styles.product_list_widgets}>
          <h5>Our Best Seller</h5>
        </div>
      </div>
    </>
  );
};

export default ContentSidebar;
