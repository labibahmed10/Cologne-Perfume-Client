import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useBasicImage from "../CUSTOM_HOOK/useBasicImage";
import SocialSignIn from "../SocialSIgnIn/SocialSignIn";
import Spinner from "../Spinner/Spinner";

const LogIn = () => {
  const [basicImage] = useBasicImage();
  const matched = basicImage.find((item) => item?.name === "login-pic");
  const logo = basicImage.find((item) => item?.name === "brand-logo");

  // getting values of inputs
  const emailRef = useRef("");
  const passRef = useRef("");

  // firebase hooks for sign in and reset email..
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  // redirection
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmitSignIn = (e) => {
    e.preventDefault();

    // getting values of inputs
    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      toast.warning("Please Fill Up The Form", {
        autoClose: 2500,
      });
    } else {
      signInWithEmailAndPassword(email, password);
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="flex md:flex-row flex-col items-center md:h-[80vh] md:w-[90rem] w-full mx-auto justify-center px-6 mt-20">
      <div className="md:w-full">
        <div className="px-16 py-8 border bg-[#EEEEF0] text-[#3D3D3D]">
          <div>
            <img className="w-52 mx-auto py-5" src={logo?.image} alt="" />
          </div>
          {/* <h1 className="text-3xl font-semibold mb-10 mt-5">Log In as a Volunteer</h1> */}
          <form action="" onSubmit={handleSubmitSignIn}>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="font-semibold bg-transparent border-b border-[#9B5A43] w-full pt-4 pb-1 mb-4 focus:outline-none"
              name="email"
            />
            <input
              ref={passRef}
              type="password"
              placeholder="password"
              className="font-semibold bg-transparent border-b border-[#9B5A43] w-full pt-4 pb-1 mb-4 focus:outline-none"
              autoComplete="off"
            />

            {/* showed error here */}
            {/* {error && <p className="text-center text-red-500">{error?.message}</p>} */}

            <input
              type="submit"
              value="Login"
              className="w-full my-3 py-3 bg-[#9B5A43] text-lg font-semibold text-[aliceblue] cursor-pointer"
            />

            <p className="text-center md:text-xl mb-3">
              Don't have an account?{" "}
              <Link className="text-[#9B5A43] hover:underline underline-offset-1" to="/signup">
                Create an account
              </Link>
            </p>
            <p className="text-center md:text-xl  mb-2 text-gray-500">
              <button
                className="hover:underline underline-offset-1 hover:text-[#9B5A43]"
              >
                Forgot Your Password?
              </button>
            </p>
            <SocialSignIn></SocialSignIn>
          </form>
        </div>
      </div>

      <div className="w-full">
        <img className="md:h-[34rem]" src={matched?.image} alt="" />
      </div>
    </div>
  );
};

export default LogIn;
