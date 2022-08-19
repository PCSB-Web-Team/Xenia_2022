import "./contactPanel.css";
import { Link } from "react-router-dom";

const ContactPanel = () => {
  return (
    <div className="fixed invisible md:visible right-0 top-0 w-[50px] flex items-center justify-center h-screen z-50">
      <div className="bg-black/40 backdrop-blur-lg hover:bg-gray-800 transition ease-in-out cursor-pointer rounded-full flex flex-col w-full text-cyan-400 justify-center items-center py-4">
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
