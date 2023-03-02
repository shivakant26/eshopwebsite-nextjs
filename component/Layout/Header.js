import Link from "next/link";
import { useEffect, useState } from "react";
import Cart from "../cart";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [showCart , setShowCart] = useState(false);
  const adminToken = typeof window !== "undefined" ? localStorage.getItem("adminToken") : "";
  const userToken = typeof window !== "undefined" ? localStorage.getItem("userToken") : "";
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }
  const showDrop = () => {
    setDropdown(!dropdown);
  };
  const cartShow = () =>{
    setShowCart(!showCart)
  }
  return (
    <>
      <div className="header">
        <div className="e_shop_header center_wr">
          <div className="left_header_content">
            <div className="logo">
              <Link href="/">
                <span className="ft-style">𝔢</span>𝔰𝔥𝔬𝔭
              </Link>
            </div>
            <div className="left_menu">
              <ul>
                <li>
                  <Link href="#">Everything</Link>
                </li>
                <li>
                  <Link href="/women">women</Link>
                </li>
                <li>
                  <Link href="#">men</Link>
                </li>
                <li>
                  <Link href="#">Accessories</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right_header_content">
            <ul>
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="/contactus">Contact Us</Link>
              </li>
              <li style={{position:"relative"}} onClick={cartShow}>
                <Link href="#">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
                {
                  showCart ? (<>
                  <div className="cart_wr">
                  <Cart />
                  </div>
                  </>) : ""
                }
              </li>
              {
                !adminToken && !userToken ? (<>
                <li className="drop_down" onClick={showDrop}>
                <Link href="">
                  <i className="fa fa-user"></i>
                </Link>
                {dropdown ? (
                  <>
                    <ul>
                      <li>
                        <Link href="/admin">admin</Link>
                      </li>
                      <li>
                        <Link href="/user">user</Link>
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </li>
                </>) : null 
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
