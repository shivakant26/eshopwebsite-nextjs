const CartPopup = (props) =>{
    console.log(props)
    return(
        <>
        <div className="cart_popup">
            <div className="cart_header">
                <div className="cart_text">Shopping cart</div>
                <div className="cart_close_btn" >
                    <i class="fa fa-close"  onClick={props.hideFun}></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartPopup;