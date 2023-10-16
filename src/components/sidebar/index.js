'use client'

import { useState } from "react";
import NavHeader from "../navHeader/navHeader";
import ShopifySidebar from "./sidebar";

const IndexLayout = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <NavHeader setToggle={setToggle} toggle={toggle} />
            <div className='flex'>
                <ShopifySidebar setToggle={setToggle}   toggle={toggle} />
                <main className='w-full ' style={{ backgroundColor: "#f1f1f1" }}>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default IndexLayout;
