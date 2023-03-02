import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import Styles from "../../../styles/Admin.module.css";
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({children}) => {
  return (
    <>
    <div className={Styles.admin_dashboard}>
          <div className={Styles.left_sidebar}>
          <AdminSidebar />
          </div>
          <div className={Styles.admin_content}>
            {children}
          </div>
        </div>
    </>
  )
}

export default AdminLayout;
