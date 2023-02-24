import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const showDrop = () => {
    setDropdown(!dropdown);
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
              <ul>
                <li>
                  <Link href="#">Everything</Link>
                </li>
                <li>
                  <Link href="#">women</Link>
                </li>
                <li>
                  <Link href="#">men</Link>
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
              <li>
                <Link href="#">
                  <i class="fa fa-shopping-cart"></i>
                </Link>
              </li>
              <li className="drop_down" onClick={showDrop}>
                <Link href="#">
                  <i class="fa fa-user"></i>
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
