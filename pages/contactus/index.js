import SalesUpto from "@/component/SalesUpto";
import { useForm } from "react-hook-form";
import Styles from "../../styles/Contact.module.css";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const contactInfo = [
    {
      title: "sales",
      discription: "Vestibulum ante ipsum primis in faucibus orci luctus.",
      contact: "1800 123 4567",
    },
    {
      title: "Complaints",
      discription: "Vestibulum ante ipsum primis in faucibus orci luctus.",
      contact: "1900 223 8899",
    },
    {
      title: "Returns",
      discription: "Vestibulum ante ipsum primis in faucibus orci luctus.",
      contact: "returns@mail.com",
    },
    {
      title: "Marketing",
      discription: "Vestibulum ante ipsum primis in faucibus orci luctus.",
      contact: "1700 444 5578",
    },
  ];

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className={Styles.contact_us_page}>
        <div className={Styles.banner}>
          <div className="center_wr">
            <h1>Contact us</h1>
          </div>
          <div className="overlay"></div>
        </div>
        <div className={Styles.have_any_section}>
          <div className="center_wr">
            <div className={Styles.have_any}>
              <div className={Styles.have_any_top}>
                <h5>Have any queries?</h5>
                <h2>We are here to help.​</h2>
              </div>
              <div className={Styles.have_any_cards}>
                {contactInfo?.length > 0 ? (
                  <>
                    {contactInfo?.map((item, index) => {
                      return (
                        <div className={Styles.contact_card} key={index}>
                          <h3>{item.title}</h3>
                          <p>{item.discription}</p>
                          <h5>{item.contact}</h5>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <p className="error">No contact Available</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.contactus_form_section}>
          <div className="center_wr">
            <div className={Styles.main_wrapper}>
              <div className={Styles.contact_text}>
                <h6>Do not be a stranger!</h6>
                <h2>You tell us. We listen.</h2>
                <p>
                  Cras elementum finibus lacus nec lacinia. Quisque non
                  convallis nisl, eu condimentum sem. Proin dignissim libero
                  lacus, ut eleifend magna vehicula et. Nam mattis est sed
                  tellus.
                </p>
              </div>
              <div className={Styles.contact_form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form_field">
                    <input
                      type="text"
                      placeholder="Name"
                      autoComplete="off"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors?.name?.type === "required" && (
                      <p className="error">Required*</p>
                    )}
                  </div>
                  <div className="form_field">
                    <input
                      type="text"
                      placeholder="Subject"
                      autoComplete="off"
                      {...register("subject", {
                        required: true,
                      })}
                    />
                    {errors?.subject?.type === "required" && (
                      <p className="error">Required*</p>
                    )}
                  </div>
                  <div className="form_field">
                    <input
                      type="text"
                      placeholder="Email"
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
                    <textarea
                      placeholder="Message"
                      rows="12"
                      autoComplete="off"
                      {...register("message", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="form_field">
                    <button className="login_btn" type="submit">
                      send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <SalesUpto />
      </div>
    </>
  );
};

export default ContactUs;
