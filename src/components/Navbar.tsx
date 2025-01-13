import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Button from "../Reuseables/Button";
import forcyteLogo from "../assets/Images/forcythe-logo.svg"

const NavItem = ({ text, scroll }: { text: string; scroll: boolean }) => (
  <h1
    className={`text-${
      scroll ? "[#f3f3f3]" : "white"
    } cursor-pointer hover:text-${
      scroll ? "gray-600" : "gray-300"
    } text-[14px] leading-[20px]`}
  >
    {text}
  </h1>
);

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = ["About", "Service", "Portfolio", "Studio", "Foundation"];

  return (
    <>
      <div
        className={`max-screen-wraper fixed top-0 left-0 w-full z-40 py-6 ${
          scroll ? "backdrop-blur-sm bg-[#111]/30" : "bg-transparent"
        }`}
      >
        <div className="max-screen-inner flex justify-between items-center px-4 md:px-8 py-5">
          <div className="flex gap-[30px]">
            <div className="logo">
              <img
                src={forcyteLogo}
                alt=""
              />
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavItem key={item} text={item} scroll={scroll} />
              ))}
            </div>
          </div>

          <div className="hidden md:block ">
            <Button title="Book a call" />
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Separate Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-[#030516] w-60 rounded-[2rem] fixed md:hidden right-5 top-28"
        >
          <div className="text-white z-10 bg-transparent rounded-[inherit] w-full">
            <div
              className="w-full p-5 py-8 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)",
              }}
            >
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item} className="w-full py-2.5">
                    <a href="w-full text-base py-3" className="">
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
