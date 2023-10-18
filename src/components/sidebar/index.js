'use client'

import { useState } from "react";
import NavHeader from "../navHeader/navHeader";
// import ShopifySidebar from "./sidebar";
import ShopifySidebar2 from "./shopifySidebar";
// import ShopifySidebar from "./sidebar";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("./sidebar"), { ssr: false });
const IndexLayout = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <NavHeader setToggle={setToggle} toggle={toggle} />
            <div className='flex'>
                <Sidebar setToggle={setToggle}   toggle={toggle} />
                <main className='w-full ' style={{ backgroundColor: "#f1f1f1" }}>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default IndexLayout;
