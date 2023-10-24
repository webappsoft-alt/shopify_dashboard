'use client'
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { AppProvider, Button, Frame } from '@shopify/polaris';
import en from "@shopify/polaris/locales/en.json";
import OrderDataTable from '@/components/pageComponents/orderDataTable';

const Page = () => {
    return (
        <div className=" min-[1200px]:2xl:container min-[1200px]:grid min-[1200px]:mx-auto">
            <AppProvider i18n={en}>
                <Frame>
                    <div className="mt-3 max-[1200px]:px-2 min-[1200px]:px-3 ">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <h4 className="inter_semibold text-xl flex gap-2 items-center">
                                Orders</h4>
                            <div className='flex gap-3'>
                                <Link href={'/order/create-order'} >
                                    <Button >Export</Button></Link>
                                <Link href={'/order/create-order'} >
                                    <Button variant="primary" >Create order</Button></Link>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <OrderDataTable></OrderDataTable>
                        </div>
                    </div>
                </Frame>
            </AppProvider>
        </div>
    )
}

export default Page
