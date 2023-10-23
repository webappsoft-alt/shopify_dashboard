/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { HiMiniArrowSmallLeft } from 'react-icons/hi2'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ActionList, AppProvider, Badge, Button, ButtonGroup, Checkbox, Form, FormLayout, Frame, LegacyStack, Modal, Popover, Select, Text, TextField } from '@shopify/polaris';
import { useCallback } from 'react';
import { ClipboardMinor } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';
import SearchableProducts from '@/components/pageComponents/searchableProducts';
import { EditMajor } from '@shopify/polaris-icons';
import en from "@shopify/polaris/locales/en.json";
import { CircleInformationMajor } from '@shopify/polaris-icons';
import AddSearchCustomer from '@/components/pageComponents/addSearchCustomer';
import { ArrowLeftMinor } from '@shopify/polaris-icons';
import content from '@/components/assests/png/content.png'
import {
    UnfulfilledMajor
} from '@shopify/polaris-icons';
import {
    MarkPaidMinor
} from '@shopify/polaris-icons';
import Image from 'next/image';

const OrderDetail = () => {
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
        else {
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
    const [popoverActive, setPopoverActive] = useState(true);

    const togglePopoverActive = useCallback(
        () => setPopoverActive((popoverActive) => !popoverActive),
        [],
    );

    const activator = (
        <Button onClick={togglePopoverActive} disclosure>
            More actions
        </Button>
    );
    return (
        <main className="container  px-4 relative">
            <div className='mainPage more_action'>
                <AppProvider i18n={en}>
                    <div className="px-3 py-4">
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-1'>
                                <div className='cursor-pointer' onClick={() => router.back()}><HiMiniArrowSmallLeft className='font-bold text-2xl' /></div>
                                <div>
                                    <h4 className="inter_semibold text-xl flex gap-2 items-center">
                                        gch-1002 <Badge progress='complete' >paid</Badge>  <Badge progress='incomplete' tone='attention' >Unfulfilled</Badge> </h4>
                                    <div style={{ color: "#303030" }}>
                                        September 18, 2023 at 7:30 pm
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex gap-2 relative '>
                                    <Button variant='tertiary' >Refund</Button>
                                    <Button variant='tertiary' onClick={()=>router.push('/order/create-order')} dataPrimaryLink >Edit</Button>
                                    <Popover
                                        active={popoverActive}
                                        activator={activator}
                                        autofocusTarget="first-node"
                                        onClose={togglePopoverActive}>
                                        <ActionList
                                            actionRole="menuitem"
                                            items={[{ content: 'Import' }, { content: 'Export' }]}
                                        />
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>

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
                        <div className='AddProd mb-10'>
                            <div className='prodMain'>
                                <div className=' w-full'>
                                    <div className='innerCard mt-1 mb-3 w-full'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <Badge tone='attention'>
                                                    <div className='flex items-center gap-1'>
                                                        <Icon
                                                            source={UnfulfilledMajor}
                                                            tone="base"
                                                        />
                                                        Unfulfilled (1)
                                                    </div>
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className='px-3 py-3 flex flex-col gap-3 mt-3 mb-3 rounded-xl border'>
                                            <div className='flex gap-2 items-center  justify-between'>
                                                <div className='flex items-center gap-2'>
                                                    <div>
                                                        <Image src={content} alt='' className='object-contain w-9 h-11' />
                                                    </div>
                                                    <div className='maxDetailWidth'>
                                                        <Link href={""}>MARIA.B COUTURE SAREE ICE BLUE  MC_049</Link>
                                                    </div>
                                                </div>
                                                <div>
                                                    RS 14,500 x 1
                                                </div>
                                                <div>
                                                    RS 14,500
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-end'>
                                            <Button variant='primary'>Fulfill item</Button>
                                        </div>
                                    </div>
                                    <div className='innerCard mt-1 mb-3 w-full'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <Badge tone='attention'>
                                                    <div className='flex items-center gap-1'>
                                                        <Icon
                                                            source={UnfulfilledMajor}
                                                            tone="base"
                                                        />
                                                        Unfulfilled (1)
                                                    </div>
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className='px-3 py-3 flex flex-col gap-3 mt-3 mb-3 rounded-xl border'>
                                            <div className='flex gap-2 items-center  justify-between'>
                                                <div className='flex items-center gap-2'>
                                                    <div>
                                                        <Image src={content} alt='' className='object-contain w-9 h-11' />
                                                    </div>
                                                    <div className='maxDetailWidth'>
                                                        <Link href={""}>MARIA.B COUTURE SAREE ICE BLUE  MC_049</Link>
                                                    </div>
                                                </div>
                                                <div>
                                                    RS 14,500 x 1
                                                </div>
                                                <div>
                                                    RS 14,500
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-end'>
                                            <Button variant='primary'>Fulfill item</Button>
                                        </div>
                                    </div>
                                    <div className='innerCard mt-1 mb-3 w-full'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <Badge tone=' ' progress="" >
                                                    <div className='flex items-center gap-1'>
                                                        <Icon
                                                            source={MarkPaidMinor}
                                                            tone="base"
                                                        />
                                                       Paid
                                                    </div>
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className='px-3 py-2 flex flex-col gap-3 mt-2 '>
                                            <div className='flex justify-between'>
                                                <h6>
                                                    Subtotal
                                                </h6>
                                                <h6>
                                                    Rs 0.00
                                                </h6>
                                            </div>
                                            <div className='flex justify-between'>
                                                <h6 className='inter_semibold'>
                                                    Total
                                                </h6>
                                                <h6>
                                                    Rs 0.0
                                                </h6>
                                            </div>

                                            <div className='flex pt-2 mt-1 justify-between border-t'>
                                                <div className=' ' >
                                                    To be paid by customer
                                                </div>
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
                                    <div>
                                        <div className='inter_semibold'>
                                            Customer
                                        </div>
                                        <div className='mt-1'>
                                            No order
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='my-2 py-1 inter_semibold'>
                                            Contact Information
                                        </div>
                                        <div className='mt-1'>
                                            No email provided
                                        </div>
                                        <div className=''>
                                            +92 30404004030
                                        </div>
                                        <div className=''>
                                            No account
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='my-2 py-1 inter_semibold'>
                                            Shipping address
                                        </div>
                                        <div className='mt-1'>
                                            No shipping address provided
                                        </div>

                                    </div>
                                    <div className=''>
                                        <div className='my-2 py-1 inter_semibold'>
                                            Billing address
                                        </div>
                                        <div className='mt-1'>
                                            No billing address provided
                                        </div>

                                    </div>
                                    <div className=''>
                                        <div className='my-2 py-1 inter_semibold'>
                                            Marketing
                                        </div>
                                        <div className='mt-1'>
                                            Email not subscribed
                                        </div>
                                        <div className='mt-1'>
                                            SMS not subscribed
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Frame>

                </AppProvider>

            </div>
        </main >
    );
}



export default OrderDetail;
