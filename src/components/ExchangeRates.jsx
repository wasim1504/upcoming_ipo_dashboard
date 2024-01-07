import React, { useState, useEffect } from "react";
import { latestCurrencyRates } from "../services/ipoData";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const ExchangeRates = () => {
  const [rate, setRates] = useState([]);

  useEffect(() => {
    async function fetchRates() {
      try {
        const data = await latestCurrencyRates();
        setRates(data);
      } catch (err) {
        throw new Error(err);
      }
    }
    fetchRates();
  }, []);

  if (!rate.length) {
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

  const formatTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);

    const formattedDate = date.toLocaleString(); // Example: "7/14/2022, 10:30:00 AM"
    return formattedDate;
  };
  return (
    <Container fluid>
      <h2 className="mb-4 justify-content-center align-items-center">
        Latest Exchange Rate List 💹
      </h2>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>SYMBOL</th>
            <th>RATE</th>
            <th>LAST UPDATED</th>
          </tr>
        </thead>
        <tbody>
          {rate.map((item, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{item.symbol}</td>
              <td>{item.rate}</td>
              <td>{formatTimestampToDate(item.timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ExchangeRates;
