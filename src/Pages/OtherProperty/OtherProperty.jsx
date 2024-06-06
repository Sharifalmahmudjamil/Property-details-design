import { CgBorderAll } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const OtherProperty = () => {
  return (
    <div>
      <div>
        <div className="max-w-screen-xl mx-auto mt-32">
          <h1 className="text-[#111827] font-bold text-2xl mt-5">
            Others Nearby Properties
            <span className="lg:mx-[420px] mx-56 text-lg font-semibold text-[#0059B1] underline">
              See all property
            </span>
          </h1>

          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
            {/* card */}
            <div className=" w-96  bg-[#F9FAFB]  relative">
              <figure>
                <img src="../../../Image/card 3.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="absolute -mt-40 -ml-14">
                  <IoIosArrowDropleftCircle className="w-11 h-11 text-[#5490CB]" />
                </div>
                <div className="border w-14 h-7 flex gap-2 p-1 bg-[#FDF0E7] rounded absolute -mt-20">
                  <img
                    className="w-[20px] h-[20px]"
                    src="../../../Image/Gallery.png"
                    alt=""
                  />
                  <p className="text-[14px] font-semibold">20</p>
                </div>
                <div className="flex gap-28 ">
                  <p className="text-sm font-normal text-[#111827]">
                    Apartment
                  </p>
                  <p className="text-base font-semibold text-[#111827] flex">
                    <CgBorderAll className="mt-1 text-[#E61]" />
                    Ready to Move
                  </p>
                </div>
                <span className="w-[330px] hidden md:block h-[1px] bg-[#D1D5DB] rounded-sm mb-4  mt-7 absolute"></span>
                <h2 className="card-title text-xl font-semibold text-[#111827] ">
                  SunnySlope Suites
                </h2>
                <p className="flex gap-1">
                  <IoLocationOutline className="mt-1 text-[#EE6611]" />
                  Meadowshire Park, Greenfield, USA
                </p>
                <div className="card-actions">
                  <h1 className="text-3xl  mt-2 font-semibold text-[#111827] ">
                    $ 250000
                  </h1>
                </div>
              </div>
            </div>
            {/* card */}
            <div className=" w-96  bg-[#F9FAFB]  relative">
              <figure>
                <img src="../../../Image/card1.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="border w-14 h-7 flex gap-2 p-1 bg-[#FDF0E7] rounded absolute -mt-20">
                  <img
                    className="w-[20px] h-[20px]"
                    src="../../../Image/Gallery.png"
                    alt=""
                  />
                  <p className="text-[14px] font-semibold">20</p>
                </div>
                <div className="flex gap-28 ">
                  <p className="text-sm font-normal text-[#111827]">
                    Apartment
                  </p>
                  <p className="text-base font-semibold text-[#111827] flex">
                    <CgBorderAll className="mt-1 text-[#E61]" />
                    Ready to Move
                  </p>
                </div>
                <span className="w-[330px] hidden md:block h-[1px] bg-[#D1D5DB] rounded-sm mb-4  mt-7 absolute"></span>
                <h2 className="card-title text-xl font-semibold text-[#111827] ">
                  SunnySlope Suites
                </h2>
                <p className="flex gap-1">
                  <IoLocationOutline className="mt-1 text-[#EE6611]" />
                  Meadowshire Park, Greenfield, USA
                </p>
                <div className="card-actions">
                  <h1 className="text-3xl  mt-2 font-semibold text-[#111827] ">
                    $ 250000
                  </h1>
                </div>
              </div>
            </div>
            {/* card */}
            <div className=" w-96  bg-[#F9FAFB]  relative">
              <figure>
                <img src="../../../Image/card2.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="absolute -mt-44 ml-[335px]">
                  <IoIosArrowDroprightCircle className="w-11 h-11 text-[#5490CB]" />
                </div>
                <div className="border w-14 h-7 flex gap-2 p-1 bg-[#FDF0E7] rounded absolute -mt-20">
                  <img
                    className="w-[20px] h-[20px]"
                    src="../../../Image/Gallery.png"
                    alt=""
                  />
                  <p className="text-[14px] font-semibold">20</p>
                </div>
                <div className="flex gap-28 ">
                  <p className="text-sm font-normal text-[#111827]">
                    Apartment
                  </p>
                  <p className="text-base font-semibold text-[#111827] flex">
                    <CgBorderAll className="mt-1 text-[#E61]" />
                    Ready to Move
                  </p>
                </div>
                <span className="w-[330px] hidden md:block h-[1px] bg-[#D1D5DB] rounded-sm mb-4  mt-7 absolute"></span>
                <h2 className="card-title text-xl font-semibold text-[#111827] ">
                  SunnySlope Suites
                </h2>
                <p className="flex gap-1">
                  <IoLocationOutline className="mt-1 text-[#EE6611]" />
                  Meadowshire Park, Greenfield, USA
                </p>
                <div className="card-actions">
                  <h1 className="text-3xl  mt-2 font-semibold text-[#111827] ">
                    $ 250000
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProperty;
