"use client"

import CollectionDataTable from "@/components/pageComponents/collectionDataTable";
import { AppProvider, Button, Frame } from "@shopify/polaris";
import Link from "next/link";
import en from "@shopify/polaris/locales/en.json";


// import { IndexTable, IndexTableHeader, IndexTableItem } from '@shopify/polaris';
const Collections = () => {


    return (
        <AppProvider i18n={en}>
            <main className="min-[1200px]:container min-[1200px]:grid min-[1200px]:mx-auto sm:px-2">
                <div className="px-2 py-3">
                    <Frame>
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <h4 className="inter_semibold text-xl flex gap-2 items-center">
                                Collections</h4>
                            <div>
                                <Link href={'/products/create-collection'} > <Button variant="primary" >Create collection</Button></Link>
                            </div>
                        </div>
                        <div className="mt-3">
                            <CollectionDataTable />
                        </div>
                    </Frame>
                </div>
            </main>
        </AppProvider>
    );
}

export default Collections;
