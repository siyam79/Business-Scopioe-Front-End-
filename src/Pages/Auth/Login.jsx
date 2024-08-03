import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
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
      <div className="font-[sans-serif]">
        <div className=" flex items-center gap-4 h-full">
          <div className=" lg:w-1/2 mx-auto  lg:h-[802px] bg-[#000842] md:rounded-tr-xl md:rounded-br-xl p-8">
            <img src="https://readymadeui.com/signin-image.webp" className="lg:w-[70%] w-full h-full object-contain block mx-auto" alt="login-image" />
          </div>

          <div className="lg:w-1/2 p-6">

            <div className="mb-8">
              <h3 className="text-[#4285F3] text-[40px] font-normal">LOGO</h3>
              <h4 className=' text-[#152A16] text-[30px] font-semibold py-3'>Log In To Your Account</h4>
              <p>Welcome Back! Select a method to log in:</p>

            </div>

            {/* social login buttton */}
            <div className='flex items-center 2xl:gap-6 lg:gap-3'>
              <button type="button" className="w-full flex items-center justify-center 2xl:gap-4 lg:gap-2 py-3 2xl:px-6 lg:px-2 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                  <path fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00" />
                  <path fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58" />
                  <path fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52" />
                  <path fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6" />
                  <path fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48" />
                  <path fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132" />
                </svg>
                Continue with google
              </button>
              <button type="button" className="w-full flex items-center justify-center 2xl:gap-4 lg:gap-2 py-3 2xl:px-6 lg:px-2 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50  ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                  <path fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00" />
                  <path fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58" />
                  <path fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52" />
                  <path fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6" />
                  <path fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48" />
                  <path fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132" />
                </svg>
                Continue with facebook
              </button>

            </div>

            {/* divider */}

            <div className="my-4 flex items-center gap-3">
              <hr className="flex-1 border-gray-300" />
              <p className=" text-[#5C635A] text-[14px] font-normal text-center">Or Continue with Email</p>
              <hr className="flex-1 border-gray-300" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* email feild  */}
              <div>
                <label className="text-[#152A16] text-[15px] mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email")}
                    name="email"
                    type="email"
                    required
                    className="w-full text-sm text-gray-800 bg-gray-50 focus:bg-transparent px-4 py-3.5 rounded-md"
                    placeholder="Enter email"
                  />
                  <CiMail  className="w-[24px] h-[24px] absolute right-4 text-[#bbb]" />
                </div>
              </div>


              {/* password feild */}
              <div className="mt-4">
                <label className="text-gray-800 text-[15px] mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    {...register("password")}
                    required
                    className="w-full text-sm text-[#152A16] bg-gray-50 focus:bg-transparent px-4 py-3.5 rounded-md "
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="absolute right-4 text-[#bbb] "
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
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600  border-gray-300 rounded-md" required />
                  <label for="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="jajvascript:void(0);" className="text-[#156BCA] font-semibold text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" className="w-[271px] mx-auto flex items-center justify-center py-3 px-6 text-sm tracking-wide rounded-md text-white bg-[#156BCA] hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-1">
              <p className="text-md mt-4 text-center text-gray-800">Don't have an account <Link
                to={'/register'}>
                <span className="text-[#156BCA] font-semibold underline ml-1 whitespace-nowrap">Register here </span>
              </Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
