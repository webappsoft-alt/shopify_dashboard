'use client'
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { AppProvider, Button, Frame } from '@shopify/polaris';
import DraftTable from '@/components/pageComponents/draftDataTable';
import en from "@shopify/polaris/locales/en.json";
const Page = () => {
    return (
        <div className="2xl:container grid mx-auto">
            <AppProvider i18n={en}>
                <div className="min-[1200px]:container min-[1200px]:grid min-[1200px]:mx-auto">
                    <Frame>
                        <div className="mt-3 px-2">
                            <h5 className="font-bold text-lg roboto_medium mb-3">Draft Orders</h5>
                            <DraftTable />
                        </div>
                    </Frame>
                </div>
            </AppProvider>
        </div>
    )
}

export default Page
