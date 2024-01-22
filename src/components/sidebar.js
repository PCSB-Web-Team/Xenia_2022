import "./sidebar.css";
import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CSILogo from "../assets/images/csi.png";

const Sidebar = () => {
  return (
    <div className="fixed invisible md:visible top-0 left-0 w-[50px] h-screen flex items-center justify-center z-10">
      <div className="w-full space-y-4 bg-black/20 backdrop-blur-xl h-auto p-2">
        {socialMediaData.map((media) => {
          return (
            <div>
              <a href={media.link} target="" className="w-full">
                {media.logo}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const socialMediaData = [
  {
    logo: <img src={CSILogo} alt="" />,
    link: "https://www.pictcsi.com/",
  },
  {
    logo: <i className="fa fa-facebook" />,
    link: "http://www.facebook.com/csipict",
  },
  {
    logo: <i className="fa fa-instagram" />,
    link: "http://www.instagram.com/csipict",
  },
  {
    logo: <i className="fa fa-linkedin" />,
    link: "http://www.linkedin.com/company/pict-csi",
  },
  {
    logo: <i className="fa fa-youtube" />,
    link: "https://www.youtube.com/channel/UC_lcyqJpGxd7XWBMrcbpgpw/featured",
  },
];

export default Sidebar;
