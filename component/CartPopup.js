import { deleteCartItem, getCartProduct } from "@/Services/productSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPopup = (props) => {
  const dispatch = useDispatch();
  const { getitem,deleteCart } = useSelector(
    (state) => state?.productSlice
  ); 

  const delCart = (id) => {
    dispatch(deleteCartItem(id));
  };

  useEffect(() => {
      dispatch(getCartProduct());
    
  }, [deleteCart]);

  return (
    <>
      <div className="cart_popup">
        <div className="cart_header">
          <div className="cart_text">Shopping cart</div>
          <div className="cart_close_btn">
            <i class="fa fa-close" onClick={props.hideFun}></i>
          </div>
        </div>
        {getitem?.items?.length > 0 ? (
          <>
            <div className="cart_body">
              {getitem?.items?.map((item) => {
                return (
                    <div className="cart_item_group" key={item._id}>
                      <div className="add_cart_left">
                        <div className="cart_pro_image">
                          <Image src={require("../assets/images/avatar.png")} />
                        </div>
                        <div className="cart_pro_text">
                          <h6>{item?.title}</h6>
                          <div className="calculate_price">
                            <span className="add_cart_quant">
                              {item?.quantity}
                            </span>{" "}
                            X
                            <span className="add_cart_price">
                              {" "}
                              $ {item?.price}.00
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="add_cart_right">
                        <button onClick={() => delCart(item.itemId)}>
                          <i
                            style={{ color: "red" }}
                            className="fa fa-close"
                          ></i>
                        </button>
                      </div>
                    </div>
                );
              })}
              <div className="sub_total">
                <p>Subtotal : </p>
                <p>$ {getitem?.bill}.00</p>
              </div>
            </div>
            <div className="cart_footer">
              <div className="view_cart_btn">
              <a href="/cart">view cart</a>
              </div>
              <div className="checkout_cart_btn">
              <a href="#">Checkout</a>
              </div>
            </div>
          </>
        ) : (
          <p style={{padding:"20px",color:"gray"}}>No products in the cart. !</p>
        )}
      </div>
    </>
  );
};

export default React.memo(CartPopup);
