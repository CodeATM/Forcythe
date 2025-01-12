import Clients from "./Clients";
import Button from "../Reuseables/Button";

const Landing = () => {
  return (
<div className="md:min-h-screen bg-[url('/src/assets/Images/header-background.svg')] bg-no-repeat bg-top">
      <div className="max-screen-wrapper py-5">
        <div className="max-screen-inner">
          <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
            <div className="max-w-[56rem]">
              <div className="min-h-[180px]">
                <h1 className="text-[3.5rem] text-white sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
                  We build <span className="text-blue">products</span> that
                  shape a better future
                </h1>
                <div className="mb-8 max-w-3xl">
                  <p className="text-gray text-base md:text-lg mb-8 leading-7">
                    We’re the architects of digital excellence across
                    industries. We redefine business with cutting-edge digital
                    strategies that invokes sector-wide transformation.
                  </p>
                </div>
                <Button title="Book a call"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <Clients />
      </div>
    </div>
  );
};

export default Landing;
