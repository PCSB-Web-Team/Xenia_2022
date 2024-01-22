import "./contactUs.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Requests from "../../api/requests";
// import FAQ from './FAQ/faq';

const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    console.log(e);
    const data = { name, phone, email, message };
    await Requests.sendContactUsMessage(data).then((response) => {
        if (response.data.success) {
          props.toast.toast.success("Mail send to PCSB Xenia Team!")
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        props.toast.toast.error("Error: server error ", error);
      });
  };

  const faq = [
    {
      questions: "What is Xenia?",
      answer:
        "Xenia is an annual festival organised by PICT CSI Student Branch.",
    },
    {
      questions: "Does Xenia consists of only technical events?",
      answer:
        "No, Xenia consists of technical as well as non-technical events.",
    },
    {
      questions: "Is the festival going to be conducted in the college?",
      answer: "Yes, the festival is going to be conduted in the college.",
    },
    {
      questions: "Are the events only for individual participation?",
      answer:
        "Not exactly, some events have strictly individual participation while others have team participation. Kindly confirm the type of participation on the website.",
    },
  ];

  return (
    <div>
      <div className="contactUs mb-4   mt-20">
        <div className="contactForm mb-4  ">
          <h1 className="text-4xl font-mono font-bold ">Send us a message</h1>
          <form onSubmit={Submit} id="contactUsForm">
            <input
              type="text"
              placeholder="Your Name"
              id="nameInputId"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contactFill"
              required={true}
            ></input>
            <input
              type="email"
              placeholder="Email"
              id="emailInputId"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contactFill"
              required={true}
            ></input>
            <input
              type="number"
              min="7000000000"
              max="9999999999"
              placeholder="Phone"
              id="phoneInputId"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="contactFill"
            ></input>
            <textarea
              placeholder="Message"
              id="messageInputId"
              className="contactFill"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-cyan-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="contactInfo mb-2 mt-8">
          <h1 className="text-2xl font-mono font-bold">Contact info</h1>
          <div className="address">
            <h3 className="text-xl font-semibold">Where to find us</h3>
            <p>Survey no. 27, </p>
            <p>Near Trimurti Chowk,</p>
            <p>Bharati Vidyapeeth Campus,</p>
            <p>Dhankawadi, </p>
            <p>Pune-411043</p>
          </div>
          <div className="phoneAndMail">
            <p className="display: inline-block">
              <i className="fa fa-phone text-left text-lg">
                {" "}
                <a className="text-lg" href="tel:9823780967"> +91 98237 80967 </a>{" "}
              </i>
            </p>
            <br></br>
            <p className="display: inline-block">
              <i className="fa fa-envelope text-left text-lg">
                <a style={{ marginLeft: "5px" }} className="text-lg" href="mailto:samyakjain0510@gmail.com">
                  samyakjain0510@gmail.com
                </a>
              </i>{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <section class="text-gray-700">
          <div class="container px-5 pt-24 mx-auto">
            <div class="text-center mb-10">
              <h1 class="sm:text-5xl text-4xl font-bold text-center font-mono text-white mb-2">
                Frequently Asked Questions
              </h1>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-xl justify-center">
              {faq.map((member, i) => (
                <div
                  class="w-full lg:w-1/2 px-4 py-2 backdrop-blur-md text-sm"
                  key={`member${i}`}
                >
                  <details class="mb-4  bg-black/20 rounded-md py-2 px-4 grid grid-cols-2 gap-3 tracking-widest">
                    <summary class=" text-blue-200">{member.questions}</summary>
                    <span className=" text-gray-200 font-light">
                      {member.answer}
                    </span>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
