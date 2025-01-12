import Button from "../Reuseables/Button";

const Cta = () => {
  return (
    <div
      className="max-screen-wrapper py-10 text-center"
      style={{
        background:
          "linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)",
      }}
    >
      <div className="max-screen-inner">
        <div className="max-w-[45rem] mx-auto">
          <h1 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
            <span className="text-[#60A6E7]">Ready to Scale?</span> <br />
            Join successful brands that chose us as their{" "}
            <span className="text-[#60A6E7]"> growth accelerator</span>
          </h1>
          <div className="flex justify-center">
            <Button title="Book a call" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
