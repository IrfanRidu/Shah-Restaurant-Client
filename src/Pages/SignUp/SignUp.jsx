
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log(res.data);
                                    reset();

                                    Swal.fire({
                                        title: "User updated Successfully",
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
                                    })

                                }

                            });

                        navigate('/');

                    })

                    .catch((error) => console.log(error))


            })
    };

    return (

        <>
            <Helmet>
                <title>Shah Restaurant | sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">User name is required!</span>}
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="name" {...register("Photo URL", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.PhotoURL && <span className="text-red-600">User photo is required!</span>}
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">User email is required!</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password"

                                    // , {
                                    //     required: true, minLength: 8,
                                    //     maxLength: 10,
                                    //     pattern: /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"/

                                    // }
                                )}

                                    type="password" name="password" placeholder="password" className="input input-bordered" />


                                {/* {errors.password?.type === 'required' && <span className="text-red-600">Password is required!</span>}
                            {errors.password?.type === 'minlength' && <span className="text-red-600">Password must be 8 character long</span>}
                            {errors.password?.type === 'maxlength' && <span className="text-red-600">Password must be less then 10 character </span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">at least one uppercase letter, one lowercase letter, one number and one special character:</span>} */}

                            </div>


                            < div className="form-control mt-6" >
                                <button className="btn btn-primary">Sign UP</button>
                            </div>

                            {/* <SocialLogin></SocialLogin> */}
                        </form>
                        <Link to="/login"><h2 className='text-center justify-center mb-4 p-2 items-center'>Existing User? Please Login</h2></Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SignUp;


// import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
// import { useForm } from "react-hook-form"
// import { Link } from 'react-router-dom';
// import { AuthContext } from "../../Providers/AuthProvider";

// const SignUp = () => {

//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const { createUser } = useContext(AuthContext);


//     const onSubmit = data => {
//         console.log(data);
//         createUser(data.email, data.password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//             })
//     }

//     return (

//         <>
//             <Helmet>
//                 <title>Shah Restaurant | sign up</title>
//             </Helmet>

//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col md:flex-row-reverse">
//                     <div className="text-center md:w-1/2 lg:text-left">
//                         <h1 className="text-5xl font-bold">Sign Up now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
//                         <form

//                             onSubmit={handleSubmit(onSubmit)}

//                             className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
//                                 {errors.name && <span className="text-red-600">User name is required!</span>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="text" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
//                                 {errors.email && <span className="text-red-600">User email is required!</span>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input {...register("password", {
//                                     required: true, minLength: 8,
//                                     maxLength: 10,
//                                     pattern: /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"/

//                                 })} type="password" name="password" placeholder="password" className="input input-bordered" />
//                                 {errors.password?.type === 'required' && <span className="text-red-600">Password is required!</span>}
//                                 {errors.password?.type === 'minlength' && <span className="text-red-600">Password must be 8 character long</span>}
//                                 {errors.password?.type === 'maxlength' && <span className="text-red-600">Password must be less then 10 character </span>}
//                                 {errors.password?.type === 'pattern' && <span className="text-red-600">at least one uppercase letter, one lowercase letter, one number and one special character:</span>}

//                             </div>

//                             <div className="form-control mt-6">

//                                 <input className="btn btn-primary" type="submit" value="Sign Up" />
//                                 <Link to="/login"><h2 className='text-center justify-center mt-4 items-center'>Existing User? Please Login</h2></Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SignUp;