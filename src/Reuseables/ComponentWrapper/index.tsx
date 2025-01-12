import React from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const ComponentWrapper = ({ subtitle, title, children }: Props) => {
  return (
    <div className="max-screen-wrapper my-20">
      <div className="max-screen-inner space-y-[32px] ">
        <div className="space-y-[16px] ">
          <div className="flex gap-x-2 items-center">
            <p className="font-gordita text-[16px] leading-[28px] font-[500] text-[#FF8A05] text-gsap ">
              {subtitle}
            </p>
            <span className="bg-[#FF8A05] h-[1px] w-[50px]"></span>
          </div>
          <div className="">
            <h1 className="text-[38px] leading-[56px] font-bold font-gordita">
              {title}
            </h1>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;
