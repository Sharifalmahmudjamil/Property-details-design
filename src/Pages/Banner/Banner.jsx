import { IoLocationOutline } from "react-icons/io5";
import pic1 from "../../../Image/pic1.jpg";
import Ellipse1 from "../../../Image/Ellipse 7.jpg";
import small1 from "../../../Image/smallpic1.jpg";
import small2 from "../../../Image/smallpic2.jpg";
const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex lg:gap-36 mt-12">
        <div className="">
          <h1 className="text-xl font-semibold text-[#010101]">
            3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
          </h1>
          <p className="text-lg font-normal text-[#606060] flex gap-2">
            <IoLocationOutline className="mt-1 text-[#EE6611]" />
            Meadowshire Park, Greenfield, USA
            <span className="w-[800px] hidden md:block h-[1px] bg-[#E3E3E3] rounded-sm mb-4  mt-7 absolute"></span>
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-[#010101]">$ 300K</h1>
        </div>
      </div>
      {/* 2nd section */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-72 mt-5">
        <div className="w-[700px] h-[100px]">
          <img
            className=" lg:w-[700px] w-[430px] h-[400px]"
            src={pic1}
            alt=""
          />
        </div>

        {/* right side */}
        <div className="lg:w-[380px] h-[490px] border p-5 bg-[#ECF5FF]">
          <h1 className="text-base font-normal text-[#6B7280]">
            property value
          </h1>
          <p className="text-2xl font-bold mt-2">$ 300k - $ 310k</p>
          <p className="text-base font-medium mt-3 text-[#6B7280]">
            Your bid can not be than 10% of the property Minimum value.
          </p>
          <div className="mt-10">
            <p>Min</p>
            <div className="w-[330px] h-[40px]  bg-white rounded">
              <h1 className="font-normal text-base p-2">$ 280k</h1>
            </div>
          </div>
          <div className="mt-5">
            <p>Max</p>
            <div className="w-[330px] h-[40px] rounded bg-white">
              <h1 className="font-normal text-base p-2">$ 305k</h1>
            </div>
          </div>
          <div className="w-[340px] h-[26px] border rounded-full mt-7 bg-[#EEE]">
            <div className="flex justify-between">
              <img className="w-[24px] h-[24px]" src={Ellipse1} alt="" />
              <img className="w-[24px] h-[24px]" src={Ellipse1} alt="" />
            </div>
            <div className="flex justify-between">
              <h1>$ 280k</h1>
              <h1>$ 305k</h1>
            </div>
            <button className="btn btn-outline mx-24 mt-1 bg-[#0059B1] text-white">
              Bid Property
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[700px] h-[100px] grid grid-cols-2 lg:grid-cols-3 lg:gap-3 lg:-mt-10">
          <img className="lg:w-[230px] h-[140px]" src={small1} alt="" />
          <img
            className="lg:w-[230px] h-[140px] lg:-mx-0 -mx-32 "
            src={small2}
            alt=""
          />
          <div
            className="hero  w-[230px] h-[140px] lg:mt-0 mt-5"
            style={{
              backgroundImage: "url(https://i.ibb.co/V2xQt2t/smallpic3.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-65"></div>
            <h1 className="text-xl font-semibold text-white">View more</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
