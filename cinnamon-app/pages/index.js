import NavBar from "../Components/Layout/NavBar";
import Hero from "../Components/UI/Hero";
import Product from "../Components/UI/Product";
import ServiceInfo from "../Components/UI/ServiceInfo";
import Team from "../Components/UI/Team";
import Communication from "../Components/UI/Communicarion";
import Marketing from "../Components/UI/Marketing";
import College from "../Components/UI/College";
import Position from "../Components/UI/Position";
import OfficeInfo from "../Components/UI/OfficeInfo";
import Blog from "../Components/UI/Blog";
import Contact from "../Components/UI/Contact";
import Footer from "../Components/Layout/Footer";
import PositionInfo from "../Components/Card.js/PositionInfo";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Product />
      <ServiceInfo />
      <Team />
      <Communication />
      <Marketing />
      <College />
      <Position />
      <OfficeInfo />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
export default HomePage;
