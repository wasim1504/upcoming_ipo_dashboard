import React, { useState, useEffect } from "react";
import { upcomingIpos } from "../services/ipoData";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Dashboard = () => {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await upcomingIpos();
        setIpos(response); // Assuming the data is in the 'data' property of the response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!ipos.length) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner
          as="div"
          animation="border"
          size="lg"
          role="status"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <Container fluid>
      <h2 className="mb-4 justify-content-center align-items-center">
        Upcoming Ipo list 2024 📈
      </h2>

      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>COMPANY NAME</th>
            <th>FILED DATE</th>
            <th>OFFERING DATE</th>
            <th>PRICE HIGH</th>
            <th>PRICE LOW</th>
            <th>SHARES</th>
            <th>SYMBOLS</th>
            <th>VOLUME</th>
          </tr>
        </thead>
        <tbody>
          {ipos.map((item, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{item.companyName}</td>
              <td>{item.filedDate}</td>
              <td>{item.offeringDate}</td>
              <td>{item.priceRangeHigh}</td>
              <td>{item.priceRangeLow}</td>
              <td>{item.shares}</td>
              <td>{item.symbol}</td>
              <td>{item.volume}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
