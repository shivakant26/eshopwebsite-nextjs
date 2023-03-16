
import { getAdminAddedProduct } from "@/Services/Admin/adminProductSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../../../styles/Admin.module.css";

const ProductList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { getAdminProduct } = useSelector((state) => state?.adminProduct);
  useEffect(() => {
    dispatch(getAdminAddedProduct());
  }, [dispatch]);

  const updateProduct = (id) =>{
    console.log(id)
    router.push(`/admin/dashboard/addproduct/${id}`)
  }

  return (
    <>
      <div className="content_wr">
        <h2>Product List</h2>
        <div className={Styles.admin_add_product}>
          {getAdminProduct?.map((product, index) => {
            return (
              <div className={Styles.item_card}>
                <div className={Styles.item_card_header}>
                  <img src={product?.image} width="200px" alt="" />
                  <div className={Styles.prizes}>
                  <div className="burst">
                    <p style={{position:"relative",zIndex:"5"}}>${product?.price}</p>
                  </div>
                  </div>
                </div>
                <div className={Styles.item_card_body}>
                    <h3>{product?.title}</h3>
                    <p>{product?.description}</p>
                </div>
                <div className={Styles.item_card_footer}>
                    <button onClick={()=>updateProduct(product._id)}>update</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
