'use client'

import { useState } from "react";
import NavHeader from "../navHeader/navHeader";
// import ShopifySidebar from "./sidebar";
import en from "@shopify/polaris/locales/en.json";
// import ShopifySidebar from "./sidebar";
import dynamic from "next/dynamic";
import { AppProvider} from "@shopify/polaris";
const Sidebar = dynamic(() => import("./sidebar"), { ssr: false });
const IndexLayout = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <AppProvider i18n={en}>
            <NavHeader setToggle={setToggle} toggle={toggle} />
            <div className='flex '>
                <Sidebar setToggle={setToggle} toggle={toggle} />
                <main className='w-full overflow-auto h-full relative' style={{ backgroundColor: "#f1f1f1" }}>
                    {children}
                </main>
            </div>
        </AppProvider>
    );
}

export default IndexLayout;
