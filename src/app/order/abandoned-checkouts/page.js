"use client"

import AbandonedCheckouts from "@/components/pageComponents/abandonedDataTable";
import { Frame } from "@shopify/polaris";

// import { IndexTable, IndexTableHeader, IndexTableItem } from '@shopify/polaris';
const Inventory = () => {


    return (
        <div>
            <main className="min-[1200px]:container min-[1200px]:grid min-[1200px]:mx-auto px-2">
                <div className="sm:px-2 py-3">
                    <Frame>
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <h4 className="inter_semibold text-xl flex gap-2 items-center">
                                Abandoned Checkouts</h4>
                        </div>
                        <div className="mt-3">
                            <AbandonedCheckouts />
                        </div>
                    </Frame>
                </div>
            </main>
        </div>
    );
}

export default Inventory;
