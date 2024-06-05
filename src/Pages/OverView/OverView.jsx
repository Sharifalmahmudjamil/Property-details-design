import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { MdOutlineBalcony } from "react-icons/md";
import { GiFurnace } from "react-icons/gi";
const OverView = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20 flex gap-20">
      <div className="w-[700px] h-[320px] border p-6 bg-[#F9FAFB] rounded">
        <h1 className="text-2xl font-bold text-[#000] mb-4 ">Overview</h1>
        {/* 2nd */}
        <div className="w-[650px] h-[50px] bg-white shadow-2xl flex justify-between p-3">
          <div className="flex gap-1 text-base font-bold text-[#303030]">
            <FaBed className=" text-lg" />
            <h1>2 BedS</h1>
          </div>
          <div className="flex gap-1 text-base font-bold text-[#303030]">
            <FaBath className=" text-lg" />
            <h1>2 Bath </h1>
          </div>
          <div className="flex gap-1 text-base font-bold text-[#303030]">
            <MdOutlineBalcony className=" text-lg" />
            <h1>2 Balcony</h1>
          </div>
          <div className="flex gap-1 text-base font-bold text-[#303030]">
            <GiFurnace className=" text-lg" />
            <h1>Fully Furnished</h1>
          </div>
        </div>

        {/* 3rd */}
        <div className="w-[650px] h-[80px]  mt-8 flex justify-between">
          <h1>
            <span className="font-normal text-base text-[#5C5C5C]">
              Carpet Area
            </span>{" "}
            <br />
            <span className="font-bold text-base text-[#101010]">
              2000 sqft
            </span>{" "}
            <br />{" "}
            <span className="text-sm font-normal text-[#5C5C5C]">
              $ 225/sqft{" "}
            </span>
          </h1>

          <h1>
            <span className="font-normal text-base text-[#5C5C5C]">Floor</span>{" "}
            <br />{" "}
            <span className="font-bold text-base text-[#101010]">
              Second (Out of 6th floor)
            </span>
          </h1>

          <h1>
            <span className="font-normal text-base text-[#5C5C5C]">
              Transaction Type
            </span>{" "}
            <br />{" "}
            <span className="font-bold text-base text-[#101010]">
              Ready to move
            </span>
          </h1>

          <h1>
            <span className="font-normal text-base text-[#5C5C5C]">Lift</span>{" "}
            <br /> <span className="font-bold text-base text-[#101010]">1</span>
          </h1>
        </div>

        {/* 4th */}
        <div className="w-[650px] h-[80px]  mt-8 flex justify-between">
          <h1>
            <span className="font-normal text-base text-[#5C5C5C]">Facing</span>{" "}
            <br />{" "}
            <span className="font-bold text-base text-[#101010]">
              North - East
            </span>
          </h1>

          <h1>
            <span className="font-normal text-base text-[#5C5C5C]">
              Additional Rooms
            </span>{" "}
            <br />{" "}
            <span className="font-bold text-base text-[#101010]">
              1 servant room & 1 gust room
            </span>
          </h1>

          <h1>
            <span className="font-normal text-base text-[#5C5C5C]">
              Age of construction
            </span>{" "}
            <br />{" "}
            <span className="font-bold text-base text-[#101010]">
              New Construction
            </span>
          </h1>
        </div>
      </div>
      {/* right side */}
      <div
        className="hero  w-[380px] h-[420px] -mt-28"
        style={{
          backgroundImage: "url(https://i.ibb.co/gZMXVw4/map.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-65"></div>
        {/* <img
          className="w-[380px] h-[420px] -mt-28"
          src="../../../Image/map.png"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default OverView;
