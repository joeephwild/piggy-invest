import React from "react";
import {GoTriangleUp} from 'react-icons/go'

const SavingsCard = () => {
  return (
    <div className="max-w-[423px] relative max-h-[200px] bg-gradient-to-r from-[#FFFFFF] to-[#DADEE8] shadow-md py-2.5 px-4.5 rounded">
      <div className="h-[80px] w-[80px] bg-[#B3BBCF]/50 bg-blend-overlay absolute right-6 top-0 z-[99] rounded-full" />
      <div className="h-[80px] w-[80px] bg-[#B3BBCF]  absolute right-0 top-0 rounded-full" />
      <div className="flex-col flex px-4 items-start space-y-8">
        <p className="font-bold text-[#FF7034] text-[16px] leading-[20px]">Savings</p>
        <h2 className="font-bold text-[#000] text-[32px] leading-[44px]">$2,000</h2>

        <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
                <GoTriangleUp size={25} color="green" />
                <p className="text-[#6C757D] text-[16px] leading-[20px] font-bold">21%</p>
            </div>
            <p className="text-[#6C757D] text-[16px] leading-[20px] font-medium">+$5</p>
            <p className="bg-[#00C851] text-[#000] text-[16px] font-medium leading-[20px] px-2 py-2 rounded">+0.3%</p>
        </div>

      </div>
    </div>
  );
};

export default SavingsCard;
