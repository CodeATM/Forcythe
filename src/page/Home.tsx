import B2B from "../components/B2B";
import Blog from "../components/Blog";
import Cone from "../components/Cone";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Spark from "../components/Spark";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="md:mt-[5rem] mt-[4.5rem]">
        <Landing />
        <Testimonials />
        <Spark />
        <B2B />
        <Cone />
        <Blog />
        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
