import AllProduct from "@/component/AllProduct";
import BreadCrumbs from "@/component/Common/BreadCambs";
import ContentSidebar from "@/component/Common/ContentSidebar";
import SalesUpto from "@/component/SalesUpto";
import Styles from "../../styles/Layout.module.css";

const Women = () => {
  return (
    <>
      <div className="singular_page_section">
        <div className={Styles.page_layout}>
          <div className={Styles.layout_sidebar}>
            <ContentSidebar />
          </div>
          <div className={Styles.layout_content}>
            <div className={Styles.product_list}>
              <BreadCrumbs />
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
