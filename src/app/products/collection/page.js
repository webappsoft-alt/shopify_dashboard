"use client"

import DataTable from "@/components/pageComponents/dataTable";

// import { IndexTable, IndexTableHeader, IndexTableItem } from '@shopify/polaris';
const Collections = () => {
  
      
    return (
        <div>
            <main className="container px-4">
                <div className="px-2 py-3">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <h4 className="inter_semibold text-xl flex gap-2 items-center">
                            Collections</h4>
                        <div>
                            <button className=" btn2_black" >Create collection</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <DataTable/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Collections;
