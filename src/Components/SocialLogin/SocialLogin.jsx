
import { FaGoogle } from "react-icons/fa";


import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;






































// import { FaGoogle } from 'react-icons/fa6';
// import useAuth from '../../Hooks/useAuth';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
// import { useNavigate } from 'react-router-dom';



// const { googleSignIN } = useAuth;
// const axiosPublic = useAxiosPublic;
// const navigate = useNavigate();

// const handleGoogleSignIn = () => {
//     googleSignIN()
//         .then(result => {
//             console.log(result.user);
//             const userInfo = {
//                 email: result.user?.email,
//                 name: result.user?.displayName
//             }
//             axiosPublic.post('/users', userInfo)
//                 .then(res => {
//                     console.log(res.data);
//                     navigate('/');
//                 })
//         })
// }

// const SocialLogin = () => {
//     return (
//         <div className='p-8'>
//             <div className='divider'></div>
//             <div>
//                 <button onClick={handleGoogleSignIn} className="btn btn-sm "><FaGoogle className='mr-4' /> Google</button>

//             </div>
//         </div>
//     );
// };

// export default SocialLogin;