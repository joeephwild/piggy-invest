import Chart from "@/components/Chart";
import Meta from "@/components/Meta";
import OverallSavings from "@/components/OverallSavings";
import SavingsCard from "@/components/SavingsCard";
import Layout from "@/layout/Layout";

export default function Savings() {
    return (
        <>
            <Layout>
                <Meta page='Savings' />
                <div className="flex w-full mx-[40px] justify-between">
                    <div className="w-full mr-8">
                        <OverallSavings title='Overall Savings' value='$2,000' />
                        <Chart />
                    </div>
                    <div className="flex-col w-full">
                        <SavingsCard title='Auto-Save' value='$2,000' />
                        <div className="mt-8"/>
                        <SavingsCard title='Flex Saving' value='$2,000' />
                        <div className="mt-8"/>
                        <SavingsCard title='Safelock' value='$2,000' />
                    </div>
                </div>
            </Layout>
        </>
    )
}