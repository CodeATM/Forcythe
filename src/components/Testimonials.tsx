import { useState } from "react";
import { TestimonialData } from "../Dummy";

const Testimonials = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0); // Start from 0 to match array index

  return (
    <div className="max-screen-wrapper py-10">
      <div className="max-screen-inner">
        <div className="">
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
            Discover the{" "}
            <span className="text-[#60A6E7]"> transformative stories </span> of
            startups that scaled new heights with us
          </p>
        </div>

        {/* Tab section */}
        <div className="w-full overflow-x-scroll hide-scrollbar">
          <div className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
            {TestimonialData.map((item, index) => (
              <div
                key={item.id}
                className={`w-full p-[0.5rem] cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[#06438C] text-white"
                    : "text-[#06438C]"
                } ${index === 0 ? "rounded-l-full" : ""} ${
                  index === TestimonialData.length - 1 ? "rounded-r-full" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                  <img
                    src={item.tabIcon}
                    alt={`${item.tabName} icon`}
                    className="w-16 h-16" // Adjust the width and height as needed
                  />
                  <p>{item.tabName || " "}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display active testimonial content */}
        <div className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#0C2645]">
          <div className="sm:basis-[58%] pr-3 space-y-5">
            <p>{TestimonialData[activeTab]?.companyName}</p>
            <p>{TestimonialData[activeTab]?.content}</p>
            <p>{TestimonialData[activeTab]?.name}</p>
          </div>
          <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
            <img
              src={TestimonialData[activeTab]?.userImage}
              alt="User"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
