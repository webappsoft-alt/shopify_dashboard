import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const Page = () => {
  return (
    <div className="2xl:container grid mx-auto">
    <div className="container grid mx-auto ">
        <div className="mt-3 px-3">
            <h5 className="font-bold">Orders</h5>
            <div className="bg-white mt-4 customer_height rounded-xl shadow1 p-4" >
                <div className="h-full w-full flex-col flex justify-center items-center">
                <Image src='/order.svg' width={230} height={230} alt=''/>
                    {/* <div className="avatar">

                    </div> */}
                    <h6 className=" font-semibold text-base">Your orders will show here</h6>
                    {/* <div className="w-2/4 text-center px-4" style={{color:"#787878"}} >
                        Manage customer details, see customer order history, and group customer into segments
                    </div>
                    <div className="flex gap-3 mt-3">
                        <button className="btn1 rounded-xl shadow2">
                            Import Customers
                        </button>
                        <button className="btn1 rounded-xl bg-black text-white shadow1">
                            Add Customers
                        </button>
                    </div> */}
                </div>
            </div>
            {/* <div className="mt-3 text-center pt-3">Learn more about <Link href={'/'}>customers</Link></div> */}
        </div>
    </div>
</div>
  )
}

export default Page
