import { logo } from "@/images";
import { link } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoPersonCircleSharp } from 'react-icons/io'

const SideBar = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="w-[17%] px-[46px] py-[30px] bg-[#0A2463] h-screen">
      {/**logo section */}
      <div className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="logo"
          width="36px"
          height="44px"
          className="object-contain"
        />
        <p className="text-[#fff] font-bold text-[24px] leading-[29px]">
          BitVault
        </p>
      </div>

      {/** links */}
      <div className="flex flex-col mt-[120px] items-start space-y-[39px]">
        {link.map((item, i) => (
          <div onClick={() => setActive(item.active)} key={i}>
            <Link href={item.links} className="flex items-center space-x-4">
              <div
                className={
                  active !== item.active ? "text-[#6C757D]" : "text-[#ffffff]"
                }
              >
                <item.icon size={30}/>
              </div>
              <h3  className={
                  active !== item.active ? "text-[#6C757D] font-bold text-[20px] leading-[29px]" : "font-bold text-[24px] leading-[29px] text-[#ffffff]"
                }>
                {item.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      {/** profile */}
      <div className="flex items-center space-x-4 cursor-pointer">
    
      </div>
    </div>
  );
};

export default SideBar;
