import { logo, profile } from "@/images";
import { link } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoPersonCircle } from 'react-icons/io'

const SideBar = () => {
  
  const [active, setActive] = useState();
  useEffect(() => {
    let currentWin = window.location.href.substring(22);
    let currentTab;
    if (currentWin === "") {
      currentTab = "home";
    } else if (currentWin === "savings") {
      currentTab = "savings";
    } else if (currentWin === "investment") {
      currentTab = "investment";
    } else if (currentWin === "reward") {
      currentTab = "reward";
    } else if (currentWin === "swap") {
      currentTab = "swap";
    }
    setActive(currentTab)
  },[])

  return (
    <div className="w-[310px] px-[46px] py-[30px] bg-[#0A2463] h-screen">
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
                <item.icon size={34}/>
              </div>
              <h3  className={
                  active !== item.active ? "text-[#6C757D] font-bold text-[24px] leading-[29px]" : "font-bold text-[24px] leading-[29px] text-[#ffffff]"
                }>
                {item.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      {/** profile */}
      <div className="flex fixed bottom-24 items-center space-x-4 cursor-pointer">
        <Image src={profile} alt='profile' width="33px" height="33px" />
        <h4 className="font-bold text-[24px] text-[#ffffff] leading-[29px]">Account</h4>
      </div>
    </div>
  );
};

export default SideBar;
