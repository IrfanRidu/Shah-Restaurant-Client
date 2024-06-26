import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Tastimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])
    return (
        <div>
            <SectionTitle subHeading='..................What Our Costumers Say...................' heading='TESTIMONIALS'> </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    review.map(comment => <SwiperSlide
                        key={comment._id}
                    >

                        <div className="flex flex-col items-center justify-center m-24">
                            <Rating className=" "
                                style={{ maxWidth: 180 }}
                                value={comment.rating}
                                readOnly
                            />
                            {comment.details}
                            <h3 className="text-orange-500 text-center">{comment.name}</h3>
                        </div>




                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Tastimonial;