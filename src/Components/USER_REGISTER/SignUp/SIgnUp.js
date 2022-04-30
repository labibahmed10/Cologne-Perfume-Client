import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useBasicImage from "../../CUSTOM_HOOK/useBasicImage";
import SocialSignIn from "../SocialSIgnIn/SocialSignIn";
import Spinner from "../../Spinner/Spinner";

const SIgnUp = () => {
  const [basicImage] = useBasicImage();
  const matched = basicImage.find((item) => item?.name === "signup-pic");
  const logo = basicImage.find((item) => item?.name === "brand-logo");

  // getting values of inputs
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const conPassRef = useRef("");

  // redirection
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });

  const handleSubmitSignUp = (e) => {
    e.preventDefault();

    // getting values of inputs
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const conPass = conPassRef.current.value;

    //condition applied here
    if (!name || !email || !password || !conPass) {
      return toast("Please Fill Up The Form", {
        autoClose: 2000,
      });
    }
    if (password !== conPass) {
      return toast.error("Password did not matched");
    } else {
      createUserWithEmailAndPassword(email, password);
    }

    //form reseting
    e.target.reset();
  };

  if (user) {
    return <Spinner></Spinner>;
  }

  if (user) {
    navigate("/");
  }

  return (
    <div className="flex md:flex-row flex-col items-center md:h-[80vh] md:w-[90rem] w-full mx-auto justify-center px-6 mt-20">
      <div className="w-full">
        <img className="md:h-[39.5rem]" src={matched?.image} alt="" />
      </div>
      <div className="md:w-full">
        <div className="px-16 py-8 border bg-[#EEEEF0] text-[#3D3D3D]">
          <div>
            <img className="w-52 mx-auto py-5" src={logo?.image} alt="" />
          </div>
          {/* <h1 className="text-3xl font-semibold mb-10 mt-5">Log In as a Volunteer</h1> */}
          <form action="" onSubmit={handleSubmitSignUp}>
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              className="font-semibold bg-transparent border-b border-[#9B5A43] w-full pt-4 pb-1 mb-4 focus:outline-none"
              name="name"
            />
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
            <input
              ref={conPassRef}
              type="password"
              placeholder="Confrim Password"
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

            <p className="text-center text-xl">
              Already have an account?{" "}
              <Link className="text-[#9B5A43] hover:underline  underline-offset-1" to="/login">
                Login
              </Link>
            </p>

            <SocialSignIn></SocialSignIn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
