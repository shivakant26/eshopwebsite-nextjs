import Image from "next/image";
import GlobeImage from "../assets/images/globe-free-img.png";
import QualityImage from "../assets/images/quality-free-img.png";
import TagFreeImage from "../assets/images/tag-free-img.png";
import LockFreeImage from "../assets/images/lock-free-img.png";

const WorldWide = () => {
  const WorldWideArray = [
    {
      heading: "Worldwide Shipping",
      discription:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: GlobeImage,
      imageAlt: "world_shipping",
      className: "world_shipping",
    },
    {
      heading: "Best Quality",
      discription:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: QualityImage,
      imageAlt: "quality_shipping",
      className: "best_qualitys",
    },
    {
      heading: "Best Offers",
      discription:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: TagFreeImage,
      imageAlt: "best_offer",
      className: "best_offer",
    },
    {
      heading: "Secure Payments",
      discription:
        "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: LockFreeImage,
      imageAlt: "secure_payments",
      className: "secure_payments",
    },
  ];
  return (
    <>
      <div className="world_wide_section">
        <div className="center_wr">
          <div className="div_container">
            {WorldWideArray?.map((data, index) => {
              return (
                <div className={`${data?.className} common`} key={index}>
                  <Image src={data?.image} alt={data?.imageAlt} />
                  <h5>{data?.heading}</h5>
                  <p>{data?.discription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldWide;
