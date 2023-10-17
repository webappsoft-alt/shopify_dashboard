"use client"

import DataTable from "@/components/pageComponents/dataTable";

// import { IndexTable, IndexTableHeader, IndexTableItem } from '@shopify/polaris';
const Inventory = () => {


    return (
        <div>
            <main className="container px-4">
                <div className="px-2 py-3">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <h4 className="inter_semibold text-xl flex gap-2 items-center">
                            Abandoned Checkouts</h4>
                    </div>
                    <div className="mt-3">
                        <DataTable />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Inventory;
