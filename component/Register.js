import { addNewUser } from "@/Services/authUserSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [cpasswordType, setCPasswordType] = useState("password");
  const dispatch = useDispatch();
  const router = useRouter();
  const slug = router?.pathname?.replace("/", "");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { message , status }= useSelector((state)=>{
    return{
      message: state?.authUser?.users?.data?.message,
      status:state?.authUser?.users?.status
    }
  })

  const onSubmit = (data) => {
    dispatch(addNewUser(data))
    reset();
  };

  useEffect(()=>{
    if(status === 200){
      toast.success(message)
      router.push("/user")
    }
  },[status,message])

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const ctogglePassword = () => {
    if (cpasswordType === "password") {
      setCPasswordType("text");
      return;
    }
    setCPasswordType("password");
  };

  return (
    <>
      <div className="eshop_login_section">
        <div className="center_wr">
          <div className="eshop_login">
            <div className="login_text">
              <i className="fa fa-user-circle-o"></i>
              <h4>Create User Account</h4>
              <p>Sign in to your account</p>
            </div>
            <div className="login_form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_field">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="firstname"
                    {...register("firstName", {
                      required: true,
                    })}
                  />
                  {errors?.firstName?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                </div>
                <div className="form_field">
                  <input
                    type="text"
                    autoComplete="off"
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
                <div className="form_field">
                  <input
                    type={passwordType}
                    autoComplete="off"
                    placeholder="password"
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
                  <input
                    type={cpasswordType}
                    autoComplete="off"
                    placeholder="confirm password"
                    {...register("cPassword", {
                      required: true,
                      validate: (val) => {
                        if (watch("password") != val) {
                          return "Your passwords do no match";
                        }
                      },
                    })}
                  />
                  <span className="password_icon">
                    {cpasswordType !== "password" ? (
                      <>
                        <i onClick={ctogglePassword} className="fa fa-eye"></i>
                      </>
                    ) : (
                      <>
                        <i
                          onClick={ctogglePassword}
                          className="fa fa-eye-slash"
                        ></i>
                      </>
                    )}
                  </span>
                  {errors?.cPassword?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                  {errors?.cPassword?.type === "validate" && (
                    <p className="error">Password Not match</p>
                  )}
                </div>
                <div className="form_field">
                  <button className="login_btn" type="submit">
                    register
                  </button>
                </div>
              </form>
              <div className="new_account_link">
                <p>
                  If you have already account ? please{" "}
                  <a href="/user"> Login</a>
                </p>
                {/* <a href="#">forget password?</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
