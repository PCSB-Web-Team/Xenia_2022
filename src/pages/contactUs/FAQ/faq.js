import React from "react";
import Question from "./questions";
import "./faq.css";
// import { Accordion } from "react-bootstrap";

const FAQ = () => {
  let queBank = [
    {
      question: "What is Xenia?",
      answer:
        "Xenia is an annual festival organised by PICT CSI Student Branch",
      sr: "0",
    },
    {
      question: "Does Xenia have only technical events?",
      answer:
        "No, Xenia consists of technical as well as non-technical events.",
      sr: "1",
    },
    {
      question: "Is the festival going to be conducted in the college?",
      answer:
        "No, considering the current situation Xenia is going to be an online event.",
      sr: "2",
    },
    {
      question: "Are the events only for individual participation?",
      answer:
        "Not exactly, some events have strictly individual participation while others have team participation. Kindly confirm the type of participation on the website.",
      sr: "4",
    },
  ];

  let list = queBank.map((que) => {
    return (
      <Question
        key={que.sr}
        question={que.question}
        answer={que.answer}
        sr={que.sr}
      />
    );
  });

  return (
    <div className="FAQ-container bg-transparent text-white text-center">
      <div>
        <h2 className="FAQ mt-4 mb-3">Frequently Asked Questions</h2> {list}
      </div>
    </div>
  );
};

export default FAQ;
