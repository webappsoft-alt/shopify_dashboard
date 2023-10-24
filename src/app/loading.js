import { Spinner } from "react-bootstrap";

export default function Loading() {
    return (
        <div className="supens_Class">
            <div className='w-full main_app flex  justify-center items-center' style={{ height: "90vh" }} >
                <div className='flex items-center relative' >
                    <div className='absolute'>
                        <h5 className='inter_bold ms-2 my-0 fs_09' style={{ whiteSpace: "nowrap" ,color:"rgb(100 87 87)"}} >
                            Shopify
                        </h5>
                    </div>
                </div>
                <Spinner />
            </div>
        </div>
    );
}

