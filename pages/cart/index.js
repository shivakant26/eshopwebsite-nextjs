import { getCartProduct } from "@/Services/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../../styles/Cart.module.css";
import ProductImage from "../../assets/images/productdummy.png";
import Image from "next/image";

const Cart = () => {
  const dispatch = useDispatch();
  const { getitem } = useSelector((state) => state?.productSlice);
  console.log(321, getitem);

  useEffect(() => {
    dispatch(getCartProduct());
  }, []);

  return (
    <div className={Styles.cart_main_page}>
      <div className="center_wr">
        <div className={Styles.cart_heading}>
          <h1>Cart</h1>
        </div>
        <div className={Styles.cart_table}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quanitity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {getitem?.items?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td><i class="fa fa-close"></i></td>
                    <td><Image src={ProductImage} alt="product_dummy" /></td>
                    <td>{item?.title}</td>
                    <td>$ {item?.price}.00</td>
                    <td>{item?.quantity}</td>
                    <td>$ {item?.price * (item?.quantity)}.00</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={6}>
                  <div className={Styles.coupon_section}>
                    <div className={Styles.coupon}>
                      <input type="text" placeholder="coupon code" />
                      <button style={{ width: "190px" }}>Coupon</button>
                    </div>
                    <div className={Styles.update_coupon}>
                      <button style={{ width: "200px" }}>Update Coupon</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={Styles.cart_total}>
          <div className={Styles.cart_total_table}>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h3>Cart totals</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>${getitem?.bill}.00</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>${getitem?.bill}.00</td>
                </tr>
              </tbody>
            </table>
            <div className={Styles.table_bottom}>
              <button style={{ width: "180px" }}>checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
