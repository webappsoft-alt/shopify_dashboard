"use client"
import { Col, Form, Row } from 'react-bootstrap';
import { HiMiniArrowSmallLeft } from 'react-icons/hi2'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter()
 
    const [description, setDescription] = useState('');
    const handleCKEditor = (event, editor) => {
        const data = editor.getData();
        setDescription(data)
    }
    const editorRef = useRef();

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
    }, []);
    return (
        <main className="container">
            <div className='mainPage'>
                <div className="px-3 py-4">
                    <h4 className="inter_semibold text-xl flex gap-2 items-center"> <span onClick={()=>router.push('/home')}><HiMiniArrowSmallLeft className='font-bold' /></span>
                        Add Product</h4>
                </div>
                <div className='prod'>
                    <div className='cardMain'>
                        <div className='innerCard mb-3'>
                            <Form>
                                <Form.Group className="mb-1">
                                    <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder='Short sleeve t-shirt'
                                        style={{ fontSize: "14px" }}
                                    />
                                </Form.Group>
                                <Form.Group className="">
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
                        <div className='innerCard mt-1 mb-3'>
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
                                                <button className='btn1 upload'>Upload new </button>
                                                <Link href={'/'} className='color_primary text-xs relative z-20 link_hove'> Add from URL</Link>
                                            </div>
                                        </div>
                                        <div className='text-xs mt-2'>Accepts images, videos, or 3D models</div>
                                    </div>
                                </Form.Group>

                            </Form>
                        </div>
                        <div className='innerCard mt-1 price'>
                            <Form>
                                <Form.Label className='color_primary  inter_semibold m-0 mb-2' style={{ fontSize: "13px" }}>Pricing</Form.Label>
                                <Row>
                                    <Col xl='4' xs='6'  >
                                        <Form.Group className="mb-1">
                                            <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Price</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder='RS 0.00'
                                                style={{ fontSize: "14px" }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xl='4' xs='6' >
                                        <Form.Group className="mb-1">
                                            <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Compare-at price</Form.Label>
                                            <div className='relative'>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder='RS 0.00'
                                                    style={{ fontSize: "14px" }}
                                                />
                                                <div className='absolute top-0 bottom-0 right-0 me-3 flex items-center justify-center '>
                                                    <div className='ques'>?</div>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-1">
                                    <Form.Check
                                        label="Charge tax on this product"
                                        style={{ fontSize: "16px" }}
                                        className='mt-2' />
                                </Form.Group>
                                <Row>
                                    <Col xl='4' xs='6'  >
                                        <Form.Group className="mb-1">
                                            <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Cost per item</Form.Label>
                                            <div className='relative'>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder='RS 0.00'
                                                    style={{ fontSize: "14px" }}
                                                />
                                                <div className='absolute top-0 bottom-0 right-0 me-3 flex items-center justify-center '>
                                                    <div className='ques'>?</div>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col xl='4' xs='6' >
                                        <Form.Group className="mb-1">
                                            <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Profit</Form.Label>
                                            <div className='relative'>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder='--'
                                                    disabled
                                                    style={{ fontSize: "14px" }}
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col xl='4' xs='6' >
                                        <Form.Group className="mb-1">
                                            <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Margin</Form.Label>
                                            <div className='relative'>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder='--'
                                                    disabled
                                                    style={{ fontSize: "14px" }}
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;