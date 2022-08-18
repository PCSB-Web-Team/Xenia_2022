import PreLoader from "./components/preloader";
import Loader from "./components/loader";
import Home2 from "./pages/home2/home2";
// import PageBackground from "./components/pageBackground";
// import PageBackground from "./components/pageBackgroundNew";
// import PageBackground from "./components/pageBackgroundNewNew";
import PageBackground from "./components/pageBackgroundNewNewNew";

// import Navbar from "./components/navbar";
import Navbarnew from "./components/Navbarnew";
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
// import Cart from './pages/cart/cart';  //! Contains jquery, won't work
import ContactUs from "./pages/contactUs/contactUs";
import Sponsors from "./pages/sponsors/sponsors";
// import WebTeam from './pages/webTeam/webTeam';
import ErrorPage from "./pages/404/Error";
import { AuthVerify } from "./utils/authVerify";
import ProtectedRoute from "./routes/protectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Background from "./components/background";
import IndustryTalkDetail from "./pages/industryTalks/industryTalksDetail/industryTalkDetail";
import "./App.css";

function App() {
  const userState = useSelector(({ user }) => user);
  useEffect(() => {
    // const preloader = document.getElementById("preloader")
    async function fetchToken() {
      // preloader.style.display = "none";
      await AuthVerify({ getCall: false });
      // preloader.style.display = "unset"; //reset to default browser's stylesheet
    }
    fetchToken();
    // setTimeout(() => {
    // preloader.style.display = "none";
    // }, 3000)
  }, []);

  return (
    <div>
      <BrowserRouter>
        {/* <Background></Background> */}
        {/* <Navbar /> */}
        <Navbarnew />
        <Sidebar />
        <ContactPanel />
        <Routes>
          <Route
            path="/"
            element={
              <PageBackground>
                <Homepage loader={<PreLoader />} />
              </PageBackground>
            }
          />
          <Route path="/home2" element={<Home2 loader={<Loader />} />} />
          <Route path="/auth" element={<Auth loader={<Loader />} />} />
          <Route path="/schedule" element={<Schedule loader={<Loader />} />} />
          <Route path="/events" element={<Events loader={<Loader />} />} />
          <Route
            path="/side-events"
            element={<SideEvents loader={<Loader />} />}
          />
          <Route
            path="/industry-talks"
            element={
              <PageBackground>
                <IndustryTalks loader={<Loader />} />
              </PageBackground>
            }
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
          <Route path="/sponsors" element={<Sponsors loader={<Loader />} />} />
          <Route
            path="/contact-us"
            element={<ContactUs loader={<Loader />} />}
          />
          {/* <Route path="/web-team" element={<WebTeam loader={<Loader />} />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
