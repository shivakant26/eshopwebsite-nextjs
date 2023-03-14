import { getAdminProfile, updateProfile } from "@/Services/authSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Styles from "../../../styles/Admin.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [updateId, setUpdateId] = useState("");
  const { adminProfileData, authLoading, profileStatus } = useSelector(
    (state) => {
      return {
        adminProfileData: state?.auth?.adminProfileData?.Admin,
        profileStatus: state?.auth?.profileStatus,
        authLoading: state?.auth?.authLoading,
      };
    }
  );

  useEffect(() => {
    dispatch(getAdminProfile());
  }, [updateId, profileStatus, dispatch]);

  const profileUpdate = (id) => {
    setUpdateId(id);
  };

  const onSubmit = (data) => {
    let body = { updateId, data };
    dispatch(updateProfile(body));
  };

  useEffect(() => {
    if (updateId) {
      setValue("email", adminProfileData?.[0]?.email);
      setValue("firstName", adminProfileData?.[0]?.firstName);
    }
  }, [updateId, setValue, adminProfileData]);

  useEffect(() => {
    if (profileStatus !== "") {
      setUpdateId("");
      toast.success("update successful");
    } else {
    }
  }, [profileStatus]);

  return (
    <div className={Styles.admin_profile}>
      <h1>profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tr>
            <td>Email</td>
            <td>
              {updateId ? (
                <>
                  <div className="form_field">
                    <input
                      type="text"
                      placeholder="email"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors?.email?.type === "required" && (
                      <p className="error">Required*</p>
                    )}
                    {errors?.email?.type === "pattern" && (
                      <p className="error">Enter valid email</p>
                    )}
                  </div>
                </>
              ) : (
                <>{adminProfileData?.[0]?.email}</>
              )}
            </td>
            <td rowSpan={3}>
              <Image
                src={require("../../../assets/images/profile_first.png")}
                alt="admin_img"
              />
            </td>
          </tr>
          <tr>
            <td>FristName</td>
            <td>
              {updateId ? (
                <>
                  <div className="form_field">
                    <input
                      type="text"
                      placeholder="firstName"
                      {...register("firstName", {
                        required: true,
                      })}
                    />
                    {errors?.firstName?.type === "required" && (
                      <p className="error">Required*</p>
                    )}
                  </div>
                </>
              ) : (
                <>{adminProfileData?.[0].firstName}</>
              )}
            </td>
          </tr>
          <tr>
            <td>Role</td>
            <td>
              {adminProfileData?.[0]?.isAdmin === true ? "Admin" : "Other"}
            </td>
          </tr>
          <tr>
            <td>Status</td>
            <td colSpan={2}>
              {adminProfileData?.[0]?.isVarified === 1 ? (
                <p style={{ color: "green" }}>Verified</p>
              ) : (
                <p style={{ color: "red" }}>not Verified</p>
              )}
            </td>
          </tr>
          <tr>
            <td>update Profile </td>
            <td colSpan={2}>
              {updateId ? (
                <>
                  <input
                    type="submit"
                    className={
                      authLoading === true ? "update_btn loading" : "update_btn"
                    }
                    value={authLoading === true ? "Loading..." : "Update"}
                  />
                </>
              ) : (
                <>
                  <button
                    onClick={() => profileUpdate(adminProfileData?.[0]?._id)}
                  >
                    Modify
                  </button>
                </>
              )}
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
export default Profile;
