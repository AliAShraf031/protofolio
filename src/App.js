import "./App.css";
import About from "./components/Pages/About/About";
import Home from "./components/Home/Home";
import Header from "./components/common/Header/Header ";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Services from "./components/Pages/Services/Services";
import Protofolio from "./components/Pages/Protofolio/Protofolio";
import Testimonials from "./components/Pages/Testemonials/Testimonials";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route exact path="/about" Component={About}></Route>
            <Route exact path="/services" Component={Services}></Route>
            <Route exact path="/protofolio" Component={Protofolio}></Route>
            <Route exact path="/testimonials" Component={Testimonials}></Route>
            <Route exact path="/blog" Component={Blog}></Route>
            <Route exact path="/contact" Component={Contact}></Route>
          </Routes>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
