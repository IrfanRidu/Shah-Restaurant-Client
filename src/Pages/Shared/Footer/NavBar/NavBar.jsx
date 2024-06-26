import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../../Hooks/useCart";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions =

        <div className="flex flex-row">
            <li><a><Link to="/home">Home</Link></a></li>
            <li><a><Link to="/menu">Our Menu</Link></a></li>
            <li><a><Link to="/order/salad">Order Here</Link></a></li>
            <li><a><Link to="/secret">Secret</Link></a></li>
            <li>
                <Link to="/dashboard/cart">
                    <button className="btn">
                        <FaCartShopping />
                        <div className="badge badge-primary">+{cart.length}</div>
                    </button>
                </Link>
            </li>

            {
                user ? <div className="ml-60 flex flex-row">
                    <span className="mr-2 mt-3">{user?.displayName}</span>
                    {/* <span> user ?<img src={"photoURL"} /></span> */}
                    <button onClick={handleLogOut} className="btn btn-active btn-ghost ">Log OUt</button>
                </div >
                    :
                    <div className="ml-60">
                        <button className="btn btn-active btn-ghost "><li><Link to="/login">Login</Link></li></button>
                    </div >



            }

        </div>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Shah Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

        </div>
    );
};

export default NavBar;