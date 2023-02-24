import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const router = useRouter();
  const slug = router?.pathname?.replace("/", "");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <div className="eshop_login_section">
        <div className="center_wr">
          <div class="eshop_login">
            <div className="login_text">
              {slug === "admin" ? (
                <>
                  <i class="fa fa-user-circle-o"></i>
                </>
              ) : (
                <>
                  <i class="fa fa-sign-out"></i>
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
                    autocomplete="off"
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
                    autocomplete="off"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <span className="password_icon">
                    {passwordType === "password" ? (
                      <>
                        <i onClick={togglePassword} class="fa fa-eye"></i>
                      </>
                    ) : (
                      <>
                        <i onClick={togglePassword} class="fa fa-eye-slash"></i>
                      </>
                    )}
                  </span>
                  {errors?.password?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                </div>
                <div className="form_field">
                  <button className="login_btn" type="submit">
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
        </div>
      </div>
    </>
  );
};

export default Login;
