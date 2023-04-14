import { bitcoin } from "@/images";
import Image from "next/image";
import React from "react";

const Transactions = () => {
  return (
    <div className="mt-[50px] mx-auto bg-white px-[20px] py-[30px] w-[1206px] h-[440px]">
      <table className="table-fixed w-full">
        <thead className="">
          <tr className="text-[16px] font-medium leading-[19px] items-center text-[#010101]">
            <th>Coin</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td>
                <Image src={bitcoin} alt='bitcoin' width="10px" height="10px" className="rounded-full" />
            </td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
