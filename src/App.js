// import PreLoader from './Components/preloader';
// import Loader from './Components/Loader';
// import Navbar from './Components/Navbar';
// import Homepage from './Pages/Home/Home';
import Footer from './Components/Footer';
// import Schedule from './Pages/Schedule/Schedule';
// import Events from './Pages/Events/Events';
// import EventDetails from './Components/EventDetails';
// import Auth from './Components/Login';  //missing component in src/component
// import Profile from './Pages/Profile/Profile';
// import Cart from './Components/Cart';
// import Sponsors from './Pages/Sponsers/Sponsers';
// import ContactUs from './Pages/AboutUs/AboutUs';
// import WebTeam from './Pages/WebTeam/WebTeam';
// import ErrorPage from './Pages/404/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//** Leave App.js untouched
//!!!Remove this commented code in App.js before the next commit, it creates merge conflicts
// import './App.css';

// import './App.css';



function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Homepage />} loader={<PreLoader />} /> */}
          {/* <Route path="/schedule" element={<Schedule />} loader={<Loader />} /> */}
          {/* <Route path="/events" element={<Events />} loader={<Loader />} /> */}
          {/* <Route path="/event-details" element={<EventDetails />} loader={<Loader />} /> */}
          {/* <Route path="/auth" element={<Auth />} loader={<Loader />}/> */}
          {/* <Route path="/profile" element={<Profile loader={<Loader />} />} /> */}
          {/* <Route path="/cart" element={<Cart loader={<Loader />} />} /> */}
          {/* <Route path="/sponsors"/>  */}
          {/* element={<Sponsors loader={<Loader />} />} /> */}
          {/* <Route path="/contact-us" element={<ContactUs loader={<Loader />} />} /> */}
          {/* <Route path="/web-team" element={<WebTeam loader={<Loader />} />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
