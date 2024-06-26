
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../media/img/banner.jpg';
import pizzaImg from '../../../media/img/pizza.jpeg';
import saladImg from '../../../media/img/salad.jpeg';
import dessertImg from '../../../media/img/dessert.jpeg';
import offeredImg from '../../../media/img/offered.jpeg';
import soupImg from '../../../media/img/soup.jpeg';
import drinkImg from '../../../media/img/drinks.jpeg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu([]);

    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const desserts = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (

        <div>
            <Helmet>
                <title>Shah Restaurant | Menu</title>
            </Helmet>
            <SectionTitle
                heading="Today's Offer"
                subHeading='Popular Items'
            >
            </SectionTitle>
            <Cover img={menuImg} title="Our Menu">
            </Cover>
            <MenuCategory items={offered} img={offeredImg} title='Offered Items'></MenuCategory>
            <MenuCategory items={pizzas} img={pizzaImg} title='pizza'></MenuCategory>
            <MenuCategory items={desserts} img={dessertImg} title='desserts'></MenuCategory>
            <MenuCategory items={salads} img={saladImg} title='salad'></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title='soup'></MenuCategory>
            <MenuCategory items={drinks} img={drinkImg} title='drinks'></MenuCategory>
        </div >
    );
};

export default Menu;