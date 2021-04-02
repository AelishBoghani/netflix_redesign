import React, { useState } from "react";
import { auth } from "./firebase";
import "./SignInScreen.css";

function SignInScreen() {
  const [openSignIn, setOpenSignIn] = useState(false);
    const [username, setUsername] = useState("");
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  
  const signUp = (event) => {
    // This is to prevent the page from refreshing when we submit the form
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: email,
        });
      })
      .catch((error) => alert(error.message));

    // Set user so that footer changes accordingly

    // Close modal
    setOpen(false);
  };

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    // // Close modal
    setOpenSignIn(false);
  };
 
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button type='submit' onClick={signIn} >Sign In</button>
        <h4>
          {" "}
          <span className="signInScreen__gray">New to Netflix?</span>{" "}
          <span className="signInScreen__link" onClick={signUp}>
            {" "}
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
