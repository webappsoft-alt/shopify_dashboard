"use client"
import { Col, Form, Row } from 'react-bootstrap';
import { HiMiniArrowSmallLeft } from 'react-icons/hi2'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/pageComponents/Editor"), { ssr: false });

const Page = () => {
    const [color, setColor] = useState(false)
    const router = useRouter()
    const [description, setDescription] = useState('');
   
    return (
        <main className="container px-4">
            <div className='mainPage'>
                <div className="px-3 py-4">
                    <h4 className="inter_semibold text-xl flex gap-2 items-center"> <span onClick={() => router.push('/home')}><HiMiniArrowSmallLeft className='font-bold' /></span>
                        Add Product</h4>
                </div>
                <div className='AddProd mb-10 relative z-50'>
                    <div className='prodMain'>
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
                                           <Editor onChange={setDescription} value={description} ></Editor>
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

                                <div className='innerCard mt-1 mb-3 price'>
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
                                <div className='innerCard2 mt-1 mb-3 price'>
                                    <Form className='p-3'>
                                        <Form.Label className='color_primary  inter_semibold m-0 mb-2' style={{ fontSize: "13px" }}>Shipping</Form.Label>

                                        <Form.Group className="mb-2">
                                            <Form.Check
                                                label="This product requires shipping"
                                                style={{ fontSize: "16px" }}
                                                className='mt-2' />
                                        </Form.Group>
                                        <Row >
                                            <Col xl='3' lg='5' xs="8" >
                                                <Form.Group className="mb-1">
                                                    <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Weight</Form.Label>
                                                    <div className='relative'>
                                                        <Form.Control
                                                            type="text"
                                                            name="name"
                                                            placeholder='0.0'
                                                            style={{ fontSize: "14px" }}
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col xl='2' lg='4' xs="4" >
                                                <Form.Group className="mb-1">
                                                    <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Profit</Form.Label>
                                                    <div className='relative'>
                                                        <Form.Select>
                                                            <option>lb</option>
                                                            <option>oz</option>
                                                            <option >Kg</option>
                                                            <option>g</option>
                                                        </Form.Select>
                                                    </div>
                                                </Form.Group>
                                            </Col>

                                        </Row>
                                    </Form>
                                    <div>
                                        <hr className="Polaris-Divider_myoit p-0 m-0" style={{ borderBlockStart: "0.0625rem solid #ebebeb" }} />
                                    </div>
                                    <div className='flex items-center color2 f13 p-3'>
                                        <span className='Polaris-Icon_yj27d2'>
                                            <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M 10.75 6.75 a 0.75 0.75 0 0 0 -1.5 0 v 2.5 h -2.5 a 0.75 0.75 0 0 0 0 1.5 h 2.5 v 2.5 a 0.75 0.75 0 0 0 1.5 0 v -2.5 h 2.5 a 0.75 0.75 0 0 0 0 -1.5 h -2.5 v -2.5 Z"></path>
                                            </svg>
                                        </span>
                                        Add customs information
                                    </div>
                                </div>
                                <div className='innerCard2 mt-1 price'>
                                    <Form className='p-3'>
                                        <Form.Label className='color_primary  inter_semibold m-0 mb-2' style={{ fontSize: "13px" }}>Variants</Form.Label>
                                        {color === true &&
                                            <div className='px-5 py-3'>
                                                <Form.Group className="mb-1">
                                                    <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Option name</Form.Label>
                                                    <div className='relative'>
                                                        <Form.Select>
                                                            <option >Size</option>
                                                            <option>Color</option>
                                                            <option >Material</option>
                                                            <option>Style</option>
                                                        </Form.Select>
                                                    </div>
                                                </Form.Group>
                                                <Form.Group className="mb-1 mt-3">
                                                    <Form.Label className='color_primary m-0 mb-1' style={{ fontSize: "13px" }}>Option values</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        placeholder='medium'
                                                        style={{ fontSize: "14px" }}
                                                    />
                                                </Form.Group>
                                            </div>}
                                    </Form>
                                    <div>
                                        <hr className="Polaris-Divider_myoit p-0 m-0" style={{ borderBlockStart: "0.0625rem solid #ebebeb" }} />
                                    </div>
                                    {color === false &&
                                        <div className='flex items-center color2 f13 p-3' onClick={() => { setColor(true) }}>
                                            <span className='Polaris-Icon_yj27d2'>
                                                <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M 10.75 6.75 a 0.75 0.75 0 0 0 -1.5 0 v 2.5 h -2.5 a 0.75 0.75 0 0 0 0 1.5 h 2.5 v 2.5 a 0.75 0.75 0 0 0 1.5 0 v -2.5 h 2.5 a 0.75 0.75 0 0 0 0 -1.5 h -2.5 v -2.5 Z"></path>
                                                </svg>
                                            </span>
                                            <div className='color2 link2 cursor-pointer'>Add options like size or color</div>
                                        </div>}
                                    {color === true &&
                                        <div className='flex items-center color2 f13 p-3' >
                                            <span className='Polaris-Icon_yj27d2'>
                                                <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M 10.75 6.75 a 0.75 0.75 0 0 0 -1.5 0 v 2.5 h -2.5 a 0.75 0.75 0 0 0 0 1.5 h 2.5 v 2.5 a 0.75 0.75 0 0 0 1.5 0 v -2.5 h 2.5 a 0.75 0.75 0 0 0 0 -1.5 h -2.5 v -2.5 Z"></path>
                                                </svg>
                                            </span>
                                            <div className='color2 link2 cursor-pointer'>Add another option</div>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='status'>
                        <div className='innerCard mt-1 price'>
                            <Form className=''>
                                <Form.Group className="mb-1">
                                    <Form.Label className='color_primary  inter_semibold m-0 mb-2' style={{ fontSize: "13px" }}>Status</Form.Label>
                                    <div className='relative'>
                                        <Form.Select>
                                            <option >Active</option>
                                            <option>Draft</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;