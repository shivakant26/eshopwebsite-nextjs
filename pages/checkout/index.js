import SalesUpto from "@/component/SalesUpto";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors , touched },
  } = useForm();
  const [btnText, setBtnText] = useState("place order");
  const [placeOder ,  setPlaceOrder] = useState("")
  const display = (tab1, tab2, tab3, tab4) => {
    document.getElementById(tab1).style.display = "block";
    document.getElementById(tab2).style.display = "none";
    document.getElementById(tab3).style.display = "none";
    document.getElementById(tab4).style.display = "none";
  };
  const openTab = (e, key) => {
    if (e.target.id === "direct_payment_action") {
      setBtnText("place order");
      display("direct_payment", "check_payment", "cash_delivery", "paypal");
    } else if (e.target.id === "by_check") {
      setBtnText("place order");
      display("check_payment", "direct_payment", "cash_delivery", "paypal");
    } else if (e.target.id === "by_cash") {
      setBtnText("place order");
      display("cash_delivery", "direct_payment", "check_payment", "paypal");
    } else if (e.target.id === "by_paypal") {
      setBtnText("proceed to paypal");
      display("paypal", "direct_payment", "check_payment", "cash_delivery");
    }
  };

  const onSubmit = (data) => {
    if(data){
      setTimeout(() => {
         router.push("https://www.paypal.com/signin")
      }, 1000);
    }
  };

  return (
    <>
      <div className="checkout_page">
        <div className="center_wr">
          <h2 style={{ textAlign: "center", color: "#54595F" }}>
            Checkout page
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="billing_section">
              <div className="billings_details">
                <div className="billing_form">
                  <h3>Billing details</h3>
                  <form>
                    <div className="row">
                      <div className="left_part">
                        <div className="form_field">
                          <label>
                            First name
                            <sapn
                              className={
                                errors?.firstName?.type === "required"
                                  ? "denger"
                                  : ""
                              }
                            >
                              *
                            </sapn>
                          </label>
                          <input
                            type="text"
                            {...register("firstName", {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="right_part">
                        <div className="form_field">
                          <label>
                            Last name
                            <sapn
                              className={
                                errors?.lastName?.type === "required"
                                  ? "denger"
                                  : ""
                              }
                            >
                              *
                            </sapn>
                          </label>
                          <input
                            type="text"
                            {...register("lastName", {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form_field">
                      <label>Company name (optional)</label>
                      <input
                        type="text"
                        {...register("companyName", {
                          required: true,
                        })}
                      />
                    </div>

                    <div className="form_field">
                      <label>
                        Country / Region{" "}
                        <sapn
                          className={
                            errors?.country?.type === "required" ? "denger" : ""
                          }
                        >
                          *
                        </sapn>
                      </label>
                      <input
                        type="text"
                        {...register("country", {
                          required: true,
                        })}
                      />
                    </div>

                    <div className="form_field">
                      <label>
                        Street address{" "}
                        <sapn
                          className={
                            errors?.street?.type === "required" ? "denger" : ""
                          }
                        >
                          *
                        </sapn>
                      </label>
                      <input
                        type="text"
                        {...register("street", {
                          required: true,
                        })}
                      />
                    </div>

                    <div className="form_field">
                      <label>
                        Town / City{" "}
                        <sapn
                          className={
                            errors?.town?.type === "required" ? "denger" : ""
                          }
                        >
                          *
                        </sapn>
                      </label>
                      <input
                        type="text"
                        {...register("town", {
                          required: true,
                        })}
                      />
                    </div>

                    <div className="form_field">
                      <label>
                        State{" "}
                        <sapn
                          className={
                            errors?.state?.type === "required" ? "denger" : ""
                          }
                        >
                          *
                        </sapn>
                      </label>
                      <input
                        type="text"
                        {...register("state", {
                          required: true,
                        })}
                      />
                    </div>

                    <div className="form_field">
                      <label>
                        PIN Code{" "}
                        <sapn
                          className={
                            errors?.pinCode?.type === "required" ? "denger" : ""
                          }
                        >
                          *
                        </sapn>
                      </label>
                      <input
                        type="text"
                        {...register("pinCode", {
                          required: true,
                        })}
                      />
                    </div>

                    <div className="form_field">
                      <label>
                        Phone
                        <sapn
                          className={
                            errors?.phone?.type === "required" ? "denger" : ""
                          }
                        >
                          *
                        </sapn>
                      </label>
                      <input
                        type="text"
                        {...register("phone", {
                          required: true,
                        })}
                      />
                    </div>

                    <div className="form_field">
                      <label>
                        Email address{" "}
                        <sapn
                          className={
                            errors?.email?.type === "required" ? "denger" : ""
                          }
                        >
                          *
                        </sapn>
                      </label>
                      <input
                        type="text"
                        {...register("email", {
                          required: true,
                        })}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="billings_payments">
                <div className="payment_order">
                  <h3>Your Order</h3>
                  <div className="order_table">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Anchor Bracelet - Black</td>
                          <td>$150.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Subtotal</th>
                          <td>$150.00</td>
                        </tr>
                        <tr>
                          <th>total</th>
                          <td>$150.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payments">
                    <div className="direct_payment gap">
                      <input
                        type="radio"
                        name="paymentmode"
                        value="direct_payment_action"
                        id="direct_payment_action"
                        {...register("paymentmode", {
                        onChange: (e) => {openTab(e, "direct_payment_action")},
                        required: true,
                        })}
                      />
                      <sapn className="labelgap">Direct bank transfer</sapn>
                      <div id="direct_payment" className="tabber">
                        <p>
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </div>
                    <div className="check_payment gap">
                      <input
                        type="radio"
                        name="paymentmode"
                        id="by_check"
                        value="by_check"
                        {...register("paymentmode", {
                        onChange: (e) => {openTab(e, "by_check")},
                          required: true,
                        })}
                      />
                      <sapn className="labelgap">Check payments</sapn>
                      <div id="check_payment" className="tabber">
                        <p>
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </div>
                    <div className="cash_on_delivery gap">
                      <input
                        type="radio"
                        name="paymentmode"
                        id="by_cash"
                        value="by_cash"
                        // onChange={(e) => openTab(e, "by_cash")}
                        {...register("paymentmode", {
                        onChange: (e) => {openTab(e, "by_cash")},
                          required: true,
                        })}
                      />
                      <sapn className="labelgap">Cash on delivery</sapn>
                      <div id="cash_delivery" className="tabber">
                        <p>Pay with cash upon delivery.</p>
                      </div>
                    </div>
                    <div className="paypal gap">
                      <input
                        type="radio"
                        name="paymentmode"
                        id="by_paypal"
                        value="by_paypal"
                        // onChange={(e) => openTab(e, "by_paypal")}
                        {...register("paymentmode", {
                        onChange: (e) => {openTab(e, "by_paypal")},
                          required: true,
                        })}
                      />
                      <sapn className="labelgap">PayPal</sapn>
                      <span>
                        {" "}
                        <Image
                          src={require("../../assets/images/paypal.jpg")}
                          alt="paypal"
                        />
                      </span>
                      <div id="paypal" className="tabber">
                        <p>
                          Pay via PayPal; you can pay with your credit card if
                          you don’t have a PayPal account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="place_order_btn">
                    {btnText}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <SalesUpto />
    </>
  );
};

export default Checkout;
