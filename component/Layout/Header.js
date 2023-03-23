import { allRegisterUser } from "@/Services/Admin/authSlice";
import { getUserProfile } from "@/Services/authUserSlice";
import { getCartProduct } from "@/Services/productSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartPopup from "../CartPopup";

const Header = () => {
  const router = useRouter();
  console.log(123, router.pathname);
  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(false);

  const adminToken =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : "";
  const userToken =
    typeof window !== "undefined" ? localStorage.getItem("userToken") : "";
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : "";

  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state?.authUser);
  const { addItemCart, deleteCart, getitem } = useSelector(
    (state) => state?.productSlice
  );

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    dispatch(getCartProduct());
  }, [addItemCart]);

  console.log(74844, getitem);

  useEffect(() => {
    if (show !== true) {
      document.body.style.backgroundColor = "";
    } else {
      document.body.style.backgroundColor = "gray";
    }
  }, [show]);

  const showDrop = () => {
    setDropdown(!dropdown);
  };

  const handleClose = () => {
    setShow(false);
    document.body.style.backgroundColor = "";
  };

  const handleShow = () => {
    setShow(true);
  };

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
              <ul style={{ position: "relative" }}>
                <li>
                  <Link
                    href="/everythings"
                    className={
                      router.pathname === "/everythings" ? "active" : ""
                    }
                  >
                    Everything
                  </Link>
                </li>
                <li>
                  <Link
                    href="/women"
                    className={router.pathname === "/women" ? "active" : ""}
                  >
                    women
                  </Link>
                </li>
                <li>
                  <Link
                    href="/men"
                    className={router.pathname === "/men" ? "active" : ""}
                  >
                    men
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accessories"
                    className={
                      router.pathname === "/accessories" ? "active" : ""
                    }
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right_header_content">
            <ul>
              <li>
                <Link
                  href="/about"
                  className={router.pathname === "/about" ? "active" : ""}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className={router.pathname === "/contactus" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </li>
              <li onClick={handleShow}>
                <Link href="#">
                  <i className="fa fa-shopping-cart"></i>
                  {
                    <>
                      <span className="cart_items">
                        {getitem?.items?.length ? getitem?.items?.length : 0}
                      </span>
                    </>
                  }
                </Link>
              </li>
              {show ? (
                <>
                  <div className="cart_wr">
                    <CartPopup show={show} hideFun={handleClose} />
                  </div>
                </>
              ) : (
                ""
              )}
              {!adminToken && !userToken ? (
                <>
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
                </>
              ) : userToken ? (
                <>
                  <li className="drop_down" onClick={showDrop}>
                    <Link href="">
                      <span className="current_user">
                        {userProfile?.[0]?.email?.charAt(0) ? (
                          userProfile?.[0]?.email?.charAt(0)
                        ) : (
                          <i class="fa fa-bars"></i>
                        )}
                      </span>
                    </Link>
                    {dropdown ? (
                      <>
                        <ul>
                          <li>
                            <Link href="/user/dashboard">Dashboard</Link>
                          </li>
                          <li>
                            <Link href="/user/dashboard/logout">Logout</Link>
                          </li>
                        </ul>
                      </>
                    ) : (
                      ""
                    )}
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
