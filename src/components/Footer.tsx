const Footer = () => {
  const Links = [
    "https://forcythe.com/images/facebook.svg",
    "https://forcythe.com/images/x.svg",
    "https://forcythe.com/images/instagram.svg",
    "https://forcythe.com/images/linkedin.svg",
    "https://forcythe.com/images/youtube.svg",
    "https://forcythe.com/images/Icon.svg",
  ];
  const UlLinks = [
    "About",
    "Services",
    "Portfolio",
    "Studio",
    "Foundation",
    "Careers",
    "Blog",
  ];
  return (
    <div className="max-screen-wrapper bg-[#071626]">
      <div className="max-screen-inner">
        <div className="lg:grid lg:grid-cols-3 py-10">
          <div className="max-w-lg mb-10 lg:mb-0">
            <div className="w-full grid grid-cols-4">
              <input
                type="text"
                placeholder="Your Email address"
                className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
              />
              <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
                Sbscribe
              </button>
            </div>
            <div className="flex gap-3 mt-5 items-center">
              <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
                <input
                  type="radio"
                  name="agreement"
                  id="agreement" // Ensure that this matches the label's "htmlFor"
                  className="hidden"
                />
              </div>
              <label
                htmlFor="agreement"
                className="text-sm cursor-pointer text-white"
              >
                I agree to receive other notifications from Forcythe
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
            <div className="lg:pl-14 md:col-span-2 md:pr-10">
              <img
                src="https://forcythe.com/images/forcythe%20logo.svg"
                alt=""
              />
              <p className="text-base text-darkGrey leadin font-normal">
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </p>
              <div className="mt-10 hidden md:flex items-center gap-2">
                {Links.map((nam) => (
                  <div className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center">
                    <a href="/">
                      <img src={nam} alt="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:pl-10">
              <h3 className="mb-8 text-2xl font-bold">Company</h3>
              <ul className="flex flex-col gap-2">
                {UlLinks.map((lin) => (
                  <li className="text-base text-[#60A6E7] font-medium">
                    {lin}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
                {Links.map((nam) => (
                  <div className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60A6E7] flex justify-center items-center">
                    <a href="/">
                      <img src={nam} alt="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright border-t-[1px] border-[#60A6E7]">
          <p className="text-[#60A6E7]text-sm mt-5 text-center md:text-left">
            Copyright © 2024 Forcythe. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
