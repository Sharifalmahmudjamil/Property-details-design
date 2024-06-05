import { IoLocationOutline } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex gap-36 mt-12">
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
      <div className="flex gap-20 mt-5">
        <div className="w-[700px] h-[100px]">
          <img
            className=" w-[700px] h-[400px]"
            src="../../../Image/pic1.jpg"
            alt=""
          />
        </div>

        {/* right side */}
        <div className="w-[380px] h-[490px] border p-5 bg-[#ECF5FF]">
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
              <img
                className="w-[24px] h-[24px]"
                src="../../../Image/Ellipse 7.jpg"
                alt=""
              />
              <img
                className="w-[24px] h-[24px]"
                src="../../../Image/Ellipse 7.jpg"
                alt=""
              />
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
        <div className="w-[700px] h-[100px] flex gap-3 -mt-10">
          <img
            className="w-[230px] h-[140px]"
            src="../../../Image/smallpic1.jpg"
            alt=""
          />
          <img
            className="w-[230px] h-[140px]"
            src="../../../Image/smallpic2.jpg"
            alt=""
          />
          <div
            className="hero  w-[230px] h-[140px]"
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
