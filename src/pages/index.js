import Head from "next/head";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import SavingsCard from "@/components/SavingsCard";
import TransactionDetails from "@/components/TransactionDetails";
import Meta from "@/components/Meta";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Meta page='Home' />
          <div className="grid grid-cols-3 mx-[40px] mt-16 items-center gap-5">
              <SavingsCard title='Savings' value='$2,000' />
              <SavingsCard title='Investments' value='$2,000' />
              <SavingsCard title='Rewards' value='$2,000' />
          </div>

          {/* transactions */}
          <div className="mx-[40px] mt-20">
              <TransactionDetails />
          </div>
      </Layout>
    </>
  );
}
