/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { HiMiniArrowSmallLeft } from 'react-icons/hi2'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppProvider, Button, Checkbox, Form, FormLayout, Frame, LegacyStack, Modal, Select, Text, TextField } from '@shopify/polaris';
import { useCallback } from 'react';
import { SearchMinor } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';
import SearchableProducts from '@/components/pageComponents/searchableProducts';
import { EditMajor } from '@shopify/polaris-icons';
import en from "@shopify/polaris/locales/en.json";
import { CircleInformationMajor } from '@shopify/polaris-icons';
import AddSearchCustomer from '@/components/pageComponents/addSearchCustomer';
import { ArrowLeftMinor } from '@shopify/polaris-icons';
const CreateOrder = () => {
    const router = useRouter()
    const [searchValue, setSearchValue] = useState("")
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [browse, setBrowse] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(['']);
    const [titleData, setTitleData] = useState('All Products');
    const handleChangeSearch = useCallback(
        (newValue) => {
            setSearchValue(newValue)
            setBrowse(false)
        },

        [],
    );
    const optionProduct = [
        { value: 'all_products', label: 'All Products' },
        { value: 'collection', label: 'Collection' },
        { value: 'products_type', label: 'Products types' },
        { value: 'tags', label: 'Tags' },
        { value: 'vendor', label: 'Vendor' },
    ]
    const toggleModal = useCallback(() => setActive((active) => !active), []);
    const toggleModal2 = useCallback(() => setActive2((active2) => !active2), []);
    const toggleModal3 = useCallback(() => setActive3((active3) => !active3), []);
    const [newsletter, setNewsletter] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = useCallback(() => {
        setEmail('');
        setNewsletter(false);
    }, []);

    const handleNewsLetterChange = useCallback(
        (value) => setNewsletter(value),
        [],
    );
    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback(
        (value) => setSelected(value),
        [],
    );

    const options = [
        { label: 'kg', value: 'kg' },
    ];
    const handleEmailChange = useCallback((value) => setEmail(value), []);
    useEffect(() => {
        if (searchValue !== "") {
            toggleModal()
        }
        else{
            setSearchValue("")
        }
    }, [searchValue])
    useEffect(() => {
        if (selectedProduct.length > 0) {
            console.log(selectedProduct)
            for (let index = 0; index < optionProduct.length; index++) {
                const element = optionProduct[index];
                if (element.value === selectedProduct[0]) {
                    setBrowse(false)
                    setTitleData(element.label)
                }

            }
        }
    }, [selectedProduct])

    return (
        <main className="container px-2 relative">
            <div className='mainPage'>
                <div className="px-3 py-4">
                    <h4 className="inter_semibold text-xl flex gap-2 items-center"> <div className='cursor-pointer' onClick={() => router.back()}><HiMiniArrowSmallLeft className='font-bold' /></div>
                        Create Order</h4>
                </div>
                <AppProvider i18n={en}>
                    <Frame>
                        <Modal
                            open={active}
                            onClose={toggleModal}
                            title={<div className='flex gap-2 items-center'>
                                {browse === false &&
                                    <div className='' onClick={() => setBrowse(true)}>
                                        <Icon
                                            source={ArrowLeftMinor}
                                            tone="base"
                                        />
                                    </div>}
                                {titleData}
                            </div>
                            }
                            primaryAction={{
                                content: 'Close',
                                onAction: toggleModal,
                            }}
                        >
                            <Modal.Section>
                                <div style={{ height: "auto" }}>
                                    <SearchableProducts setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} browse={browse} searchValue={searchValue} />
                                </div>
                            </Modal.Section>
                        </Modal>
                        <Modal
                            // activator={active}
                            open={active3}
                            onClose={toggleModal3}
                            title="Select products"
                            primaryAction={{
                                content: 'Done',
                                onAction: toggleModal3,
                            }}
                            secondaryActions={{
                                content: 'Cancel',
                                onAction: toggleModal3,
                            }}
                        >
                            <Modal.Section>
                                <LegacyStack vertical>
                                    <LegacyStack.Item>
                                        <TextField
                                            value={email}
                                            onChange={handleEmailChange}
                                            label="Notes"
                                            type="text"
                                        />
                                    </LegacyStack.Item>
                                </LegacyStack>
                            </Modal.Section>
                        </Modal>
                        <Modal
                            // activator={active}
                            open={active2}
                            onClose={toggleModal2}
                            title="Add custom item"
                            primaryAction={{
                                content: 'Add Item',
                                onAction: toggleModal2,
                            }}
                            secondaryActions={{
                                content: 'Cancel',
                                onAction: toggleModal2,
                            }}
                        >
                            <Modal.Section>
                                <LegacyStack vertical>
                                    <LegacyStack.Item>
                                        <Form onSubmit={handleSubmit}>
                                            <FormLayout>
                                                <div className="pb-2 grid gap-3 border-b">
                                                    <div className="flex gap-2">
                                                        <div className="w-full">
                                                            <TextField
                                                                value={email}
                                                                onChange={handleEmailChange}
                                                                label="Item name"
                                                                type="text"
                                                            />
                                                        </div>
                                                        <div className='flex gap-2 items-center'>
                                                            <div className="w-full">
                                                                <TextField
                                                                    value={email}
                                                                    onChange={handleEmailChange}
                                                                    label="Price"
                                                                    type="text"
                                                                    placeholder='Rs 0.00'
                                                                />
                                                            </div>
                                                            <div className="w-full">
                                                                <TextField
                                                                    value={email}
                                                                    onChange={handleEmailChange}
                                                                    label="Quantity"
                                                                    type="number"
                                                                    placeholder='0'
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid">
                                                        <Checkbox
                                                            label="Item is taxable"
                                                            checked={newsletter}
                                                            onChange={handleNewsLetterChange}
                                                        />
                                                        <Checkbox
                                                            label="Item requires shipping"
                                                            checked={newsletter}
                                                            onChange={handleNewsLetterChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center">

                                                    <div className='full'>
                                                        <TextField
                                                            value={email}
                                                            onChange={handleEmailChange}
                                                            label="Item weight (optional)"
                                                            type="number"
                                                            helpText={'Used to calculate shipping rates accurately'}
                                                        />
                                                    </div>
                                                    <Select
                                                        options={options}
                                                        onChange={handleSelectChange}
                                                        value={selected}
                                                    />
                                                </div>
                                            </FormLayout>
                                        </Form>
                                    </LegacyStack.Item>
                                </LegacyStack>
                            </Modal.Section>
                        </Modal>
                        {/* </Frame> */}
                        <div className='AddProd mb-10'>
                            <div className='prodMain'>
                                <div className=' w-full'>
                                    <div className='innerCard mt-1 mb-3'>
                                        <div className='flex justify-between items-center'>
                                            <div className=''>
                                                Products
                                            </div>
                                            <div>
                                                <Button onClick={toggleModal2} variant="plain" tone="critical" >Add custom item</Button>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 relative items-end w-full'>
                                            <div className='w-full mt-2'>
                                                <TextField
                                                    value={searchValue}
                                                    type={"search"}
                                                    onChange={handleChangeSearch}
                                                    autoComplete="off"
                                                    placeholder='Search Products'
                                                    prefix={<Icon source={SearchMinor} tone="base" />} />
                                            </div>

                                            <div className='w-16 inline-block'>
                                                <Button onClick={() => {
                                                    setBrowse(true)
                                                    toggleModal()
                                                }} size="large" >Browse</Button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='innerCard mt-1 mb-3 w-full'>
                                        <div className='flex justify-between'>
                                            <h6>
                                                Payment
                                            </h6>
                                        </div>
                                        <div className='px-3 py-3 flex flex-col gap-3 mt-2 rounded-xl border'>
                                            <div className='flex justify-between'>
                                                <h6>
                                                    Subtotal
                                                </h6>
                                                <h6>
                                                    Rs 0.00
                                                </h6>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h6>
                                                    Add discount
                                                </h6>
                                                <h6>
                                                    Rs 0.00
                                                </h6>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h6>
                                                    Add shipping or delivery
                                                </h6>
                                                <h6>
                                                    Rs 0.0
                                                </h6>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h6 className='flex gap-1 items-center1'>
                                                    Estimated tax <Link href={'/'}><Icon source={CircleInformationMajor} tone="base" /></Link>
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
                            <div className='status'>
                                <div className='innerCard mt-1 price'>
                                    <div className='flex justify-between'>
                                        <Text>
                                            Notes
                                        </Text>
                                        <div onClick={toggleModal3} >
                                            <Icon
                                                source={EditMajor}
                                                tone="base"
                                            />
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        notes
                                    </div>
                                </div>
                                <div className='innerCard mt-3 price'>
                                    <AddSearchCustomer></AddSearchCustomer>
                                </div>
                            </div>
                        </div>
                    </Frame>
                    
                </AppProvider>

            </div>
        </main >
    );
}



export default CreateOrder;
