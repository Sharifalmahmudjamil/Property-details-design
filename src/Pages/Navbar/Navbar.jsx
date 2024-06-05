const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#ECF5FF] max-w-screen h-[80px] mx-auto font-poppins   shadow-2xl">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-medium"
            >
              <li>
                <a>Buy</a>
              </li>
              <li>
                <a>Sell</a>
              </li>
              <li>
                <a>Services</a>
              </li>
            </ul>
          </div>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg  gap-8 mx-auto font-semibold">
              <a>Buy</a>

              <a>Sell</a>

              <a>Services</a>
            </ul>
          </div>
        </div>

        <img
          className="w-[50px] h-[60px] lg:mx-32"
          src="../../../Image/logo.png"
          alt=""
        />
        <div className="navbar-end gap-8 mx-14 text-lg font-semibold">
          <a className="  text-black">Manage Rentals</a>
          <a className="  text-black">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
