// src/LoginForm.js
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../index.css";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(name && email && password)) return;
    console.log("Registration Successful, Please Login to continue");
    setEmail("");
    setName("");
    setPassword("");
    toast.success("Registration Successful 😇. Please Login to continue");

    navigate("/login");
  };

  return (
    <Container className="login-container">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h3>Create your account</h3>

        <Form.Group controlId="formBasicName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </Form.Group>

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
          Signup
        </Button>
        <p>
          Already a user? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignupForm;
