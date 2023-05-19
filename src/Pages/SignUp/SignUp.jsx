import Navbar from "../Shared/Navbar/Navbar";
import signUpLogo from "../../assets/signUp/93385-login.json";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  // const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, email, password, confirm);

    if (password.length < 6) {
      return Swal.fire({
        title: "Warning!",
        text: "Password must be 6 characters or longer",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    } else if (password !== confirm) {
      return Swal.fire({
        title: "Warning!",
        text: "Your password did not match",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    }

/*     // sign up a new user
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(name, loggedUser);
        console.log(loggedUser);
        Swal.fire({
          title: "Success!",
          text: "Your Account has been created Successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
        form.reset();
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        Swal.fire({
          title: "Error!",
          text: message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }); */
  };

  return (
    <section>
      <Navbar />
      <div className="my-container">
        <div className="hero min-h-screen">
          <div className="w-full flex justify-between items-center flex-col lg:flex-row">
            <div className="w-2/3 lg:w-1/2">
              <img src={signUpLogo} alt="logo" />
            </div>
            <div className="card w-full lg:w-1/2 border border-inherit">
              <div className="card-body p-16">
                <h3 className="text-4xl font-semibold text-center mb-12">
                  Sign Up
                </h3>
                <form onSubmit={handleSignUp} className="space-y-7">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                      required
                      type="name"
                      placeholder="Your name"
                      name="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="Your email"
                      name="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text font-semibold">Password</span>
                    </label>
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder="Your password"
                      name="password"
                      className="input input-bordered"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-[63%] right-4 cursor-pointer"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Confirm Password
                      </span>
                    </label>
                    <input
                      required
                      type={showConfirm ? "text" : "password"}
                      placeholder="Your confirm password"
                      name="confirm"
                      className="input input-bordered"
                    />
                    <span
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute top-[63%] right-4 cursor-pointer"
                    >
                      {showConfirm ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div className="form-control">
                    <input type="submit" value="Sign Up" className="my-btn" />
                  </div>
                  <p className="text-[18px] font-medium text-center">
                    Or Sign In With
                  </p>
                  <div className="flex justify-center gap-4">
                    {/* <img src={facebook} alt="google" className='bg-[#F5F5F8] p-4 rounded-full cursor-pointer' />
                                        <img src={twitter} alt="google" className='bg-[#F5F5F8] p-4 rounded-full cursor-pointer' />
                                        <img onClick={handleGoogleSignIn} src={google} alt="google" className='bg-[#F5F5F8] p-4 rounded-full cursor-pointer' /> */}
                  </div>
                  <p className="text-[18px] text-center text-gray-500">
                    Already have an account?{" "}
                    <Link to="/signIn" className="text-[#FF3811] font-semibold">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
