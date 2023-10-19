"use client"
import { Col, Form, Row } from 'react-bootstrap';
import { HiMiniArrowSmallLeft } from 'react-icons/hi2'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppProvider, Button, Checkbox, FormLayout, InlineError, LegacyStack, RadioButton, Select, Text, TextField } from '@shopify/polaris';
import { useCallback } from 'react';
import { DeleteMinor } from '@shopify/polaris-icons';
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/pageComponents/Editor"), { ssr: false });
import en from "@shopify/polaris/locales/en.json";

function isValueInvalid(content) {
    if (!content) {
        return true;
    }

    return content.length < 3;
}
const Page = () => {

    const [description, setDescription] = useState('');
   const router = useRouter()
    const [value, setValue] = useState('');
    const [valueMenu2, setValueMenu2] = useState('');
    const [textFieldValue, setTextFieldValue] = useState('');
    const [selectTypeValue, setSelectTypeValue] = useState('');
    const [selectConditionValue, setSelectConditionValue] = useState('');
    
    const handleChange = useCallback(
        (newValue) => setValue(newValue),
        [],
    );
    const handleChange2 = useCallback(
        (_, newValue) => setValueMenu2(newValue),
        [],
    );

    const handleTextFieldValueChange = useCallback(
        (value) => setTextFieldValue(value),
        [],
    );

    const handleSelectTypeChange = useCallback(
        (value) => setSelectTypeValue(value),
        [],
    );

    const handleSelectConditionChange = useCallback(
        (value) => setSelectConditionValue(value),
        [],
    );

    const textFieldID = 'ruleContent';
    const isInvalid = isValueInvalid(textFieldValue);
    const errorMessage = isInvalid
        ? 'Enter 3 or more characters for product type is equal to'
        : '';



    return (
        <main className="container px-4">
            <div className='mainPage'>
                <div className="px-3 py-4">
                    <h4 className="inter_semibold text-xl flex gap-2 items-center"> <div className='cursor-pointer' onClick={() => router.back()}><HiMiniArrowSmallLeft className='font-bold' /></div>
                        Create Collection</h4>
                </div>
                <AppProvider i18n={en}>
                    <div className='AddProd mb-10'>
                        <div className='prodMain'>
                            <div className='prod'>
                                <div className='cardMain'>
                                    <div className='innerCard mb-3'>
                                        <TextField
                                            label="Title"
                                            value={value}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            placeholder='e.g. Summer, Collection' />
                                        <Form >
                                            <Form.Group className="mt-3">
                                                <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Description</Form.Label>
                                                <Editor onChange={setDescription} value={description} ></Editor>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                    <div className='innerCard mt-3 mb-3'>
                                        <Form className=''>
                                            <Form.Group className="mb-1">
                                                <Form.Label className='color_primary  inter_semibold m-0 mb-3' style={{ fontSize: "13px" }}>Media</Form.Label>
                                                <div className='relative media flex-col'>
                                                    <Form.Control
                                                        type="file"
                                                        name="name"
                                                        placeholder='Short sleeve t-shirt'
                                                        style={{ fontSize: "14px" }}
                                                        className='absolute inset-0 opacity-0 z-10'
                                                    />
                                                    <div>
                                                        <div className='flex items-center gap-3 mx-auto '>
                                                            <button className='btn1 upload'>Add image </button>
                                                        </div>
                                                    </div>
                                                    <div className='text-xs mt-2'>or drop an image  to upload</div>
                                                </div>
                                            </Form.Group>

                                        </Form>
                                    </div>
                                    {/* <div className='innerCard mb-3'>
                                        <LegacyStack vertical>
                                            <RadioButton
                                                label="Manaul"
                                                helpText="Add products to this collection one by one."
                                                checked={valueMenu === 'manaul'}
                                                id="manaul"
                                                name="accounts"
                                                onChange={handleChangeMenu}
                                            />
                                            <RadioButton
                                                label="Automated"
                                                helpText="Existing and future products that match the conditions you set will automatically be add to this collection"
                                                id="automated"
                                                name="accounts"
                                                checked={valueMenu === 'automated'}
                                                onChange={handleChangeMenu}
                                            />
                                        </LegacyStack>
                                        {valueMenu === "automated" && <>
                                            <FormLayout>{formGroupMarkup}</FormLayout>
                                        </>}
                                    </div> */}

                                </div>
                            </div>
                        </div>
                        {/* <div className='status'>
                            <div className='innerCard mt-1 price'>
                                <h6 className='inter_bold text-sm mb-2'>
                                    Publishing
                                </h6>
                                <div >
                                    Will be included in 4 sales channels
                                </div>
                                <LegacyStack vertical  spacing='extraTight'>
                                    <Checkbox
                                        label="Online Store"
                                        checked={checkedItems.onlineStore}
                                        onChange={() => handleChangeCheckBox('onlineStore', !checkedItems.onlineStore)}
                                    />
                                    <Checkbox
                                        label="Point of Sale"
                                        checked={checkedItems.pointOfSale}
                                        onChange={() => handleChangeCheckBox('pointOfSale', !checkedItems.pointOfSale)}
                                    />
                                    <Checkbox
                                        label="Inbox"
                                        checked={checkedItems.inbox}
                                        onChange={() => handleChangeCheckBox('inbox', !checkedItems.inbox)}
                                    />
                                    <Checkbox
                                        label="Facebook & Instagram"
                                        checked={checkedItems.facebookInstagram}
                                        onChange={() =>
                                            handleChangeCheckBox('facebookInstagram', !checkedItems.facebookInstagram)
                                        }
                                    />
                                </LegacyStack>
                            </div>
                            <div className='innerCard mt-3 mb-3'>
                                <Form className=''>
                                    <Form.Group className="mb-1">
                                        <Form.Label className='color_primary  inter_semibold m-0 mb-3' style={{ fontSize: "13px" }}>Media</Form.Label>
                                        <div className='relative media flex-col'>
                                            <Form.Control
                                                type="file"
                                                name="name"
                                                placeholder='Short sleeve t-shirt'
                                                style={{ fontSize: "14px" }}
                                                className='absolute inset-0 opacity-0 z-10'
                                            />
                                            <div>
                                                <div className='flex items-center gap-3 mx-auto '>
                                                    <button className='btn1 upload'>Add image </button>
                                                </div>
                                            </div>
                                            <div className='text-xs mt-2'>or drop an image  to upload</div>
                                        </div>
                                    </Form.Group>

                                </Form>
                            </div>
                            <div className='innerCard mt-3 mb-3'>
                                <Select
                                    label="Theme Template"
                                    options={options}
                                    onChange={handleSelectChange}
                                    value={selected}
                                />
                            </div>
                        </div> */}
                    </div>
                </AppProvider>
            </div>
        </main >
    );
}



export default Page;
