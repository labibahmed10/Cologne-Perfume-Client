import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, Guser, Gloading, Gerror] = useSignInWithGithub(auth);
  console.log(user);
  console.log(error);
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
