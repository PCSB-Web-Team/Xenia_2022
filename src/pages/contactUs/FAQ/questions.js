import React from "react";
// import { Accordion, Card } from "react-bootstrap";
// import "./questions.css";
const Question = ({ question, answer, sr }) => {
  return (
    <div>
      <div className="text-xl text-white ">{question}</div>
      <div className="text-xl text-white ">{answer}</div>
    </div>
  );
};

// #00b4d8

export default Question;
