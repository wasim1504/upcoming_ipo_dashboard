// src/LoginForm.js
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

import "../index.css";

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email or password is incorrect");
      return;
    }
    login();
    console.log("Logged in successfully");
    setEmail("");
    setPassword("");
    toast.success("You are Successfully logged in😇");

    navigate("/dashboard");
  };

  return (
    <Container className="login-container">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h3>Log in to your account</h3>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-primary">
          Login
        </Button>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </Form>
    </Container>
  );
};

export default LoginForm;
