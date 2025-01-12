import Marquee from "react-fast-marquee";

const Clients = () => {
  const images1 = [
    "https://forcythe.com/images/Project%20Images/stac.svg",
    "https://forcythe.com/images/Project%20Images/activity.svg",
    "https://forcythe.com/images/Project%20Images/africaFund.svg",
    "https://forcythe.com/images/Project%20Images/starks.svg",
    "https://forcythe.com/images/Project%20Images/exec-pro.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg",
  ];

  const images2 = [
    "https://forcythe.com/images/Project%20Images/starks.svg",
    "https://forcythe.com/images/Project%20Images/stac.svg",
    "https://forcythe.com/images/Project%20Images/africaFund.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg",
    "https://forcythe.com/images/Project%20Images/exec-pro.svg",
    "https://forcythe.com/images/Project%20Images/activity.svg",
  ];

  return (
    <div className="py-10">
      <div className="min-h-[60px]">
        <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
          Success in <span className="text-[#60A6E7]"> Motion </span>– Our
          clients’ journey
        </p>
      </div>
      <div
        className="flex flex-col gap-5"
        style={{
          background:
            "linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgb(3, 5, 22) 80%)",
        }}
      >
        <div className="relative w-auto h-[340px]">
          {/* Background effect */}
          <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>

          <Marquee speed={60} className="overflow-hidden flex items-center">
            {images1.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-2 w-auto"
              >
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  className="h-[340px] w-auto object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="relative w-auto h-[340px]">
          {/* Background effect */}
          <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>

          <Marquee speed={70} className="overflow-hidden flex items-center">
            {images2.map((image, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-2 w-auto"
              >
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  className="h-[340px] w-auto object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Clients;
