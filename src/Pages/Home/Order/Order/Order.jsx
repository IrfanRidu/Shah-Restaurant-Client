import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../../Hooks/useMenu';
import CardItems from './CardItems/CardItems';
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import orderImg from '../../../../media/img/order.jpeg'


// const Order = () => {
//     const categories = ['soup', 'drinks', 'pizza', 'salads', 'desserts'];
//     const { category } = useParams();
//     const initialIndex = categories.indexOf(category);
//     const [tabIndex, setTabIndex] = useState(initialIndex);



//     const [menu] = useMenu();
//     const pizzas = menu.filter(item => item.category === 'pizza');
//     const salads = menu.filter(item => item.category === 'salad');
//     const desserts = menu.filter(item => item.category === 'dessert');
//     const soup = menu.filter(item => item.category === 'soup');
//     const drinks = menu.filter(item => item.category === 'drinks');
//     return (
//         <div>
//             <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//                 <TabList>
//                     <Tab>Soup</Tab>
//                     <Tab>Drinks</Tab>
//                     <Tab>Pizza</Tab>
//                     <Tab>Salad</Tab>
//                     <Tab>Dessert</Tab>

//                 </TabList>
//                 <TabPanel><CardItems items={soup}></CardItems></TabPanel>
//                 <TabPanel><CardItems items={drinks}></CardItems></TabPanel>
//                 <TabPanel><CardItems items={pizzas}></CardItems></TabPanel>
//                 <TabPanel><CardItems items={salads}></CardItems></TabPanel>
//                 <TabPanel><CardItems items={desserts}></CardItems></TabPanel>

//             </Tabs>
//         </div>
//     );
// };

// export default Order;









const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Shah Restaurant | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <CardItems items={salad}></CardItems >
                </TabPanel>
                <TabPanel>
                    <CardItems items={pizza}></CardItems >
                </TabPanel>
                <TabPanel>
                    <CardItems items={soup}></CardItems >
                </TabPanel>
                <TabPanel>
                    <CardItems items={desserts}></CardItems >
                </TabPanel>
                <TabPanel>
                    <CardItems items={drinks}></CardItems >
                </TabPanel>
            </Tabs>
        </div>
    );
};


export default Order;








