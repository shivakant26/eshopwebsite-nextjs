import Styles from '../styles/Cart.module.css';

const Cart = () => {
    return(
        <div className={Styles.cart_main_page}>
            <div className='center_wr'>
            <div className={Styles.cart_heading}>
            <h1>Cart</h1>
            </div>
            <div className={Styles.cart_table}>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quanitity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>x</td>
                            <td>photo</td>
                            <td>Anchor Brecelet</td>
                            <td>$ 150.00</td>
                            <td>1</td>
                            <td>$ 150.00</td>
                        </tr>
                        <tr>
                           <td colSpan={6}>
                            <div className={Styles.coupon_section}>
                                <div className={Styles.coupon}>
                                    <input type="text" placeholder='coupon code'/>
                                    <button style={{width:"190px"}}>Coupon</button>
                                </div>
                                <div className={Styles.update_coupon}>
                                    <button style={{width:"200px"}}>Update Coupon</button>
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
                                <td>$150.00</td>
                            </tr>
                            <tr>
                                <th>Subtotal</th>
                                <td>$150.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={Styles.table_bottom}>
                        <button style={{width:"180px"}}>checkout</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cart;