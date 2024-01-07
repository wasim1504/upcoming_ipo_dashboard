import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

function PageNotFound() {
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1);
  };

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <div className="bg-light border rounded p-5">
        <h2 className="mb-4">
          The page you are looking for could not be found 😢
        </h2>
        <Button variant="primary" size="lg" onClick={moveBack}>
          &larr; Go back
        </Button>
      </div>
    </Container>
  );
}

export default PageNotFound;
