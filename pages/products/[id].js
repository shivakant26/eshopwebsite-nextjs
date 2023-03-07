import SalesUpto from "@/component/SalesUpto";
import { addToCart, getAllProduct } from "@/Services/productSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Styles from "../../styles/Product.module.css";

const SingleProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const id = router?.query?.id;
  const [quantity , setQunatity] = useState();
  const dispatch = useDispatch();
  const { products , error } = useSelector((state) => {
    return {
      products: state?.productSlice?.products,
      error : state?.productSlice?.error
    };
  });
const cartpro = useSelector((state)=>state?.product?.additem)
console.log(123456,products)

var userToken = typeof window!=="undefined" ?  localStorage.getItem("userToken"):null;

useEffect(() => {
 console.log(userToken)
}, [userToken]);

useEffect(()=>{
  if(error){
    toast.error(error)
  }
},[error])
  useEffect(() => {
    dispatch(getAllProduct());
  }, [id]);

  const block = (id1, id2, id3, id1btn, id2btn, id3btn) => {
    document.getElementById(id1).style.display = "block";
    document.getElementById(id2).style.display = "none";
    document.getElementById(id3).style.display = "none";
    document.getElementById(id1btn).style.borderTop = "2px solid #000";
    document.getElementById(id2btn).style.borderTop = "2px solid #fff";
    document.getElementById(id3btn).style.borderTop = "2px solid #fff";
  };

  useEffect(() => {
    block("London", "Paris", "Tokyo", "Londonbtn", "Parisbtn", "Tokyobtn");
  }, []);

  const openCity = (evt, cityName) => {
    switch (cityName) {
      case "London":
        block("London", "Paris", "Tokyo", "Londonbtn", "Parisbtn", "Tokyobtn");
        break;
      case "Paris":
        block("Paris", "Tokyo", "London", "Parisbtn", "Tokyobtn", "Londonbtn");
        break;
      case "Tokyo":
        block("Tokyo", "Paris", "London", "Tokyobtn", "Parisbtn", "Londonbtn");
        break;
      default:
        console.log("nothings");
    }
  };
  const onSubmit = (data) => {
    // console.log(data)
  };
  const addproduct = (itemId)=>{
    let object = {itemId,quantity}
    dispatch(addToCart(object))
  }
  return (
    <>
      <div className={Styles.single_product_section}>
        <div className="center_wr">
          {products?.length > 0 && products
            ?.filter((el) => {
              if (el._id === id) {
                return el;
              }
            })
            .map((item, index) => {
              return (
                <>
                  <div className={Styles.single_product} key={index}>
                    <div className={Styles.product_image}>
                      <img src={item?.image}
                        alt="product_img"
                      />
                    </div>
                    <div className={Styles.product_contant}>
                      <div className={Styles.breadcurmb}>
                        <span>Home / Accessorirs / {item?.title}</span>
                      </div>
                      <span className={Styles.single_product_category}>
                        <a href="#">Accessorirs</a>
                      </span>
                      <h1 className={Styles.product_title}>{item?.title}</h1>
                      <p className="price_section">
                        <span className={Styles.price_in}>${item?.price}</span>
                        <span className={Styles.ext_text}> + Free Shipping</span>
                      </p>
                      <p className={Styles.about_product}>
                        Nam nec tellus a odio tincidunt auctor a ornare odio.
                        Sed non mauris vitae erat consequat auctor eu in elit.
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Mauris in erat
                        justo. Nullam ac urna eu felis dapibus condimentum sit
                        amet a augue. Sed non neque elit sed .
                      </p>
                      <div className={Styles.quantity_and_cart}>
                        <span>
                          <select 
                            onChange={(e)=>setQunatity(e.target.value)}
                          >
                            <option value="none">none</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </span>
                        <span>
                          <button onClick={()=>addproduct(item._id)}>add to cart</button>
                        </span>
                      </div>
                      <hr />
                      <div className={Styles.product_meta}>
                        <span>
                          Category:<a href="#">Women</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          <div className={`${Styles.tab_section}`}>
            <div className="center_wr">
              <div className={Styles.tab}>
                <button
                  id="Londonbtn"
                  className={Styles.tablinks}
                  onClick={(event) => openCity(event, "London")}
                >
                  Description
                </button>
                <button
                  id="Parisbtn"
                  className={Styles.tablinks}
                  onClick={(event) => openCity(event, "Paris")}
                >
                  Additional information
                </button>
                <button
                  id="Tokyobtn"
                  className={Styles.tablinks}
                  onClick={(event) => openCity(event, "Tokyo")}
                >
                  Reviews (0)
                </button>
              </div>
              <div id="London" className={Styles.tabcontent}>
                <h3>Product description</h3>
                <p>
                  Since it’s creation lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <div className={Styles.product_multiple_image}>
                  <div className="left_part">
                    <Image
                      src={require("../../assets/images/product-about-01.jpg")}
                      alt="product_image01"
                    />
                  </div>
                  <div className="right_part">
                    <Image
                      src={require("../../assets/images/product-about-04.jpg")}
                      alt="product_image01"
                    />
                  </div>
                </div>
                <div className={Styles.product_multiple_image}>
                  <div className="left_part">
                    <Image
                      src={require("../../assets/images/product-about-02.jpg")}
                      alt="product_image01"
                    />
                  </div>
                  <div className="right_part">write some content here</div>
                </div>
                <div className={Styles.product_multiple_image}>
                  <div className="left_part">
                    <div className={Styles.extra_content}>
                      <h4>More about the product</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="right_part">
                    <Image
                      src={require("../../assets/images/product-about-03.jpg")}
                      alt="product_image01"
                    />
                  </div>
                </div>
              </div>
              <div id="Paris" className={Styles.tabcontent}>
                <table>
                  <tbody>
                    <tr>
                      <th>Color</th>
                      <td>Blue , Gray</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>30,32,34,36</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="Tokyo" className={Styles.tabcontent}>
                <p>There are no reviews yet.</p>
                <div className="review_section">
                  <span>Be the first to review “Basic Gray Jeans”</span>
                  <span>
                    Your email address will not be published. Required fields
                    are marked *
                  </span>
                  <div className={Styles.ratings}>
                    <label>Your Rating*</label>
                    <p className="start">
                      <span>
                        <i class="fa fa-star-o"></i>
                      </span>
                      <span>
                        <i class="fa fa-star-o"></i>
                      </span>
                      <span>
                        <i class="fa fa-star-o"></i>
                      </span>
                      <span>
                        <i class="fa fa-star-o"></i>
                      </span>
                      <span>
                        <i class="fa fa-star-o"></i>
                      </span>
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form_field">
                      <label>Your review*</label>
                      <textarea rows={5} />
                    </div>
                    <div className={Styles.form_group}>
                      <div className={Styles.form_item}>
                        <div className="form_field">
                          <label>Name*</label>
                          <input
                            type="text"
                            autocomplete="off"
                            {...register("name", {
                              required: true,
                            })}
                          />
                          {errors?.name?.type === "required" && (
                            <p style={{ color: "red" }}>Require*</p>
                          )}
                        </div>
                      </div>
                      <div className={Styles.form_item}>
                        <div className="form_field">
                          <label>Email*</label>
                          <input
                            type="text"
                            autocomplete="off"
                            {...register("email", {
                              required: true,
                            })}
                          />
                          {errors?.email?.type === "required" && (
                            <p style={{ color: "red" }}>Required*</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form_field">
                      <button className={Styles.review_btn} type="submit">
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SalesUpto />
      </div>
    </>
  );
};
export default SingleProduct;
