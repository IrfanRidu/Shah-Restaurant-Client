
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'


// import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Saha Restaurant | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            <button className='btn btn-outline btn-xs' > Validate</button>
                            <div className="form-control mt-6">
                                {/* TODO: apply disabled for re captcha */}
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />


                            </div>
                        </form>
                        <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;




















// import { useContext, useEffect, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from '../../Providers/AuthProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import Swal from 'sweetalert2';
// // import SocialLogin from '../../Components/SocialLogin/SocialLogin';

// const Login = () => {
//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, [])

//     const { signIn } = useContext(AuthContext);
//     const [disabled, setDisabled] = useState(true);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";
//     // console.log(location.state);

//     const handleLogin = e => {

//         e.preventDefault();

//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         // console.log(email, password);
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 // console.log(user);


//                 Swal.fire({
//                     title: "User Logged In Successfully",
//                     showClass: {
//                         popup: `
//       animate__animated
//       animate__fadeInUp
//       animate__faster
//     `
//                     },
//                     hideClass: {
//                         popup: `
//       animate__animated
//       animate__fadeOutDown
//       animate__faster
//     `
//                     }
//                 });
//                 navigate(from, { replace: true });
//             })

//     }
//     const handelValidateCaptcha = (e) => {
//         const user_captcha_value = e.target.value;
//         if (validateCaptcha(user_captcha_value) === true) {
//             alert('Captcha Matched');
//             setDisabled(false);
//         }
//         else {
//             alert('Captcha Does Not Match');
//             setDisabled(true);
//         }

//     }
//     return (

//         <>
//             <Helmet>
//                 <title>Shah Restaurant| login</title>
//             </Helmet>

//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col md:flex-row-reverse">
//                     <div className="text-center md:w-1/2 lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleLogin} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <LoadCanvasTemplate />
//                                 </label>
//                                 <input onBlur={handelValidateCaptcha} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered"

//                                 // required

//                                 />
//                                 <button className="btn btn-outline btn btn-xs">Validate</button>
//                             </div>
//                             <div className="form-control mt-6">

//                                 <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
//                             </div>
//                         </form>
//                         <Link to="/signUp"><h2 className='text-center justify-center  mb-4 items-center'>New User? Please Sign Up</h2></Link>
//                         {/* <SocialLogin></SocialLogin> */}
//                     </div>

//                 </div>

//             </div>
//         </>

//     );
// };

// export default Login;