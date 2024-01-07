import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../index.css";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Container className="container" style={{ marginTop: "60px" }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default AppLayout;
