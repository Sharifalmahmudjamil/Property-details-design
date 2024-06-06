import Amenities from "../Amenities/Amenities";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OtherProperty from "../OtherProperty/OtherProperty";
import OtherServices from "../OtherServices/OtherServices";
import OverView from "../OverView/OverView";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <OverView></OverView>
      <Amenities></Amenities>
      <OtherServices></OtherServices>
      <OtherProperty></OtherProperty>
      <Footer></Footer>
    </div>
  );
};

export default Home;
