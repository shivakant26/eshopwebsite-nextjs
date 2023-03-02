import Link from "next/link";
import React, { useState } from "react";
import Styles from "../../../styles/Admin.module.css";

const AdminSidebar = () => {
  
  return (
    <>
      <div className={Styles.sidebar_menu}>
        <ul>
          <li>
            <span>
              <i class="fa fa-group"></i>
            </span>
            <Link href="/admin/dashboard/alluser">alluser</Link>
          </li>
          <li>
            <span>
              <i class="fa fa-user"></i>
            </span>
            <Link href="/admin/dashboard/profile">profile</Link>
          </li>
          <li>
            <span>
              <i class="fa fa-file"></i>
            </span>
            <Link href="#">additem</Link>
          </li>
          <li>
            <span>
              <i class="fa fa-cog"></i>
            </span>
            <Link href="/admin/dashboard/setting">setting</Link>
          </li>
          <li>
            <span>
              <i class="fa fa-sign-out"></i>
            </span>
            <Link href="/admin/dashboard/logout">logout</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
