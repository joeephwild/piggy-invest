import React from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { AiOutlineSearch } from "react-icons/ai";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "next-themes";
import Image from "next/image";
import { avatar } from "@/images";
import {BsFillBellFill} from 'react-icons/bs'

const Header = () => {
  const { resolvedTheme } = useTheme();
  const address = useAddress();
  return (
    <div className="w-full flex items-center justify-between px-[40px] py-[40px]">
      <div className="bg-white w-[60%] flex space-x-4 items-center py-2.5 h-16 rounded-md px-4">
        <AiOutlineSearch size={29} color="#6C757D" />
        <input
          type="text"
          placeholder="Search"
          className="border-none focus:border-none outline-none px-3 py-2 bg-transparent w-full"
        />
      </div>

      <div className="flex space-x-3 items-center">
        <div className="bg-[#ffffff] px-4 flex items-center relative h-16">
          <BsFillBellFill size={30} color="#0A2463" />
          <div className="bg-[#FF7034] w-[12px] h-[12px] rounded-full absolute right-4 top-3" />
        </div>
        {!address && <ConnectWallet theme={resolvedTheme} />}
        {address && (
          <div className="bg-[#ffffff] h-16 px-4 flex space-x-3 items-center">
            <span className="text-[16px] text-[#010101] font-medium">{address.substring(0, 9)}...{address.substring(36, 40)}</span>
            <Image src={avatar} alt='avatar' width='40px' height='40px' />
          </div>
        )}
        {/* <ThemeSwitcher  /> */}
      </div>
    </div>
  );
};

export default Header;
