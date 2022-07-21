import React from "react";
import ProfileComponent from "../../Components/ProfileComponent";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileUser = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.token == null) return <Navigate to="/userLogin" />;
  return <ProfileComponent></ProfileComponent>;
};

export default ProfileUser;
