import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [cpasswordType, setCPasswordType] = useState("password");

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
          <div class="eshop_login">
            <div className="login_text">
              <i class="fa fa-user-circle-o"></i>
              <h4>Create User Account</h4>
              <p>Sign in to your account</p>
            </div>
            <div className="login_form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_field">
                  <input
                    type="text"
                    autocomplete="off"
                    placeholder="firstname"
                    {...register("firstname", {
                      required: true,
                    })}
                  />
                  {errors?.firstname?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                </div>
                <div className="form_field">
                  <input
                    type="text"
                    autocomplete="off"
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
                    autocomplete="off"
                    placeholder="password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <span className="password_icon">
                    {passwordType !== "password" ? (
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
                  <input
                    type={cpasswordType}
                    autocomplete="off"
                    placeholder="confirm password"
                    {...register("cpassword", {
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
                        <i onClick={ctogglePassword} class="fa fa-eye"></i>
                      </>
                    ) : (
                      <>
                        <i
                          onClick={ctogglePassword}
                          class="fa fa-eye-slash"
                        ></i>
                      </>
                    )}
                  </span>
                  {errors?.cpassword?.type === "required" && (
                    <p className="error">Required*</p>
                  )}
                  {errors?.cpassword?.type === "validate" && (
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
