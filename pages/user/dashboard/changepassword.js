import { changeUserPassword } from "@/Services/authUserSlice";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Styles from "../../../styles/User.module.css";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordType, setPasswordType] = useState("password");
  const dispatch = useDispatch();
  const { userProfile , changePasswordStatus} = useSelector((state)=>state?.authUser)
  console.log(22222222222,changePasswordStatus)
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const onSubmit = (data) => {
    dispatch(changeUserPassword(data))
  };
useEffect(()=>{
    setValue('email',userProfile?.[0]?.email)
},[userProfile])

useEffect(()=>{
    if(changePasswordStatus?.success){
        toast.success(changePasswordStatus?.success)
    }
},[changePasswordStatus])

  return (
    <>
      <div className={Styles.change_password}>
        <h1>Change Password</h1>
        <div className="change_pform">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_field">
              <input
                type="text"
                placeholder="email or username"
                autoComplete="off"
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
            <div className="form_field">
                  <input
                    type={passwordType}
                    placeholder="password"
                    autoComplete="off"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <span className="password_icon">
                    {passwordType !== "password" ? (
                      <>
                        <i onClick={togglePassword} className="fa fa-eye"></i>
                      </>
                    ) : (
                      <>
                        <i onClick={togglePassword} className="fa fa-eye-slash"></i>
                      </>
                    )}
                  </span>
                  {errors?.password?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                </div>
                <div className="form_field">
                  <button className={Styles.change_pass} type="submit">
                    ChangePassword
                  </button>
                </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
