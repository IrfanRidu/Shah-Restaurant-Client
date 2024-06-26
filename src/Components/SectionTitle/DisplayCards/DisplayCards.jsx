import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import Swal from 'sweetalert2';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const DisplayCards = ({ item }) => {

    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // console.log(food, user.email);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price

            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name} added to your cart`,
                            timer: 800,
                            showClass: {
                                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
                            },
                            hideClass: {
                                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
                            }
                        });
                        refetch();
                    }
                })
        }
        else {
            navigate('/login', { state: { from: location } })

        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};





//     const { name, image, price, recipe } = item;
//     return (
//         <div className="card w-96 bg-base-100 shadow-xl">
//             <figure className="px-10 pt-10">
//                 <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
//                 <img src={image} alt="" className="rounded-xl" />
//             </figure>
//             <div className="card-body items-center text-center">
//                 <h2 className="card-title">{name}</h2>
//                 <p>{recipe} </p>
//                 <div className="card-actions">
//                     <button className="btn btn-primary">Order Now</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default DisplayCards;