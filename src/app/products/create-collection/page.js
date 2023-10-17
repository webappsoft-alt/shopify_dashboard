"use client"
import { Col, Form, Row } from 'react-bootstrap';
import { HiMiniArrowSmallLeft } from 'react-icons/hi2'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppProvider, Button, Checkbox, FormLayout, InlineError, LegacyCard, LegacyStack, RadioButton, Select, Text, TextField } from '@shopify/polaris';
import { useCallback } from 'react';
import { DeleteMinor } from '@shopify/polaris-icons';
function isValueInvalid(content) {
    if (!content) {
        return true;
    }

    return content.length < 3;
}
const Page = () => {
    const [color, setColor] = useState(false)
    const router = useRouter()

    const [description, setDescription] = useState('');
    const handleCKEditor = (event, editor) => {
        const data = editor.getData();
        setDescription(data)
    }
    const editorRef = useRef();
    // const { CKEditor, ClassicEditor} = editorRef.current || {}
    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
    }, []);

    const [value, setValue] = useState('');
    const [valueMenu, setValueMenu] = useState('');
    const [valueMenu2, setValueMenu2] = useState('');
    const [textFieldValue, setTextFieldValue] = useState('');
    const [selectTypeValue, setSelectTypeValue] = useState('');
    const [selectConditionValue, setSelectConditionValue] = useState('');
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
        { label: 'default collection', value: '' },
        { label: 'Yesterday', value: 'yesterday' },
        { label: 'Last 7 days', value: 'lastWeek' },
    ];
    const handleChangeMenu = useCallback(
        (_, newValue) => setValueMenu(newValue),
        [],
    );
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


    const formGroupMarkup = (
        <>
            <Text>
                Conditions
            </Text>
            <div className='my-3'>
                <LegacyStack alignment="center" spacing="loose" >
                    <Text>Product must match: </Text>
                    <RadioButton
                        label="all conditions"
                        checked={valueMenu2 === 'allCondition'}
                        id="allCondition"
                        name="conditions"
                        onChange={handleChange2}
                    />
                    <RadioButton
                        label="any condition"
                        id="anyCondition"
                        name="conditions"
                        checked={valueMenu2 === 'anyCondition'}
                        onChange={handleChange2}
                    />
                </LegacyStack>
            </div>
            <LegacyStack wrap={false} alignment="leading" spacing="loose">
                <LegacyStack.Item fill>
                    <FormLayout>
                        <FormLayout.Group condensed>
                            <Select
                                labelHidden
                                label="Collection rule type"
                                options={['Product type']}
                                value={selectTypeValue}
                                onChange={handleSelectTypeChange}
                            />
                            <Select
                                labelHidden
                                label="Collection rule condition"
                                options={['is equal to']}
                                value={selectConditionValue}
                                onChange={handleSelectConditionChange}
                            />
                            <TextField
                                labelHidden
                                label="Collection rule content"
                                error={isInvalid}
                                id={textFieldID}
                                value={textFieldValue}
                                onChange={handleTextFieldValueChange}
                                autoComplete="off"
                            />
                        </FormLayout.Group>
                    </FormLayout>
                    <div style={{ marginTop: '4px' }}>
                        <InlineError message={errorMessage} fieldID={textFieldID} />
                    </div>
                </LegacyStack.Item>
                {/* <Button icon={DeleteMinor} accessibilityLabel="Remove item" /> */}
            </LegacyStack>
        </>
    );
    return (
        <main className="container px-4">
            <div className='mainPage'>
                <div className="px-3 py-4">
                    <h4 className="inter_semibold text-xl flex gap-2 items-center"> <div  className='cursor-pointer' onClick={() => router.back()}><HiMiniArrowSmallLeft className='font-bold' /></div>
                        Create Collection</h4>
                </div>
                <AppProvider>
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
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={description}
                                                    config={{
                                                        toolbar: [
                                                            'heading',
                                                            '|',
                                                            'bold',
                                                            'italic',
                                                            'underline',
                                                            'color',
                                                            '|',
                                                            'imageTextAlternative',
                                                            'imageUpload',
                                                            'imageStyle:full',
                                                            'imageStyle:side',
                                                            '|',
                                                            'mediaEmbed',
                                                            'insertTable',
                                                            'tableColumn',
                                                            'tableRow',
                                                            'mergeTableCells',
                                                            '|',
                                                            'undo',
                                                            'redo',
                                                        ],
                                                    }}
                                                    onChange={handleCKEditor}
                                                />
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
