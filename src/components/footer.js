import xenialogo from "../assets/images/CSI_Logo_blue.png";
import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../utils";

const Footer = () => {
  let location = useLocation();

  return (
    location.pathname !== '/' &&
    <div className="w-full p-4 py-8 md:p-16 bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-black backdrop-blur-lg">
      <div className="grid md:grid-cols-3">
        <div className="w-full">
          <img className="mx-auto" src={xenialogo} alt="Xenia-logo"></img>
        </div>
        <div className=" col-span-2 pt-4 px-4 py-4 md:p-16 bg-black/20 text-white text-sm md:text-base">
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 ">
            <div className="w-full space-y-4">
              <div className="font-bold pb-2 border-b border-gray-400 text-purple-400">
                PCSB Xenia
              </div>
              <div className=" font-thin">Bridging Imagination & Reality.</div>
            </div>
            <div className="w-full space-y-4">
              <div className="font-bold pb-2 border-b border-gray-400 text-purple-400">
                Events
              </div>
              <div className="space-y-2">
                <div className=" font-thin">
                  <Link onClick={scrollToTop} to="/events">
                    All Events
                  </Link>
                </div>
                <div className=" font-thin">
                  <Link onClick={scrollToTop} to="/profile">
                    Registered Events
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full space-y-4">
              <div className="font-bold pb-2 border-b border-gray-400 text-purple-400">
                Useful Links
              </div>
              <div className="space-y-2">
                <div className=" font-thin">
                  <Link onClick={scrollToTop} to="/auth">
                    Login
                  </Link>
                </div>
                <div className=" font-thin">
                  <Link onClick={scrollToTop} to="/contact-us">
                    Help
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full space-y-4">
              <div className="font-bold pb-2 border-b border-gray-400 text-purple-400">
                Contact
              </div>
              <div className="space-y-2">
                <div className=" font-thin flex space-x-2">
                  <div>🏠</div>
                  <a href="https://goo.gl/maps/XNZ8QTqTK2SXzztq7" rel="noreferrer noopener" target="_blank">Dhankawadi,Katraj,Pune</a>
                </div>
                <div className=" font-thin space-x-2 flex">
                  <div>📭︎</div>
                  <a href="mailto:samyakjain0510@gmail.com">samyakjain0510@gmail.com</a>
                </div>
                <div className=" font-thin space-x-2 flex">
                  <div>📞</div>
                  <a href="tel:9823780967"> +91 98237 80967 </a>
                </div>
              </div>
            </div>
          </div>
          <p className="inline mt-8">
            &copy; {new Date().getFullYear()} PICT CSI Student Branch. Designed
            & Developed with ♥ by{" "}
            <Link
              onClick={() => {
                document.documentElement.scrollTop = 0;
              }}
              to="/web-team"
              className="text-violet-400 hover:text-md hover:text-cyan-400"
            >
              PCSB Web Team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
