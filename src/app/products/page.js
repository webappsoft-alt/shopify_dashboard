'use client'
import { AppProvider, Button } from "@shopify/polaris";
import Link from "next/link";
import en from "@shopify/polaris/locales/en.json";

const Products = () => {
    return (
        <div>
            <AppProvider i18n={en}>
                <div className="2xl:container grid mx-auto">
                    <div className="container grid mx-auto ">
                        <div className="mt-3 px-2">
                            <h5 className="font-bold text-xl inter_bold">Products</h5>
                            <div className="bg-white mt-4 customer_height rounded-xl shadow1 p-4" >
                                <div className="h-full w-full flex-col flex justify-center items-center">
                                    <div className="avatar">

                                    </div>
                                    <h6 className=" font-semibold mt-4 text-sm">First up: what are you selling?</h6>
                                    <div className="min-[700px]:w-2/4 f13 text-center px-4" style={{ color: "#787878" }} >
                                        Before you open your store, first you need some products.
                                    </div>
                                    <div className="flex gap-3 flex-wrap justify-center mt-3">
                                        <Button>Find products to sell</Button>
                                        <Button>Import products</Button>
                                        <Link href={'/products/add-product'} >  <Button variant="primary"  >Add your products</Button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 text-center pt-3">Learn more about <Link href={'/'}>Products</Link></div>
                        </div>
                    </div>
                </div>
            </AppProvider>
        </div>
    );
}

export default Products;