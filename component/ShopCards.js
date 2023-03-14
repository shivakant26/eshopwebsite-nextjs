import ShopImageFirst from "../assets/images/women-fashion-free-img.jpg";
import ShopImageSecond from "../assets/images/men-fashion-free-img.jpg";
import ShopImageThird from "../assets/images/footwear-free-img.jpg";
import Image from "next/image";

const ShopCards = () => {
  const CardDataArray = [
    {
      heading: "20% Off On Tank Tops",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinac dictum.",
      image: ShopImageFirst,
      alt: "shop_img_one",
    },
    {
      heading: "Latest Eyewear For You",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinac dictum.",
      image: ShopImageSecond,
      alt: "shop_img_two",
    },
    {
      heading: "Let's Lorem Suit Up!",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proinac dictum.",
      image: ShopImageThird,
      alt: "shop_img_three",
    },
  ];
  return (
    <>
      {CardDataArray?.map((cardInfo, index) => {
        return (
          <div className="card" key={index}>
            <div className="card_content">
              <div className="card-image">
                <Image
                  src={cardInfo?.image}
                  alt={cardInfo?.alt}
                />
                <div className="card_body">
                  <h4>{cardInfo?.heading}</h4>
                  <p>{cardInfo?.discription}</p>
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
        );
      })}
    </>
  );
};

export default ShopCards;
