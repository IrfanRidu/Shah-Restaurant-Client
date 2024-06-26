import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../../media/img/01.jpg';
import img2 from '../../../media/img/02.jpg';
import img3 from '../../../media/img/03.png';
import img4 from '../../../media/img/04.jpg';
import img5 from '../../../media/img/05.png';
import img6 from '../../../media/img/06.png';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />

            </div>
            <div>
                <img src={img2} />

            </div>
            <div>
                <img src={img3} />

            </div>
            <div>
                <img src={img4} />

            </div>
            <div>
                <img src={img5} />

            </div>
            <div>
                <img src={img6} />

            </div>


        </Carousel>
    );
};

export default Banner;