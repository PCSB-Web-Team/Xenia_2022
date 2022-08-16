import "./contactPanel.css";
import { Link } from "react-router-dom";

const ContactPanel = () => {
  return (
    <div className="contact-panel">
      <div className="contact-panel-inner">
        <Link to="/contact-us">
          <div>C</div>
          <div>O</div>
          <div>N</div>
          <div>T</div>
          <div>A</div>
          <div>C</div>
          <div>T</div>
          <br></br>
          <div>U</div>
          <div>S</div>
        </Link>
      </div>
    </div>
  );
};

export default ContactPanel;
