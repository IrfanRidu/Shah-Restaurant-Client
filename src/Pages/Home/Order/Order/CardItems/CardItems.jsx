import DisplayCards from "../../../../../Components/SectionTitle/DisplayCards/DisplayCards";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";

const CardItems = ({ items }) => {

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    // };
    return (
        <div >

            {/* <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> */}
            <div className='grid md:grid-cols-3 gap-10'>

                {
                    items.map(item => <DisplayCards
                        key={item._id}
                        item={item}
                    ></DisplayCards>)
                }
            </div>

            {/* //     </SwiperSlide>

            </Swiper> */}
        </div>
    );
};

//     return (
//         <div className="grid md:grid-cols-3 gap-10">
//             {items.map(item => <DisplayCards
//                 key={item._id}
//                 item={{ item }}></DisplayCards>)}
//         </div>
//     );
// };

export default CardItems;