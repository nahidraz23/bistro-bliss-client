import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={5}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img
                    src={slide1}
                    alt=""
                    className="lg:w-[500px]"
                />
                <h1 className="lg:text-6xl text-white text-center -mt-32 uppercase">Salads</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={slide2}
                    alt=""
                    className="lg:w-[500px]"
                />
                <h1 className="lg:text-6xl text-white text-center -mt-32 uppercase">Pizzas</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={slide3}
                    alt=""
                    className="lg:w-[500px]"
                />
                <h1 className="lg:text-6xl text-white text-center -mt-32 uppercase">soups</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={slide4}
                    alt=""
                    className="lg:w-[500px]"
                />
                <h1 className="lg:text-6xl text-white text-center -mt-32 uppercase">Desserts</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={slide5}
                    alt=""
                    className="lg:w-[500px]"
                />
                <h1 className="lg:text-6xl text-white text-center -mt-32 uppercase">Salads</h1>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;
