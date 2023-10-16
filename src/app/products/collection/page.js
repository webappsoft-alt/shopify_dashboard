"use client"

import DataTable from "@/components/pageComponents/dataTable";
import { AppProvider, Button } from "@shopify/polaris";

// import { IndexTable, IndexTableHeader, IndexTableItem } from '@shopify/polaris';
const Collections = () => {
  
      
    return (
        <AppProvider>
            <main className="container px-4">
                <div className="px-2 py-3">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <h4 className="inter_semibold text-xl flex gap-2 items-center">
                            Collections</h4>
                        <div>
                            <Button variant="primary" >Create collection</Button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <DataTable/>
                    </div>
                </div>
            </main>
        </AppProvider>
    );
}

export default Collections;
