import {
  allRegisterUser,
  roleAsAdmin,
  roleAsUser,
  UnVerifyUser,
  verifyUser,
} from "@/Services/authSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Styles from "../../../styles/Admin.module.css";

const Allusers = () => {
  const dispatch = useDispatch();

  const { allUsers, unBlock, updateRole, authLoading, block, error } = useSelector(
    (state) => {
      return {
        allUsers: state?.auth?.allUsers?.userList,
        unBlock: state?.auth?.unBlock?.success,
        block: state?.auth?.block?.success,
        updateRole: state?.auth?.updateRole?.success,
        error: state?.auth?.error,
        authLoading : state?.auth?.authLoading
      };
    }
  );

  useEffect(() => {
    dispatch(allRegisterUser());
  }, [unBlock, block, error, updateRole]);

  const unBlockUser = (id) => {
    dispatch(verifyUser(id));
  };

  const blockUser = (id, email) => {
    let object = { id, email };
    dispatch(UnVerifyUser(object));
  };

  const makeRole = (id, roleKey) => {
    if (roleKey === false) {
      dispatch(roleAsAdmin(id));
    } else {
      dispatch(roleAsUser(id));
    }
  };

  useEffect(() => {
    if (unBlock?.length > 0 && !block) {
      toast.success(unBlock, { toastId: 1 });
    } else if (block?.length > 0 && !unBlock) {
      toast.success(block, { toastId: 3 });
    } else if (updateRole?.length > 0 && !unBlock) {
      toast.success(updateRole, { toastId: 4 });
    } else if (error) {
      toast.error(error, { toastId: 2 });
    }
  }, [unBlock, allUsers, block, updateRole, error]);

  return (
    <div className={Styles.admin_alluser}>
      <div
        style={{ marginBottom: "10px", fontWeight: "bold" }}
        className="breadcrumb"
      >
        Dashboard / all user
      </div>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>firstName</th>
            <th>Role Level</th>
            <th>Current Status</th>
            <th>Status Action</th>
            <th>Role Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.length > 0 ? (
            allUsers?.map((item, index) => (
              <tr key={index}>
                <td>{item?.email}</td>
                <td>{item?.firstName}</td>
                <td>{item?.isAdmin === false ? "user" : "admin"}</td>
                <td>
                  {item?.isVarified === 1 ? (
                    <p style={{ color: "green" }}>unBlock</p>
                  ) : (
                    <p style={{ color: "red" }}>Block</p>
                  )}
                </td>
                <td>
                  {item?.email === "admin@gmail.com" ? (
                    <>
                      <p style={{ textAlign: "center", color: "gray" }}>
                        Owner
                      </p>
                    </>
                  ) : (
                    <>
                      <button onClick={() => unBlockUser(item?._id)}>
                        unBlock
                      </button>
                      <button onClick={() => blockUser(item?._id, item?.email)}>
                        Block
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {item?.email === "admin@gmail.com" ? (
                    <>
                      <p style={{ textAlign: "center", color: "gray" }}>
                        Owner
                      </p>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => makeRole(item?._id, item?.isAdmin)}
                      >
                        {item?.isAdmin === false ? "asAdmin" : "asUser"}
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <>
              <tr>loading....</tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
