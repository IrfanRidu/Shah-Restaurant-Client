import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../media/img/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item  bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading='Check It Out' heading='Featured Item'></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center pb -20 pt- 12 px-36">
                <div className="mb-5">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-20">
                    <p>Aug 20 ,2024</p>
                    <p>Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum pariatur debitis rem doloremque quos, aut nostrum harum dolorum autem, consequatur minus, culpa ullam impedit inventore repellat expedita quasi ea.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;