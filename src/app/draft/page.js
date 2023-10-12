import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Page = () => {
  return (
    <div className="2xl:container grid mx-auto">
    <div className="container grid mx-auto ">
        <div className="mt-3 px-3">
            <h5 className="font-bold">Draft Orders</h5>
            <div className="bg-white mt-4 customer_height rounded-xl shadow1 p-4" >
                <div className="h-full w-full flex-col flex justify-center items-center">
                <Image src='/order.svg' width={230} height={230} />
                    {/* <div className="avatar">

                    </div> */}
                    <h6 className=" font-semibold mt-2 text-lg">Manually create orders and invoices</h6>
                    <div className="w-2/4 text-center px-4" style={{color:"#787878"}} >
                    Use draft orders to take orders over the phone, email invoices to customers, and collect payments.
                    </div>
                    <div className="flex gap-3 mt-3">
                 
                        <button className="btn1 rounded-xl bg-black text-white shadow1">
                     Create draft order
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-3 text-center pt-3">Learn more about <Link href={'/'}>orders</Link></div>
        </div>
    </div>
</div>
  )
}

export default Page
