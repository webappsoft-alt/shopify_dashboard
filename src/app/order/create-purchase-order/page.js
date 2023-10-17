"use client"
import { Col, Form, Row } from 'react-bootstrap';
import { HiMiniArrowSmallLeft } from 'react-icons/hi2'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppProvider, Button, Checkbox, FormLayout, InlineError, LegacyCard, LegacyStack, RadioButton, Select, Text, TextField } from '@shopify/polaris';
import { useCallback } from 'react';
import { SearchMinor } from '@shopify/polaris-icons';
import { Autocomplete, Icon } from '@shopify/polaris';
import { DataTable } from '@shopify/polaris';
const Page = () => {
    const router = useRouter()
    const [value, setValue] = useState()
    const handleChange = useCallback(
        (newValue) => setValue(newValue),
        [],
    );
    const editorRef = useRef();
    const rows = [
        ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
        ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
        [
            'Navy Merino Wool Blazer with khaki chinos and yellow belt',
            '$445.00',
            124518,
            32,
            '$14,240.00',
        ],
    ];
    // const { CKEditor, ClassicEditor} = editorRef.current || {}
    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
    }, []);

    const [selected, setSelected] = useState('today');
    const [checkedItems, setCheckedItems] = useState({
        onlineStore: false,
        pointOfSale: false,
        inbox: false,
        facebookInstagram: false,
    });

    const handleChangeCheckBox = useCallback(
        (key, newChecked) => {
            setCheckedItems((prevState) => ({
                ...prevState,
                [key]: newChecked,
            }));
        },
        []
    );
    const handleSelectChange = useCallback(
        (value) => setSelected(value),
        [],
    );

    const options = [
        { label: 'None', value: '' },
    ];
    const options2 = [
        { label: 'Pakistani rupess PKR', value: '' },
    ];



    return (
        <main className="container px-4 relative">
            <div className='mainPage'>
                <div className="px-3 py-4">
                    <h4 className="inter_semibold text-xl flex gap-2 items-center"> <div className='cursor-pointer' onClick={() => router.back()}><HiMiniArrowSmallLeft className='font-bold' /></div>
                        Create Purchase Order</h4>
                </div>
                <AppProvider>
                    <div className='AddProd mb-10'>
                        <div className='prodMain'>
                            <div className='prod'>
                                <div className='cardMain'>
                                    <div className='innerCard mb-3'>
                                        <div className='flex gap-3 items-stretch border-b pb-2'>
                                            <div className='w-50 border-e customSelect z-50 relative'>
                                                <h6 className='text-base inter_bold'>
                                                    Supplier
                                                </h6>
                                                <div className='mt-2 mb-4'>
                                                    <select className='text-xl  inter_semibold' style={{ color: "#706d68" }}>
                                                        <option value={""} className=''> Select Supplier</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='w-50'>
                                                <h6 className='text-base inter_bold'>
                                                    Destination
                                                </h6>
                                                <div className='mt-2 mb-4 z-50 relative'>
                                                    <select className='text-xl  inter_semibold' >
                                                        <option value={""} className=''> Batala Colony</option>
                                                    </select>
                                                    <div className='ms-1 mt-1' style={{ color: "#706d68" }}>
                                                        Batala Colony, Faisalabad
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between gap-4 mt-3' >
                                            <div className='w-50'>
                                                <Select
                                                    label="Payment Terms"
                                                    options={options}
                                                    onChange={handleSelectChange}
                                                    value={selected}

                                                />
                                            </div>
                                            <div className='w-50'>
                                                <Select
                                                    label="Supplier Currency"
                                                    options={options2}
                                                    onChange={handleSelectChange}
                                                    value={selected}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='innerCard mt-1 mb-3'>
                                <div className='inter_semibold '>
                                    Shipment details
                                </div>
                                <div className='mt-3 flex gap-3 w-full'>
                                    <div className='w-full'>
                                        <TextField
                                            label="Estimated Arival"
                                            value={value}
                                            type={"date"}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            placeholder='YYYY-MM-DD' />
                                    </div>
                                    <div className='w-full'>
                                        <TextField
                                            label="Shipper carrier"
                                            value={value}
                                            type={"text"}
                                            onChange={handleChange}
                                            autoComplete="off" />
                                    </div>
                                    <div className='w-full'>
                                        <TextField
                                            label="Tracking number"
                                            value={value}
                                            type={"text"}
                                            onChange={handleChange}
                                            autoComplete="off" />
                                    </div>
                                </div>
                            </div>
                            <div className='innerCard mt-1 mb-3'>

                                <div className='flex gap-3 items-end w-full'>
                                    <div className='w-full'>
                                        <TextField
                                            label="Add products"
                                            value={value}
                                            type={"search"}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            placeholder='search'
                                            prefix={<Icon source={SearchMinor} tone="base" />} />
                                    </div>
                                    <div className='w-16 inline-block'>
                                        <Button size="large" >Browse</Button>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <DataTable
                                        columnContentTypes={[
                                            'text',
                                            'numeric',
                                            'numeric',
                                            'numeric',
                                            'numeric',
                                        ]}
                                        headings={[
                                            'Product',
                                            'Price',
                                            'SKU Number',
                                            'Net quantity',
                                            'Net sales',
                                        ]}
                                        rows={rows}
                                    />
                                </div>

                            </div>
                            <div className=' flex gap-4 items-start'>
                                <div className='innerCard mt-1 mb-3 w-full'>
                                    <Text>
                                        Additional details
                                    </Text>
                                    <div className='grid gap-3 mt-3'>
                                        <div className='w-full'>
                                            <TextField
                                                label="Reference number"
                                                value={value}
                                                type={"text"}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                placeholder='' />
                                        </div>
                                        <div className='w-full'>
                                            <TextField
                                                label="Note to supplier"
                                                value={value}
                                                type={"text"}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                placeholder='' />
                                        </div>
                                        <div className='w-full'>
                                            <TextField
                                                label="Tags"
                                                value={value}
                                                type={"text"}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                placeholder='' />
                                        </div>
                                    </div>
                                </div>
                                <div className='innerCard mt-1 mb-3 w-full'>
                                    <div className='flex justify-between'>
                                        <h6>
                                            Cost summary
                                        </h6>
                                        <Link href={'/'}>
                                            Manage
                                        </Link>
                                    </div>
                                    <div className='flex mt-2 justify-between'>
                                        <h6>
                                            Taxes (Included)
                                        </h6>
                                        <h6>
                                           Rs 0.0
                                        </h6>
                                    </div>
                                    <div className='flex mt-2 justify-between'>
                                        <h6>
                                            Subtotal
                                        </h6>
                                        <h6>
                                           Rs 0.0
                                        </h6>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h6>
                                            2 items
                                        </h6>
                                    </div>
                                    <div className='flex mt-2 justify-between'>
                                        <h6>
                                            Cost adjustment
                                        </h6>
                                    </div>
                                    <div className='flex mt-2 justify-between'>
                                        <h6>
                                            Shipping
                                        </h6>
                                        <h6>
                                           Rs 0.0
                                        </h6>
                                    </div>
                                    <div className='flex mt-3 justify-between'>
                                        <h6>
                                            Total
                                        </h6>
                                        <h6>
                                           Rs 0.0
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppProvider>
            </div>
        </main >
    );
}



export default Page;
