import AllProduct from "@/component/AllProduct";
import SalesUpto from "@/component/SalesUpto";
import Styles from "../../styles/Layout.module.css";
import ContentSidebar from "@/component/Common/ContentSidebar";
import BreadCrumbs from "@/component/Common/BreadCambs";

const EveryThings = () => {
  return (
    <>
      <div className="everythings_pg">
        <div className={Styles.page_layout}>
          <div className={Styles.layout_sidebar}>
            <ContentSidebar />
          </div>
          <div className={Styles.layout_content}>
            <div className={Styles.product_list}>
              <BreadCrumbs />
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
