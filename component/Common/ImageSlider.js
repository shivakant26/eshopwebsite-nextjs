import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import Image from "next/image";
import ImageFirst from "../../assets/images/client-logo-1.png";
import ImageSecond from "../../assets/images/client-logo-3.png";
import ImageThird from "../../assets/images/client-logo-4.png";
import ImageForth from "../../assets/images/client-logo-5.png";
const ImageSlider = () => {
    const SliderImageArray = [
        { image: ImageFirst, alt: "image_first" },
        { image: ImageSecond, alt: "image_first" },
        { image: ImageThird, alt: "image_first" },
        { image: ImageForth, alt: "image_first" },
      ];
  return (
    <>
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
            {SliderImageArray?.map((img, index) => {
              return <Image key={index} src={img?.image} alt={img.alt} />;
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image_slider">
            {SliderImageArray?.map((img, index) => {
              return <Image key={index} src={img?.image} alt={img.alt} />;
            })}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
