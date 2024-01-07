import React from "react";
import { Button } from "react-bootstrap";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    toast.success("You have been logged out successfully");
    navigate("/login");
  };

  return (
    <Button variant="dark" onClick={handleLogOut} className="icon-button">
      <IoLogOutOutline />
      Logout
    </Button>
  );
};

export default Logout;
