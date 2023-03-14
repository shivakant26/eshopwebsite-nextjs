import { useRouter } from "next/router";
import Styles from "../../styles/Layout.module.css";

const BreadCrumbs = () => {
  const router = useRouter();
  const slug = router.pathname.replace("/", "");
  return (
    <>
      <div className={Styles.breadcamb}>
        <span>Home / {slug}</span>
      </div>
    </>
  );
};

export default BreadCrumbs;
