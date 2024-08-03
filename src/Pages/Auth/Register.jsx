import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { createUser ,handleUpdateProfile } = useAuth();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.userName;
    console.log(data);

    createUser(email, password)
      .then(res => {
        console.log(res);
        handleUpdateProfile(name)
          .then(() => {
            toast.success('User created successfully',)
            navigate('/')
          })

      })
      .catch(error => {
        console.error(error);
        toast.error('please cheack your email or password ')
      })
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div>
      <div className="font-[sans-serif]">
        <div className="flex items-center gap-4 h-full">
          <div className="lg:w-1/2 mx-auto lg:h-[802px] bg-[#000842] md:rounded-tr-xl md:rounded-br-xl p-8">
            <img src="https://readymadeui.com/signin-image.webp" className="lg:w-[70%] w-full h-full object-contain block mx-auto" alt="login-image" />
          </div>

          <div className="lg:w-1/2 p-6">
            <div className="mb-8">
              <h3 className="text-[#4285F3] text-[40px] font-normal">LOGO</h3>
              <h4 className="text-[#152A16] text-[30px] font-semibold py-3">Sign In To Your Account</h4>
              <p className="text-[#5C635A]">Welcome Back! By clicking the sign up button, you're agreeing to Zenitood Terms and Service and acknowledging the <span className="text-[#156BCA] font-semibold underline ml-1 whitespace-nowrap">Privacy and Policy</span></p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
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

              {/* email field */}
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

              {/* password field */}
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

              {/* confirm password field */}
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
                <button type="submit" className="w-[271px] mx-auto flex items-center justify-center py-3 px-6 text-sm tracking-wide rounded-md text-white bg-[#156BCA] hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-1">
              <p className="text-md mt-4 text-center text-gray-800">Don't have an account? <Link to={'/login'}>
                <span className="text-[#156BCA] font-semibold underline ml-1 whitespace-nowrap">Login here</span>
              </Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
