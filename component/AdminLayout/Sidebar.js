import Link from "next/link";
import React, { useState } from "react";
import Styles from "../../styles/Admin.module.css";

const Sidebar = () => {
  const adminToken =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : "";

  return (
    <>
      <div className={Styles.sidebar_menu} id="sidebar">
        <ul>
          {adminToken ? (
            <>
              <li>
                <span>
                  <i className="fa fa-dashboard"></i>
                </span>
                <Link href="/admin/dashboard">Dashboard</Link>
              </li>
              <li>
                <span>
                  <i className="fa fa-group"></i>
                </span>
                <Link href="/admin/dashboard/alluser">alluser</Link>
              </li>
              <li>
                <span>
                  <i className="fa fa-user"></i>
                </span>
                <Link href="/admin/dashboard/profile">profile</Link>
              </li>
              <li>
                <span>
                  <i className="fa fa-file"></i>
                </span>
                <Link href="/admin/dashboard/addproduct">add product</Link>
              </li>
              <li>
                <span>
                <i class="fa fa-list"></i>
                </span>
                <Link href="/admin/dashboard/productlist">Product List</Link>
              </li>
              <li>
                <span>
                  <i className="fa fa-cog"></i>
                </span>
                <Link href="/admin/dashboard/setting">setting</Link>
              </li>
              <li>
                <span>
                  <i className="fa fa-sign-out"></i>
                </span>
                <Link href="/admin/dashboard/logout">logout</Link>
              </li>
            </>
          ) : (
            <>
            <li>
                <span>
                  <i className="fa fa-dashboard"></i>
                </span>
                <Link href="/user/dashboard">Dashboard</Link>
              </li>
              <li>
                <span>
                  <i className="fa fa-user"></i>
                </span>
                <Link href="/user/dashboard/profile">Profile</Link>
              </li>
              <li>
                <span>
                  <i className="fa fa-lock"></i>
                </span>
                <Link href="/user/dashboard/changepassword">Change Password</Link>
              </li>
              <li>
                <span>
                  <i className="fa fa-sign-out"></i>
                </span>
                <Link href="/user/dashboard/logout">logout</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
