import React from "react";
import Sidebar from "./layouts/Sidebar";
import DarkMode from "./layouts/DarkMode";

interface LayoutProps{
    children: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
    return(
        <div className="h-screen">
            <div className="mt-20 w-auto h-max mx-auto xl:px-30 max-w-6xl">
                <DarkMode />
                <div className="grid grid-cols-4 h-full">
                    <Sidebar/>
                    <div className="
                    col-span-4 
                    lg:col-span-3
                    border-x-[1px]
                    border-neutral-800">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;