const Cone = () => {
  return (
    <div
      className="max-screen-wrapper py-14 md:py-20 xl:py-28"
      style={{
        background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
    >
      <div
        className="max-w-[52rem] mx-auto relative"
        style={{
          backgroundImage: "url('https://forcythe.com/images/arc-L.svg')",
          backgroundSize: "100% auto", // Ensure full width and proportional height
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top", // Center the image horizontally and align it to the top
        }}
      >
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 mx-auto text-center px-5">
          <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium">
              We build solutions that help{" "}
              <span className="text-[#60A6E7]">businesses</span> of all sizes to{" "}
              <span className="text-[#60A6E7]">scale</span>
            </p>
          </div>
          <div className="flex justify-evenly sm:justify-between items-center gap-3">
            <div className="flex flex-col gap-3 text-left w-fit">
              <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60A6E7] font-medium">
                50+
              </h1>
              <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Clients
              </p>
            </div>
            <div className="flex flex-col gap-3 text-left w-fit">
              <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60A6E7] font-medium">
                120+
              </h1>
              <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Projects
              </p>
            </div>
            <div className="flex flex-col gap-3 text-left w-fit">
              <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60A6E7] font-medium">
                10+
              </h1>
              <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Team Leads
              </p>
            </div>
            <div className="flex flex-col gap-3 text-left w-fit">
              <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-[#60A6E7] font-medium">
                10+
              </h1>
              <p className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Glorious Years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cone;
