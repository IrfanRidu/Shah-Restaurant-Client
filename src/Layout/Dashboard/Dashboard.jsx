
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaEnvelope, FaList, FaUsers } from "react-icons/fa6";
import { FaHome, FaSearch, FaUtensilSpoon } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <h1 className='text-center text-black text-5xl'>Shah Restaurant</h1>
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li className='mb-2'>
                                <NavLink to="/dashboard/home">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li className='mb-2'>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensilSpoon /> Add Items
                                </NavLink>
                            </li>

                            <li className='mb-2'>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList />Manage Items
                                </NavLink>
                            </li>
                            <li className='mb-2'>
                                <NavLink to="/dashboard/manageBookings">
                                    <FaBook />Manage Bookings
                                </NavLink>
                            </li>
                            <li className='mb-2'>
                                <NavLink to="/dashboard/users">
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <div className="divider"></div>
                                <li className='mb-2'>
                                    <NavLink to="/">
                                        <FaHome /> Home
                                    </NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to="/dashboard/cart">
                                        <FaUtensilSpoon /> My Carts({cart.length})
                                    </NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to="/menu">
                                        <FaSearch /> Menu
                                    </NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to="/contact">
                                        <FaEnvelope /> Contact
                                    </NavLink>
                                </li>



                                <li className='mb-2'>
                                    <NavLink to="/dashboard/home">
                                        <FaHome /> Admin Home
                                    </NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensilSpoon /> Add Items
                                    </NavLink>
                                </li>

                                <li className='mb-2'>
                                    <NavLink to="/dashboard/manageItems">
                                        <FaList />Manage Items
                                    </NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to="/dashboard/manageBookings">
                                        <FaBook />Manage Bookings
                                    </NavLink>
                                </li>
                                <li className='mb-2'>
                                    <NavLink to="/dashboard/users">
                                        <FaUsers /> All Users
                                    </NavLink>
                                </li>

                            </>
                    }



                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;