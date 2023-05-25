import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div>
            <SectionTitle subHeading={"What Our Client Say"} heading={"TESTIMONIALS"} />
            <div className="mb-24">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="text-center px-20">
                                <Rating
                                className="mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="mx-auto text-5xl mt-8" />
                                <p className="mt-4">{review.details}</p>
                                <h4 className="text-xl text-yellow-500">{review.name}</h4>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonial;