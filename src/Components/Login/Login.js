import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

function LogedIn() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    userName: "",
    email: "",
    password: "",
    photo: "",
  });

  // privet rout set
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleSignInGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const isSignedUser = {
          isSignedIn: true,
         userName: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(isSignedUser);
        setLoggedInUser(isSignedUser);
        history.replace(from);
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
  };

  const handleSignOutGoogle = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const userSignOut = {
          isSignedIn: false,
         userName: "",
          email: "",
          photo: "",
          error: "",
          success: false,
        };
        setUser(userSignOut);
      });
  };
  // from submit section
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserInfo(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log("email signIn: ", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    let isFeildValid = true;
    if (e.target.name === "email") {
      isFeildValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const passwordValidation = e.target.value.length > 6;
      const passwordHashNumber = /\d{1}/.test(e.target.value);
      isFeildValid = passwordValidation && passwordHashNumber;
    }
    // eita ektu confusion
    if (isFeildValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  // user info update method
  const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user info update succesfuly");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // facebook sign in authentication
  const handleSignInFacebook = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const isSignedUser = {
          isSignedIn: true,
         userName: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(isSignedUser);
        setLoggedInUser(isSignedUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // facebook sign out auth
  const handleSignOutFacebook = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      const userSignOut = {
        isSignedIn: false,
       userName: "",
        email: "",
        photo: "",
        error: "",
        success: false,
      };
      setUser(userSignOut);
    })
    .catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className="App">
       {/* sign up registration form */}
      <h2 className="text-info"> <u>Please { newUser ? 'Sign-up': 'Log-in'}</u></h2>
      <div className="d-flex container">
      <div>
      <form onSubmit={handleSubmit}>
        {newUser && (
          <input className="input-feild"
            onBlur={handleOnBlur}
            type="text"
            name="name"
            placeholder="Your name"
          />
        )}
        <br />
        <input className="input-feild"
          onBlur={handleOnBlur}
          type="text"
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <br />
        <input className="input-feild"
          onBlur={handleOnBlur}
          type="password"
          name="password"
          placeholder="Enter Your Password"
          required
        />
        <br />
        <input type="submit" value={newUser ? "Sign up" : "Sign in"}
         className="social-icon mt-2" style={{backgroundColor:'tomato'}} />
         <br />
        <input
        onChange={() => setNewUser(!newUser)}
        type="checkbox"
        name="newUser"
        id="chackbox-id"
      />
      <label htmlFor="chackbox-id">New user Sign Up</label>
      </form>
      <p style={{ color: "red" }}>{user.error}</p>
      {user.success && (
        <p style={{ color: "green" }}>
          user {newUser ? "Created" : "Log in"} succesfully
        </p>
      )}

       {/* Google sign in and sign out button  */}
      {user.isSignedIn ? (
        <button onClick={handleSignOutGoogle} className="social-icon mt-2">
         <a className="social google">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
          Sign Out Google</button>
      ) : (
        <button onClick={handleSignInGoogle} className="social-icon mt-2">
          <a className="social google">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
          Sign In Google</button>
      )}{" "}
      <br />

       {/* facebook button and icon */}
      {user.isSignedIn ? (
        <button onClick={handleSignOutFacebook} className="social-icon mt-2">
          <a className="social facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          Sign Out Facebook</button>
      ) : (
        <button onClick={handleSignInFacebook} className="social-icon mt-2">
          <a className="social facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          Sign In Facebook</button>
      )}{" "}
    </div>
    </div>
    </div>
  );
}

export default LogedIn;
