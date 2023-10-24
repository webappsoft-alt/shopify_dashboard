"use client"

import DataTable from "@/components/pageComponents/dataTable";
import { Frame } from "@shopify/polaris";

// import { IndexTable, IndexTableHeader, IndexTableItem } from '@shopify/polaris';
const Inventory = () => {


    return (
        <div>
            <main className="min-[1200px]:container min-[1200px]:grid min-[1200px]:mx-auto px-2">
                <Frame>
                    <div className="px-2 py-3">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <h4 className="inter_semibold text-xl flex gap-2 items-center">
                                Inventory</h4>
                        </div>
                        <div className="mt-3">
                            <DataTable />
                        </div>
                    </div>
                </Frame>
            </main>
        </div>
    );
}

export default Inventory;
