import { B2Bdata } from "../Dummy";

const B2B = () => {
  return (
    <div
      className="max-screen-wrapper py-20"
      style={{
        background:
          "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)",
      }}
    >
      <div className="max-screen-inner">
        {/* Header Text */}
        <div className="">
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center">
            Your best call for B2B/B2C product innovation
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {B2Bdata.map((item, index) => (
            <div
              key={index}
              className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-6 justify-start overflow-visible p-px decoration-clone w-full rounded-2xl text-left"
            >
              {/* Card Content */}
              <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-xs hover:shadow-[#AEA9B1] transition-shadow duration-300 flex flex-col text-left h-full">
                {/* Icon */}
                <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className=""
                  />
                </div>
                {/* Title */}
                <h3 className="text-2xl font-medium mb-5">
                  {item.title}
                </h3>
                {/* Subtitle */}
                <p className="mb-0 text-darkGrey text-[17.5px]">
                  {item.subtitle}
                </p>
                <div className="flex-grow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default B2B;
