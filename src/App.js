import PreLoader from "./components/preloader";
import Loader from "./components/loader";
import Home2 from "./pages/home2/home2";
import Home3 from "./pages/home3/home3";
import Home4 from "./pages/home4/home4";
import Navbar from "./components/Navbarnew";
import Homepage from "./pages/home/home";
import Auth from "./pages/auth/auth";
import Footer from "./components/footer";
import ContactPanel from "./components/contactPanel";
import Sidebar from "./components/sidebar";
import Schedule from "./pages/schedule/schedule";
import Events from "./pages/events/events";
import IndustryTalks from "./pages/industryTalks/industryTalks";
import Profile from "./pages/profile/profile";
import SideEvents from "./pages/sideEvents/sideEvents";
import EventDetails from "./pages/eventDetails/eventDetails";
import ContactUs from "./pages/contactUs/contactUs";
import Sponsors from "./pages/sponsors/sponsors";
import WebTeam from "./pages/webTeam/webTeam";
import ErrorPage from "./pages/404/Error";
import { AuthVerify } from "./utils/authVerify";
import ProtectedRoute from "./routes/protectedRoute";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Background from "./components/background";
import IndustryTalkDetail from "./pages/industryTalks/industryTalksDetail/industryTalkDetail";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // const preloader = document.getElementById("preloader")
    async function fetchToken() {
      // preloader.style.display = "none";
      await AuthVerify({ getUserDetails: true }).then(() => {
        setLoading(false);
      });
      // preloader.style.display = "unset"; //reset to default browser's stylesheet
    }
    fetchToken();
    // setTimeout(() => {
    // preloader.style.display = "none";
    // }, 3000)
  }, []);

  return (
    <div>
        <AnimatedCursor
          color="4, 192, 250"
          outerAlpha={0}
          innerSize={10}
          outerSize={22}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
          hasBlendMode={true}
          outerStyle={{
            animation: 'rotate 2.2s infinite ease-in-out',
            border: '2px dashed #009ffd'
          }} />
        <Background></Background>
        <Navbar />
        {loading ? (
          <Loader></Loader>
        ) : (
          <Routes>
            {/* <Route path="/" element={<Homepage loader={<PreLoader />} />} />
          <Route path="/home2" element={<Home2 loader={<Loader />} />} /> */}
            <Route path="/" element={<Home3 loader={<Loader />} />} />
            <Route path="/home4" element={<Home4 loader={<Loader />} />} />
            <Route path="/auth" element={<Auth loader={<Loader />} />} />
            <Route
              path="/schedule"
              element={<Schedule loader={<Loader />} />}
            />
            <Route path="/events" element={<Events loader={<Loader />} />} />
            <Route
              path="/side-events"
              element={<SideEvents loader={<Loader />} />}
            />
            <Route
              path="/industry-talks"
              element={<IndustryTalks loader={<Loader />} />}
            />
            <Route
              path="/industry-talks/:id"
              element={<IndustryTalkDetail />}
              loader={<Loader />}
            />
            <Route
              path="/events/:id"
              element={<EventDetails loader={<Loader />} />}
            />
            <Route path="/profile" element={<Profile loader={<Loader />} />} />
            {/* <Route path="/cart" element={<Cart loader={<Loader />} />} /> */}
            <Route
              path="/sponsors"
              element={<Sponsors loader={<Loader />} />}
            />
            <Route
              path="/contact-us"
              element={<ContactUs loader={<Loader />} />}
            />
            <Route path="/web-team" element={<WebTeam loader={<Loader />} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
        <Footer />
        <Sidebar />
        <ContactPanel />
    </div>
  );
}

export default App;
