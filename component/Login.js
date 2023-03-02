import { adminLogin } from "@/Services/authSlice";
import { loginUser } from "@/Services/authUserSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoadingSpinner from "./Loder";

const Login = () => {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const slug = router?.pathname?.replace("/", "");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const{error}= useSelector((state)=>state?.auth);
  const response = useSelector((state)=>state?.auth)
  const{userError}= useSelector((state)=>state?.authUser)

  const user = useSelector((state)=>state?.authUser?.loginData)
  console.log(123456,response?.status)
  const adminToken = typeof window !== "undefined" ? localStorage.getItem("adminToken") : "";
  const userToken = typeof window !== "undefined" ? localStorage.getItem("userToken") : "";

  const onSubmit = (data) => {
    if(slug === "admin"){
      dispatch(adminLogin(data))
    }
    if(slug === "user"){
      dispatch(loginUser(data));
    }
    reset()
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  useEffect(()=>{
    if(adminToken && response.status === 'success'){
      toast.success("Login successfully");
      router.push("/admin/dashboard")
      setIsLoading(false)
    }else if(response.status === 'failed'){
      toast.error(error)
      setIsLoading(false)
    }
  },[adminToken , error])

  useEffect(()=>{
    if(userToken){
      toast.success("Login successfully");
      setIsLoading(false)
      router.push("/user/dashboard")
    }else{
      setIsLoading(false)
      toast.error(userError)
    }
  },[userToken , userError ])

  useEffect(()=>{
    if(response?.status === "pending"){
      setIsLoading(true)
    }
    else if(response?.status === "success"){
      setIsLoading(false)
    }
  },[response])
  return (
    <>
      <div className="eshop_login_section">
        <div className="center_wr">
          {
            isLoading ? <LoadingSpinner /> :(<>
               <div className="eshop_login">
            <div className="login_text">
              {slug === "admin" ? (
                <>
                  <i className="fa fa-user-circle-o"></i>
                </>
              ) : (
                <>
                  <i className="fa fa-sign-out"></i>
                </>
              )}
              <h4>Welcome {slug === "admin" ? "Admin" : "User"}!</h4>
              <p>Sign in to your account</p>
            </div>
            <div className="login_form">
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
                  <button className="login_btn" type="submit" disabled={isLoading}>
                    Login
                  </button>
                </div>
              </form>
              <div className="new_account_link">
                {slug === "admin" ? (
                  <></>
                ) : (
                  <>
                    <p>
                      If you have no account ? create{" "}
                      <Link href="/user/register"> New Account.</Link>
                    </p>
                  </>
                )}
                {/* <a href="#">forget password?</a> */}
              </div>
            </div>
          </div>
            </>)
          }
          
        </div>
      </div>
    </>
  );
};

export default Login;
