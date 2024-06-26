import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../../media//img/slide1.jpg';
import slide2 from '../../../media//img/slide2.jpg';
import slide3 from '../../../media//img/slide3.jpg';
import slide4 from '../../../media//img/slide4.jpg';
import slide5 from '../../../media//img/slide5.jpg';


const Category = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                pagination={true}

                modules={[Pagination]} className="mySwiper ">
                <SwiperSlide><img src={slide1} /></SwiperSlide>
                <SwiperSlide><img src={slide2} /></SwiperSlide>
                <SwiperSlide><img src={slide3} /></SwiperSlide>
                <SwiperSlide><img src={slide4} /></SwiperSlide>
                <SwiperSlide><img src={slide5} /></SwiperSlide>

            </Swiper>
        </>

    );
};

export default Category;