import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import Image from "next/image";
import WorldWide from "./WorldWide";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "@/Services/productSlice";
import SalesUpto from "./SalesUpto";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => {
    return {
      product: state?.product?.products,
    };
  });
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  const singleProduct = (id) =>{
    router.push(`/products/${id}`);
  }
  return (
    <>
      <div className="banner_section">
        <div className="banner_text center_wr">
          <h1>Raining Offers For Hot Summer!</h1>
          <h5>25% Off On All Products</h5>
          <a className="shop_not_btn" href="#">
            shop now
          </a>
          <a className="find_more_btn" href="#">
            find more
          </a>
        </div>
        <div className="overlay"></div>
      </div>
      {/* end banner section */}
      <div className="card_section">
        <div className="center_wr">
          <div className="icon_slider">
            <Swiper
              speed={500}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="image_slider">
                  <Image
                    src={require("../assets/images/client-logo-1.png")}
                    alt="first_image"
                  />
                  <Image
                    src={require("../assets/images/client-logo-3.png")}
                    alt="first_image"
                  />
                  <Image
                    src={require("../assets/images/client-logo-4.png")}
                    alt="first_image"
                  />
                  <Image
                    src={require("../assets/images/client-logo-5.png")}
                    alt="first_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image_slider">
                  <Image
                    src={require("../assets/images/client-logo-1.png")}
                    alt="first_image"
                  />
                  <Image
                    src={require("../assets/images/client-logo-3.png")}
                    alt="first_image"
                  />
                  <Image
                    src={require("../assets/images/client-logo-4.png")}
                    alt="first_image"
                  />
                  <Image
                    src={require("../assets/images/client-logo-5.png")}
                    alt="first_image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="card_group_section">
            <div className="card">
              <div className="card_content">
                <div className="card-image">
                  <Image
                    src={require("../assets/images/women-fashion-free-img.jpg")}
                    alt="card_img"
                  />
                  <div className="card_body">
                    <h4>20% Off On Tank Tops</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ac dictum.
                    </p>
                    <div className="shop_now">
                      <a className="shop_not_btn" href="#">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay"></div>
            </div>
            <div className="card">
              <div className="card_content">
                <div className="card-image">
                  <Image
                    src={require("../assets/images/men-fashion-free-img.jpg")}
                    alt="card_img"
                  />
                  <div className="card_body">
                    <h4>Latest Eyewear For You</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ac dictum.
                    </p>
                    <div className="shop_now">
                      <a className="shop_not_btn" href="#">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay"></div>
            </div>
            <div className="card">
              <div className="card_content">
                <div className="card-image">
                  <Image
                    src={require("../assets/images/footwear-free-img.jpg")}
                    alt="card_img"
                  />
                  <div className="card_body">
                    <h4>Let's Lorem Suit Up!</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ac dictum.
                    </p>
                    <div className="shop_now">
                      <a className="shop_not_btn" href="#">
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>
      {/* end card section */}
      <div className="feature_product">
        <div className="center_wr">
          <h2>Featured Products</h2>
          <div className="feature_product_list">
            {product?.length > 0 ? (
              <>
                {product?.map((item, index) => {
                  return (
                    <div className="feature_card" key={index}>
                      <div className="feat_card_image" onClick={()=>singleProduct(item?._id)}>
                        <img src={item?.image} alt="item_image" />
                        <div className="shop_icon">
                          <i className="fa fa-shopping-bag"></i>
                        </div>
                      </div>
                      <div className="feat_card_content">
                        <h3>{item?.title}</h3>
                        <span className="product_category">
                          {item.description}
                        </span>
                        <span className="price">
                          <del>
                            <span className="product_price">$25.00</span>
                          </del>
                          <span className="orignal_price">${item?.price}</span>
                        </span>
                        <div className="star_rating">
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <p className="empty">No Product Available</p>
              </>
            )}
          </div>
        </div>
      </div>
      {/* end feature product section */}
      <div className="spcial_edition">
        <div className="spcial_edition_content center_wr">
          <h4>Limited Time Offer</h4>
          <h2>Special Edition</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h4>Buy This T-shirt At 20% Discount, Use Code OFF20</h4>
          <div className="shop_now">
            <a className="shop_not_btn" href="#">
              shop Now
            </a>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      {/* end spcial_edition section */}
      <WorldWide />
      {/* end world_wide_section */}
      <SalesUpto />
      {/* end sale_heading */}
    </>
  );
};

export default HomePage;
