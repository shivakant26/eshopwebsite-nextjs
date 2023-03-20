import SalesUpto from "@/component/SalesUpto";

const Checkout = () => {
  return (
    <>
      <div className="checkout_page">
        <div className="center_wr">
          <h2 style={{ textAlign: "center", color: "#54595F" }}>
            Checkout page
          </h2>
          <div className="billing_section">
            <div className="billings_details">
              <div className="billing_form">
                <h3>Billing details</h3>
                <form>
                  <div className="row">
                    <div className="left_part">
                      <div className="form_field">
                        <label>First name*</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="right_part">
                      <div className="form_field">
                        <label>Last name*</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>

                  <div className="form_field">
                    <label>Company name (optional)</label>
                    <input type="text" />
                  </div>

                  <div className="form_field">
                    <label>Country / Region *</label>
                    <input type="text" />
                  </div>

                  <div className="form_field">
                    <label>Street address *</label>
                    <input type="text" />
                  </div>

                  <div className="form_field">
                    <label>Town / City *</label>
                    <input type="text" />
                  </div>

                  <div className="form_field">
                    <label>State *</label>
                    <input type="text" />
                  </div>

                  <div className="form_field">
                    <label>PIN Code *</label>
                    <input type="text" />
                  </div>

                  <div className="form_field">
                    <label>Phone *</label>
                    <input type="text" />
                  </div>

                  <div className="form_field">
                    <label>Email address *</label>
                    <input type="text" />
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
                        <input type="radio" name="paymentmode"/><sapn className="labelgap">Direct bank transfer</sapn>
                        </div>
                        <div className="check_payment gap">
                        <input type="radio" name="paymentmode"/><sapn className="labelgap">Check payments</sapn>
                        </div>
                        <div className="cash_on_delivery gap">
                        <input type="radio" name="paymentmode" /><sapn className="labelgap">Cash on delivery</sapn>
                        </div>
                        <div className="paypal gap">
                        <input type="radio" name="paymentmode" /><sapn className="labelgap">PayPal</sapn>
                        </div>
                    </div>
                    <button className="place_order_btn">Place order</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <SalesUpto />
    </>
  );
};

export default Checkout;
