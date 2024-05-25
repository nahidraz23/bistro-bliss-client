import { useEffect, useState } from "react";
import SectionHeading from "../../Components/shared/SectionHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5300/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div>
                <SectionHeading
                    subHeading={"What Our Clients Say"}
                    heading={"Reviews"}
                ></SectionHeading>
            </div>
            <div>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map((review, index) =>
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center px-20 space-y-4 my-10">
                                    <div>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                    </div>
                                    <FaQuoteLeft className="text-6xl"/>
                                    <p className="text-center">{review.details}</p>
                                    <h1 className="text-2xl text-yellow-600 uppercase">{review.name}</h1>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default Reviews;