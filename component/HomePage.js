import Image from "next/image";
import WorldWide from "./WorldWide";
import SalesUpto from "./SalesUpto";
import AllProduct from "./AllProduct";
import ImageSlider from "./Common/ImageSlider";
import ShopCards from "./ShopCards";

const HomePage = () => {
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
            <ImageSlider />
          </div>
          <div className="card_group_section">
            <ShopCards />
          </div>
        </div>
      </div>
      {/* end card section */}
      <div className="feature_product">
        <div className="center_wr">
          <h2>Featured Products</h2>
          <AllProduct />
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
