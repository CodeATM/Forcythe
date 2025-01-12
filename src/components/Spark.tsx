import { useState } from "react";
import { sparData } from "../Dummy";
import Button from "../Reuseables/Button";

const Spark = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Find the data of the currently active tab
  const activeTabData = sparData.find((tab) => tab.id === activeTab);

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 relative">
      <div className="mb-12 xl:mb-0 max-w-[45rem]">
        <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
          From <span className="text-blue"> Spark</span> to{" "}
          <span className="text-blue">Spotlight:</span> we take you every step
          of the way to success.
        </p>
      </div>
      <div className="flex lg:items-end flex-col md:flex-row my-3">
        <div className="basis-1/2 flex mb-8 md:mb-0 pt-4">
          <div className="">
            <div className="basis-1/2 md:pr-10 mb-6 md:mb-0">
              <div className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                {sparData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 ${
                      activeTab === tab.id
                        ? "text-black bg-[#B3D0F2]"
                        : "bg-transparent text-white"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4">
              {sparData
                .filter((tab) => tab.id === activeTab)
                .map((tab) => (
                  <div key={tab.id}>
                    <h2 className="text-2xl font-semibold mb-4">{tab.title}</h2>
                    <p className="text-gray-700 leading-relaxed">{tab.des}</p>
                  </div>
                ))}
              <div className="mt-4">
                <Button title="Book a call" />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
          <div
            className="max-w-sm md:max-w-md w-full h-64 md:h-8 flex items-center justify-center overflow-hidden"
            style={{ minHeight: "16rem" }}
          >
            {activeTabData && (
              <img
                src={activeTabData.Img}
                alt={`${activeTabData.name} illustration`}
                className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spark;
