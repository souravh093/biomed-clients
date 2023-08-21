import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { getCandidateRole, getClientRole } from "../api/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clientRole, setClientRole] = useState(null);
  const [candidateRole, setCandidateRole] = useState(null);
  const [dashboardToggle, setDashboardToggle] = useState(false);
  const [jobsSidebarToggle, setJobsSidebarToggle] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleLoginUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      getClientRole(user?.email).then((data) => setClientRole(data));
    }
  });

  useEffect(() => {
    if (user) {
      getCandidateRole(user?.email).then((data) => setCandidateRole(data));
    }
  });

  const authInfo = {
    user,
    loading,
    clientRole,
    candidateRole,
    dashboardToggle,
    jobsSidebarToggle,
    setCandidateRole,
    setLoading,
    createUser,
    loginUser,
    updateUser,
    logoutUser,
    resetPassword,
    googleLoginUser,
    setDashboardToggle,
    setJobsSidebarToggle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
