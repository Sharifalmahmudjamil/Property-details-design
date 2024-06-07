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
import { TbBrandIntercom } from "react-icons/tb";
import { GrHostMaintenance } from "react-icons/gr";
import { GiNuclearWaste } from "react-icons/gi";
import { MdLocalLaundryService } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";

const Amenities = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="lg:w-[1160px] lg:h-[550px] h-[700px] border rounded mt-10 p-8 bg-[#F9FAFB]">
        <h1 className="text-2xl font-semibold text-[#000]">Amenities</h1>
        {/* 1st row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 ">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 ">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 ">
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
        {/* 4th row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 ">
          <div className="text-base font-medium flex gap-2">
            <TbBrandIntercom className="mt-1" />
            <h1>Intercom Facility</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <GrHostMaintenance className="mt-1 text-xl" />
            <h1>Maintenance Staff</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <GiNuclearWaste className="mt-1 text-xl" />
            <h1>Waste Disposal</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <MdLocalLaundryService className="mt-1 text-xl" />
            <h1>Laundry Service</h1>
          </div>
        </div>
        {/* 5th row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 ">
          <div className="text-base font-medium flex gap-2">
            <FaWifi className="mt-1" />
            <h1>Internet/Wi-Fi Connectivity</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <PiTelevisionSimpleBold className="mt-1 text-xl" />
            <h1>DTH Television Facility</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <FaGasPump className="mt-1 text-xl" />
            <h1>Piped Gas</h1>
          </div>
          <div className="text-base font-medium flex gap-2">
            <FaRunning className="mt-1 text-xl" />
            <h1>Jogging and Strolling Track</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
