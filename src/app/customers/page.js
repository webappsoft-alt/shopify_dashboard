'use client'
import CustomerDataTable from "@/components/pageComponents/customerDataTable";
import { AppProvider, Button, Frame } from "@shopify/polaris";
import Link from "next/link";

const Customers = () => {
    return (
        <AppProvider>
            <div className="min-[1200px]:container min-[1200px]:grid min-[1200px]:mx-auto sm:px-2">
                <Frame>
                    <div className="mt-3 px-2">
                        <h5 className="font-bold mb-3  text-lg roboto_medium">Customers</h5>
                        <CustomerDataTable />
                    </div>
                </Frame>
            </div>
        </AppProvider>
    );
}

export default Customers;