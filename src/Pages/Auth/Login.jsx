import { useState } from "react";
// react icons
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import { SiFacebook } from "react-icons/si";

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { signin } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    console.log(data);

    signin(email, password)
      .then((res) => {
        toast.success('Login Successfully!')
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast("Invalid Email or Password!");
      });
  };




  return (
    <div>
      <div className="font-poppins relative min-h-screen ">
        <div className="lg:flex items-center  h-full relative ">


          {/* Form section */}
          <div className="lg:w-1/2 w-full pt-4 lg:pt-0 relative  lg:h-[802px]  ">
            {/* Background image for small devices */}
            <div className="lg:hidden absolute inset-0 z-0">
              <img src="https://i.ibb.co/MZzqXxX/banner1.jpg" className="w-full h-full object-cover" alt="background" />
            </div>

            {/* Logo and text over the image */}
            <div className=" flex justify-center mt-10 lg:mt-0 ">
              <div className="lg:hidden absolute  ">
                <p className="text-4xl font-bold text-[#4285F3]  text-center ">LOGO</p>
                <p className="mt-4 text-lg text-center text-[#FFFFFF] ">Sign In to view all the </p>
                <p className="mt-1 text-lg text-[#FFFFFF] ">massage therapists</p>
              </div>

            </div>

            {/* Form container */}
            <div className="relative z-20 bg-white sm:shadow-lg  lg:shadow-none  lg:mt-0 mt-[220px] pb-4  lg:rounded-none rounded-tl-[40px] rounded-tr-[40px] lg:px-10 lg:py-4">


              {/* lg elements  */}

              <div className="mb-8">
                <h3 className="text-[#4285F3] text-[40px] font-normal lg:block hidden ">LOGO</h3>
                <h4 className=' text-[#152A16] lg:text-[30px] text-[24px] text-center lg:text-left px-2 font-semibold py-3  pt-10 lg:pt-2 lg:mt-0'>Log In To Your Account</h4>
                <p className=" text-[14px] lg:text-[16px]  text-center lg:text-left  text-[#5C635A] px-1  ">Welcome Back! Select a method to log in:</p>

              </div>

              {/* social login buttton */}
              <div className='flex items-center 2xl:gap-4 lg:gap-2 gap-2 px-1 '>
                <button type="button" className="w-full  flex items-center justify-center 2xl:gap-2 lg:gap-2 gap-1 py-3 2xl:px-6 lg:px-2 text-[16px]  font-normal tracking-wide text-gray-800 border border-gray-300 rounded-md bg-[#E4E4E4]  ">
                  <FcGoogle size={20} />
                  google
                </button>
                <button type="button" className="w-full flex items-center justify-center 2xl:gap-2 lg:gap-2 py-3 gap-1 2xl:px-6 lg:px-2 text-[16px]  font-normal tracking-wide text-[#ffffff] border border-gray-300 rounded-md bg-[#298FFF] ">
                  <SiFacebook size={20} />
                  facebook
                </button>

              </div>

              {/* divider */}

              <div className="my-4 flex items-center gap-3">
                <hr className="flex-1 border-gray-300" />
                <p className=" text-[#5C635A] text-[14px] font-normal text-center">Or Continue with Email</p>
                <hr className="flex-1 border-gray-300" />
              </div>


              <form onSubmit={handleSubmit(onSubmit)} className="px-2">

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
              <div className="mt-1 px-0.5">
                <p className="text-md mt-4 text-center text-gray-800">Don't have an account?
                  <Link to={'/register'}>
                    <span className="text-[#156BCA] font-semibold underline ml-1 whitespace-nowrap">Register here</span>
                  </Link></p>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="lg:w-1/2 mx-auto  pt-4 lg:h-[802px] hidden lg:block  bg-white md:rounded-tr-xl md:rounded-br-xl lg:px-10">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:w-[70%] w-full h-full object-contain block mx-auto"
              alt="login-image"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
