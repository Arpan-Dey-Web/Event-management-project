import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  // total user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");

  
  

  // login with google
  const handleloginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  const signOutUser = () => {
    signOut(auth).then(() => {
      Swal.fire({
        title: "Oops!!! Logged out!",
        icon: "success",
        draggable: true,
      });
    });
  };

  // authData
  const data = {
    createUser,
    signInUser,
    signOutUser,
    user,
    setUser,
    loading,
    setLoading,
    updateUserProfile,
    handleloginWithGoogle,
    loginEmail,
    setLoginEmail,
  };

  return (
    <div>
      <AuthContext value={data}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
