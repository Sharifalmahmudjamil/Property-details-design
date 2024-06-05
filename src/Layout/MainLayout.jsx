import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-Inter">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
