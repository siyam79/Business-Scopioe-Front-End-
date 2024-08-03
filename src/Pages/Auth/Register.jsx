import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

// Register banner image 
import Registerbanner from "../../../src/assets/images/loginBanner.jpeg"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { createUser, handleUpdateProfile } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.userName;

    createUser(email, password)
      .then(res => {
        handleUpdateProfile(name)
          .then(() => {
            toast.success('User created successfully');
            navigate('/');
          });
      })
      .catch(error => {
        console.error(error);
        toast.error('Please check your email or password');
      });
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div className="font-poppins relative min-h-screen ">
      <div className="lg:flex items-center  h-full relative ">


        {/* Form section */}
        <div className="lg:w-1/2 w-full pt-4 lg:pt-0 relative  lg:h-[802px] ">
          {/* Background image for small devices */}
          <div className="lg:hidden absolute inset-0 z-0">
            <img src="https://i.ibb.co/MZzqXxX/banner1.jpg" className="w-full h-full object-cover" alt="background" />
          </div>

          {/* Logo and text over the image */}
          <div className=" flex justify-center mt-10 lg:mt-0 ">
            <div className="lg:hidden absolute  ">
              <p className="text-4xl font-bold text-[#4285F3]  text-center ">LOGO</p>
              <p className="mt-4 text-lg text-center text-[#FFFFFF] ">Create Account</p>
              <p className="mt-1 text-lg text-[#FFFFFF] ">Fill in Your Information</p>
            </div>

          </div>

          {/* Form container */}
          <div className="relative z-20 bg-white sm:shadow-lg  lg:shadow-none  lg:mt-0 mt-[220px] pb-4  lg:rounded-none rounded-tl-[40px] rounded-tr-[40px] lg:px-10 lg:py-4 lg:pt-10">

            <div className="lg:hidden absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-2 ">
              <h1 className="text-4xl font-bold">LOGO</h1>
              <p className="mt-4 text-lg">Create Account</p>
              <p className="mt-1 text-sm">Fill in Your Information</p>
            </div>


            {/* lg elements  */}
            <div className="mb-8 hidden lg:block">
              <h3 className="text-[#4285F3] text-[40px] font-normal">LOGO</h3>
              <h4 className="text-[#152A16] text-[30px] font-semibold py-3">Sign In To Your Account</h4>
              <p className="text-[#5C635A]">
                Welcome Back! By clicking the sign-up button, you're agreeing to Zenitood Terms and Service and acknowledging the
                <span className="text-[#156BCA] font-semibold underline ml-1 whitespace-nowrap">Privacy and Policy</span>
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="px-2">
              <h3 className="text-[#1A2531] lg:hidden text-[28px] font-bold font-poppins text-center pt-8">
                Sign In
              </h3>

              <div>
                <label className="text-[#152A16] text-[15px] mb-2 block font-medium">Name</label>
                <div className="relative flex items-center">
                  <input
                    {...register("userName")}
                    name="userName"
                    type="text"
                    required
                    className="w-full text-sm text-gray-800 bg-gray-50 focus:bg-transparent px-4 py-3.5 rounded-md"
                    placeholder="@username"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="mt-4">
                <label className="text-[#152A16] text-[15px] mb-2 block font-medium">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email")}
                    name="email"
                    type="email"
                    required
                    className="w-full text-sm text-gray-800 bg-gray-50 focus:bg-transparent px-4 py-3.5 rounded-md"
                    placeholder="Enter email"
                  />
                  <CiMail className="w-[24px] h-[24px] absolute right-4 text-[#bbb]" />
                </div>
              </div>

              {/* Password field */}
              <div className="mt-4">
                <label className="text-gray-800 text-[15px] mb-2 block font-medium">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    {...register("password")}
                    required
                    className="w-full text-sm text-[#152A16] bg-gray-50 focus:bg-transparent px-4 py-3.5 rounded-md"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="absolute right-4 text-[#bbb]"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <IoEyeOffOutline size={24} />
                    ) : (
                      <IoEyeOutline size={24} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm password field */}
              <div className="mt-4">
                <label className="text-gray-800 text-[15px] mb-2 block font-medium">Confirm Password</label>
                <div className="relative flex items-center">
                  <input
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    {...register("confirmPassword", {
                      validate: value =>
                        value === password || "The passwords do not match"
                    })}
                    required
                    className="w-full text-sm text-[#152A16] bg-gray-50 focus:bg-transparent px-4 py-3.5 rounded-md"
                    placeholder="Re-Type password"
                  />
                  <button
                    type="button"
                    className="absolute right-4 text-[#bbb]"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <IoEyeOffOutline size={24} />
                    ) : (
                      <IoEyeOutline size={24} />
                    )}
                  </button>
                </div>
                {confirmPassword && (
                  confirmPassword !== password ? (
                    <p className="text-red-500 text-sm mt-1">The passwords do not match</p>
                  ) : (
                    <p className="text-green-500 text-sm mt-1">Passwords match</p>
                  )
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 border-gray-300 rounded-md" required />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="javascript:void(0);" className="text-[#156BCA] font-semibold text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" className="w-full lg:w-[271px] mx-auto flex items-center justify-center py-3 px-6 text-sm tracking-wide rounded-md text-white bg-[#156BCA] hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-1">
              <p className="text-md mt-4 text-center text-gray-800">Don't have an account?
                <Link to={'/login'}>
                  <span className="text-[#156BCA] font-semibold underline ml-1 whitespace-nowrap">Login here</span>
                </Link></p>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="relative lg:w-1/2 mx-auto pt-4 lg:h-[802px]  hidden lg:block bg-gray-50 md:rounded-tr-xl md:rounded-br-xl lg:px-10">
          <img
            src={Registerbanner}
            className="lg:h-[802px] max-h-[802px] rounded-2xl w-full object-cover mx-auto opacity-10 "  // Adjust opacity here
            alt="login-image"
          />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center  text-white">
            <div className=" bg-[#152A16] h-[143px]  w-[341px] flex flex-col items-center justify-center font-semibold rounded-xl  ">

              <p className="mt-1 text-[22px]  text-[#156BCA]">Create Account</p>
              <p className="mt-1 text-[22px] text-white ">Fill in Your Information</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
