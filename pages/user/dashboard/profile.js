import DotLoder from "@/component/Common/DotLoder";
import { getUserProfile, updateUserProfile } from "@/Services/authUserSlice";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Styles from "../../../styles/User.module.css";

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [updateId, setUpdateId] = useState("");
  const dispatch = useDispatch();
  const { userProfile ,updateProfile , loading } = useSelector((state) => state?.authUser);
  console.log(loading);
  useEffect(()=>{
    dispatch(getUserProfile())
  },[updateId, updateProfile])

  const modify = (id) => {
    setUpdateId(id);
  };

  const onSubmit = (data) => {
    let body = {updateId,data}
    dispatch(updateUserProfile(body))
  };

  useEffect(() => {
    if (updateId) {
      setValue("email", userProfile?.[0]?.email);
      setValue("firstName", userProfile?.[0]?.firstName);
    }
  }, [updateId]);

  useEffect(()=>{
    if(updateProfile !== "" && updateProfile?.length > 0){
      setUpdateId("");
      toast.success("update successful");
    }else{
    }
  },[updateProfile])

  return (
    <>
      <div className={Styles.user_profile}>
        <h1>profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <table>
            <tr>
              <th>full Name</th>
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
                  <>{loading === true ? (<><DotLoder /></>):userProfile?.[0]?.firstName}</>
                )}
              </td>
            </tr>
            <tr>
              <th>Email</th>
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
                  <>{loading === true ? (<><DotLoder /></>) : userProfile?.[0]?.email}</>
                )}
              </td>
            </tr>
            <tr>
              <th>Status</th>
              <td>
                {userProfile?.[0]?.isVarified === 1 ? (
                  <p className={Styles.success}>Verified</p>
                ) : (
                  "Not verified"
                )}
              </td>
            </tr>
            <tr>
              <th>Action</th>
              <td>
                {updateId ? (
                  <>
                    <input
                      type="submit"
                      className="update_btn"
                      value="Update"
                    />
                  </>
                ) : (
                  <>
                    <button onClick={() => modify(userProfile?.[0]?._id)}>
                      Modify
                    </button>
                  </>
                )}
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default React.memo(UserProfile);
