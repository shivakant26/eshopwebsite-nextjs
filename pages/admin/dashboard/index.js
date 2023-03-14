import Charts from "@/component/Charts";
import { allRegisterUser } from "@/Services/authSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../../../styles/Admin.module.css";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => {
    return {
      allUsers: state?.auth?.allUsers?.userList,
    };
  });
  const verify = allUsers?.filter((el) => {
    if (el.isVarified === 1) {
      return el;
    }
  });
  const unVerify = allUsers?.filter((el) => {
    if (el.isVarified === 0) {
      return el;
    }
  });
  const totalAdmin = allUsers?.filter((el) => {
    if (el.isAdmin === true) {
      return el;
    }
  });
  useEffect(() => {
    dispatch(allRegisterUser());
  }, [dispatch]);

  return (
    <div className={Styles.dashboard_pg_wr}>
      <h1>admin Dashboard</h1>
      <div className={Styles.dashboard_card_group}>
        <div className={Styles.dashboard_card}>
          <h3>Total User</h3>
          <h4>{allUsers?.length}</h4>
        </div>
        <div className={Styles.dashboard_card}>
          <h3>Verified</h3>
          <h4>{verify?.length}</h4>
        </div>
        <div className={Styles.dashboard_card}>
          <h3>Not Verified</h3>
          <h4>{unVerify?.length}</h4>
        </div>
        <div className={Styles.dashboard_card}>
          <h3>Total Admin</h3>
          <h4>{totalAdmin?.length}</h4>
        </div>
      </div>
      <div className={Styles.chart_section}>
        <div className={Styles.active_table}>
          <h5>test</h5>
        </div>
        <div className={Styles.chart_rep}>
          <Charts
            allUsers={allUsers}
            verify={verify}
            unVerify={unVerify}
            totalAdmin={totalAdmin}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
