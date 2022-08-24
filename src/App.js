import Loader from "./components/loader";
// import Home2 from "./pages/home2/home2";
// import Home3 from "./pages/home3/home3";
import Home4 from "./pages/home4/home4";
import Navbar from "./components/Navbarnew";
// import Homepage from "./pages/home/home";
import Auth from "./pages/auth/auth";
import Footer from "./components/footer";
// import ContactPanel from "./components/contactPanel";
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
// import ProtectedRoute from "./routes/protectedRoute";
import toast, { ToastUtils } from "./utils/toastifyContainer";
import { AuthVerify } from "./utils/authVerify";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Background from "./components/background";
import IndustryTalkDetail from "./pages/industryTalks/industryTalksDetail/industryTalkDetail";
// import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      setLoading(true);
      await AuthVerify({ getUserDetails: true }).then(() => {
        setLoading(false);
        // if (res.error) toast.warn("Session expired!")
      }).catch(error => {
        toast.error("Error: " + error.message);
        setLoading(false)
      });
    }
    fetchToken();
  }, []);

  return (
    <>
      {/* <AnimatedCursor
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
        trailingSpeed={4}
        hasBlendMode={true}
        innerStyle={{
          zIndex: "999999999999"
        }}
        outerStyle={{
          zIndex: "999999999999",
          animation: 'rotate 2.2s infinite ease-in-out',
          border: '2px dashed #009ffd'
        }} /> */}
      <ToastUtils />
      <Background></Background>
      {loading ? <Loader></Loader> :
        <>
          <Navbar toast={{ container: <ToastUtils />, toast }} />
          <Routes>
            {/* <Route path="/" element={<Homepage loader={<PreLoader />} />} />
          <Route path="/home2" element={<Home2 loader={<Loader />} />} /> */}
            {/* <Route path="/" element={<Home3 loader={<Loader />} />} /> */}
            <Route path="/" element={<Home4 loader={<Loader />} />} />
            <Route path="/auth" element={<Auth loader={<Loader />} toast={{ container: <ToastUtils />, toast }} />} />
            <Route
              path="/schedule"
              element={<Schedule loader={<Loader />} />}
            />
            <Route path="/events" element={<Events loader={<Loader />} toast={{ container: <ToastUtils />, toast }} />} />
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
              element={<EventDetails loader={<Loader />} toast={{ container: <ToastUtils />, toast }} />}
            />
            <Route path="/profile" element={
              // <ProtectedRoute toast={{ container: <ToastUtils />, toast }}>
              <Profile loader={<Loader />} toast={{ container: <ToastUtils />, toast }} />
              // </ProtectedRoute>
            } />
            {/* <Route path="/cart" element={<Cart loader={<Loader />} />} /> */}
            < Route
              path="/sponsors"
              element={<Sponsors loader={<Loader />} />}
            />
            <Route
              path="/contact-us"
              element={<ContactUs loader={<Loader />} toast={{ container: <ToastUtils />, toast }} />}
            />
            <Route path="/web-team" element={<WebTeam loader={<Loader />} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      }
      <Sidebar />
      {/* <ContactPanel /> */}
    </>
  );
}

export default App;
