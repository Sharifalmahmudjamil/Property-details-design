import Amenities from "../Amenities/Amenities";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import OverView from "../OverView/OverView";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <OverView></OverView>
      <Amenities></Amenities>
    </div>
  );
};

export default Home;
