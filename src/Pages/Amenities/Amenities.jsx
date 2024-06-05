import { LuDatabaseBackup } from "react-icons/lu";
import { GiLift } from "react-icons/gi";
import { FaLaptopHouse } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FaSquareParking } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { ImMan } from "react-icons/im";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { GiParkBench } from "react-icons/gi";
import { GrCompliance } from "react-icons/gr";
import { GiForklift } from "react-icons/gi";
const Amenities = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="w-[1160px] h-[600px] border mt-10 p-8">
        <h1 className="text-base font-semibold">Amenities</h1>
        {/* 1st row */}
        <div className="flex mt-2 justify-between">
          <div className="text-base font-medium flex gap-2">
            <LuDatabaseBackup className="mt-1" />
            <h1>Power Back Up</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <GiLift className="mt-1 text-xl" />
            <h1>Lift</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <FaLaptopHouse className="mt-1 text-xl" />
            <h1>Club House</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <CgGym className="mt-1 text-xl" />
            <h1>Gymnasium</h1>
          </div>
        </div>

        {/* 2nd row */}
        <div className="flex mt-10 justify-between">
          <div className="text-base font-medium flex gap-2">
            <FaSquareParking className="mt-1" />
            <h1>Park</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <FaCarSide className="mt-1 text-xl" />
            <h1>Reserved Parking</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <ImMan className="mt-1 text-xl" />
            <h1>Security</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <FaArrowUpFromWaterPump className="mt-1 text-xl" />
            <h1>Water Storage</h1>
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex mt-10 justify-between">
          <div className="text-base font-medium flex gap-2">
            <GiParkBench className="mt-1" />
            <h1>Private Terrace/Garden</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <GrCompliance className="mt-1 text-xl" />
            <h1>Vaastu Compliant</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <GiForklift className="mt-1 text-xl" />
            <h1>Service/Goods Lift</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <FaSquareParking className="mt-1 text-xl" />
            <h1>Visitor Parking</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
