import About from "../Pages/About/About";
import Counter from "../Pages/Counter/Counter";
import Landing from "../Pages/Landing/Landing";
import Services from "../Pages/Services/Services";
import Protofolio from "../Pages/Protofolio/Protofolio";
import Testimonials from "../Pages/Testemonials/Testimonials";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Footer from "../common/Footer/Footer";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Services />
      <Counter />
      <Protofolio />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
