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


const AuthProvider = ({ children }) => {
  
const googleProvider = new GoogleAuthProvider();
  // total user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // login with google
  const handleloginWithGoogle = () => {
    
    signInWithPopup(auth, googleProvider).then(result => {
      console.log(result.user)
    }).catch(error => {
      console.log(error);
})

    
    

  }









  // create user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result);
      setLoading(true);
    });
  };

  const updateUserProfile = (profile) => {
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
      // alert("signout succesfully")
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
  };

  return (
    <div>
      <AuthContext value={data}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
