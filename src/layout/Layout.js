import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function Layout({ children }) {
    return (
        <div className="flex w-full">
            <SideBar />
            <div className="flex-1 w-full dark:bg-black bg-[#E7E9EF]">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}