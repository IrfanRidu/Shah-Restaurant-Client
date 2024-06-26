import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Featured from "../../Featured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Tastimonial from "../../Testimonials/Tastimonial";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Shah Restaurant | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured ></Featured>
            <Tastimonial></Tastimonial>


        </div>
    );
};

export default Home;