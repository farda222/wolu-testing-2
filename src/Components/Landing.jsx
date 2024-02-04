import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Herosection";
import Footer from '../Components/Footer'
const Landing = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="mt-36 overflow-x-hidden overflow-y-hidden">
        <HeroSection />
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
};
export default Landing;
