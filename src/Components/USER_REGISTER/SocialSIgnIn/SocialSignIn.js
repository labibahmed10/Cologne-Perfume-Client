import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Spinner from "../../Spinner/Spinner";

const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, Guser, Gloading, Gerror] = useSignInWithGithub(auth);

  // if loading
  if (loading || Gloading) {
    return <Spinner></Spinner>;
  }

  //if user logged in succesfully
  if (user || Guser) {
    toast.success(`Log In Succesfull 😃 ${user?.user?.displayName ? user?.user?.displayName : ""}`, {
      position: "top-center",
      autoClose: 2000,
    });
  }

  //if there any error occurs
  if (error || Gerror) {
    toast(`${error?.message || Gerror?.message}`, {
      autoClose: 2100,
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between my-5">
        <hr className="w-full" />
        <p className="px-3">OR</p>
        <hr className="w-full" />
      </div>

      <div className="flex items-center justify-center space-x-5 mb-4">
        <div onClick={() => signInWithGoogle()}>
          <img
            className="w-12 cursor-pointer"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt=""
          />
        </div>
        <div onClick={() => signInWithGithub()}>
          <img
            className="w-12 cursor-pointer"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SocialSignIn;
