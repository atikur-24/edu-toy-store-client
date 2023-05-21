import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import signUpLogo from "../assets/signUp/93385-login.json";
import wlcLogo from "../assets/signUp/69160-welcome-blue.json";
import Lottie from "lottie-react";
import { useContext, useRef } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import google from '../assets/signUp/google.png'
import useTitle from "../hooks/useTitle.";

const SignIn = () => {
  const { userSignIn, googleSignIn, forgotPassword } = useContext(AuthContext);
  const emailRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  useTitle('Login')

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // email password sign in
    userSignIn(email, password)
        .then(() => {
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => {
            const message = error.message;
            Swal.fire({
                title: 'Error!',
                text: message,
                icon: 'error',
                confirmButtonText: 'Ok'
              })               
        })
}

// google sign in
const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                navigate(from, {replace: true})
            })
            .catch(error => {
                const message = error.message;
                console.log(message);
            })
}

// forgot password
const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
        return Swal.fire({
            title: 'Warning!',
            text: 'Please provide valid email address',
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
    }
    forgotPassword(email)
        .then( () => {
            Swal.fire({
                title: 'Password Reset Successfully!',
                text: 'Please check your email address',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        })
        .catch(error => {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
                })
        })
    }

  return (
    <section>
    <Navbar />
    <div className="my-container">
        <div className="hero min-h-screen">
            <div className="w-full flex justify-between items-center flex-col lg:flex-row">
                <div className="w-2/3 lg:w-1/2">
                  <Lottie className="w-2/3 ml-12" animationData={wlcLogo} loop={true} />
                  <Lottie animationData={signUpLogo} loop={true} />
                </div>
                <div className="card w-full lg:w-1/2 border border-inherit">
                    <div className="card-body p-8 lg:p-12">
                        <h3 className='text-2xl lg:text-4xl text-[#003366] font-semibold text-center md-6 lg:mb-12'>Login</h3>
                        <form onSubmit={handleLogin} className='space-y-7'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input ref={emailRef} required type="email" placeholder="Your email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input required type="password" placeholder="Your password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <p onClick={ handleForgotPassword } className="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="submit" value="Login" className='my-btn mb-6' />
                            </div>
                        </form>
                            <button onClick={handleGoogleLogin} className="social-btn text-[#003366]" > <img src={google} alt="google" /> Sign in with Google</button>             
                            <p className='lg:text-[18px] text-center text-gray-500 pt-6 lg:pt-12'>To New Edu Toy Emporium? <Link to='/signUp' className='text-[#003366] font-semibold'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default SignIn;
