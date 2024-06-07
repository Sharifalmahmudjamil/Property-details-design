import home from "../../../Image/Home.png";
const OtherServices = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-5xl font-bold text-[#181818] text-center mt-20">
        Other Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-5">
        <div className="card card-side rounded-none bg-[#ECF5FF]  w-[380px] h-[220px] p-5">
          <div></div>
          <figure>
            <img className="w-[36px] h-[36px] -mt-12" src={home} alt="Movie" />
          </figure>

          <div className="card-body">
            <h2 className="text-2xl font-normal text-[#111827]">
              Advanced Property Search
            </h2>
            <p className="text-base font-medium text-[#6B7280]">
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
        <div className="card card-side rounded-none bg-[#ECF5FF]  w-[380px] h-[220px] p-5">
          <div></div>
          <figure>
            <img className="w-[36px] h-[36px] -mt-12" src={home} alt="Movie" />
          </figure>

          <div className="card-body">
            <h2 className="text-2xl font-normal text-[#111827]">
              Virtual Tours and Multimedia
            </h2>
            <p className="text-base font-medium text-[#6B7280]">
              Explore properties through immersive virtual tours and HD photos.
            </p>
          </div>
        </div>
        <div className="card card-side rounded-none bg-[#ECF5FF]  w-[380px] h-[220px] p-5">
          <div></div>
          <figure>
            <img className="w-[36px] h-[36px] -mt-12" src={home} alt="Movie" />
          </figure>

          <div className="card-body">
            <h2 className="text-2xl font-normal text-[#111827]">
              Secure Online Transactions
            </h2>
            <p className="text-base font-medium text-[#6B7280]">
              Ensure secure transactions and e-sign documents seamlessly online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
