'use client'
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { AppProvider, Button } from '@shopify/polaris';
import en from "@shopify/polaris/locales/en.json";
import OrderDataTable from '@/components/pageComponents/orderDataTable';

const Page = () => {
    return (
        <div className="2xl:container grid mx-auto">
            <div className="container grid mx-auto ">
                <AppProvider>
                    <div className="mt-3 px-3">
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
                        {/* <div className="bg-white mt-4 customer_height rounded-xl shadow1 p-4" >
                        <div className="h-full w-full flex-col flex justify-center items-center">
                            <Image src='/order.svg' width={230} height={230} alt='' />
                            <h6 className=" font-semibold text-base">Your orders will show here</h6>
                        </div>
                    </div> */}
                    </div>
                </AppProvider>
            </div>
        </div>
    )
}

export default Page
