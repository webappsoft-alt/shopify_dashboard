"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Accordion } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
// import { Image } from "next/image";
const Page = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [heightedDiv, setHeightedDiv] = useState(true);
  const [details, setDetails] = useState(true);
  const [details2, setDetails2] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const handleAccordionToggle = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(index);
      setActiveAccordion(null);
    } else {
  
      setActiveAccordion(index);
    }
  };
  const toggleRotation = () => {
    setIsRotated(!isRotated);
    // setHeightedDiv(!heightedDiv);
  };
  const handleDetail = () => {
    setDetails(!details);
    setDetails2(true);
  };
  const handleDetail2 = () => {
    setDetails2(!details2);
    setDetails(true);
  };
  const handleDiv = () => {
    alert("working");
  };
  const now = 5;
  return (
    <>
      <div className="2xl:container px-md-4 px-2 mx-auto mt-3">
        <div
          className="trial d-flex justify-between align-items-center gap-5
        "
        >
          <div className="extend font_medium">Extend your plane for $1/Month for 3 months on select plane</div>
          <div className="flex flex-row align-middle gap-3">
            <div>
              <button className="planButton font_medium">Select a plan</button>
            </div>
            <div className="" style={{ marginTop: "0.1rem" }}>
              X
              {/* <Image
                src="/cross.png"
                width={20}
                height={10}
                alt="cross image"
              /> */}
            </div>
          </div>
        </div>
        <div
          className={`bg-white mt-4  rounded-xl  ${
            heightedDiv ? "increase" : ""
          }`}
          style={{ borderRadius: "0.7rem", position: "relative" , border:"1px solid #E5E5E5"}}
        >
          <div className="p-6">
            <div className="d-flex align-items-center justify-content-between">
              <h4  className="m-0 pb-2 ">Setup guide</h4>
              <button
                onClick={toggleRotation}
                className={`button p-1 ${isRotated ? "rotate-button" : ""}`}
                style={{ borderRadius: "7px", backgroundColor: "#EBEBEB" }}
              >
                <FaCaretDown
                  className={`dropdown-icon ${isRotated ? "rotateIcon" : ""}`}
                />
              </button>
            </div>
            <p className="mb-2">Use this personalized guide to get your store up and running</p>
            <div className="d-flex align-items-center justify-content-between ">
              <p className="m-0">0 to 10 tasks completed</p>
              <ProgressBar now={now} />
            </div>
          </div>
          {
            isRotated &&
        <>
        <Accordion defaultActiveKey="0" activeKey={activeAccordion === 0 ? '0' : null}>
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={() => handleAccordionToggle(0)}>
              <h4 className="font_medium fw_sb">
              Setup your online store
              </h4>
              </Accordion.Header>
              <Accordion.Body>
                <div
                  className="d-flex flex-column "
                >
                  {details ? (
                    <div
                      className="head d-flex align-items-start gap-3 hoverClass"
                      onClick={handleDetail}
                      style={{ cursor: "pointer" }}
                    >
                      <div class="rounded-circle"></div>
                      <p className="m-0">Add your first product</p>
                    </div>
                  ) : (
                    <>
                      <div className="add_product">
                        <div className="head d-flex align-items-start gap-3">
                          <div class="rounded-circle"></div>
                          <div>
                            <h4 className="m-0">Add your first product</h4>
                            <p className="pt-3 " style={{ fontSize: "13px" }}>
                              Write a description, add photos, and set pricing
                              for the products you plan to sell.{" "}
                              <Link className="link-no-underline" href={"/"}>
                                Learn More
                              </Link>
                            </p>
                            <div className="d-flex align-items-center gap-4">
                              <button className="add_btn">Add Product</button>
                    
                            </div>
                          </div>
                          <div className="ps-5">
                            <Image
                              src="/add-product.svg"
                              width={240}
                              height={240}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {/* {details2 ? (
                    <div
                      className="head d-flex align-items-start gap-3 hoverClass"
                      onClick={handleDetail2}
                      style={{ cursor: "pointer" }}
                    >
                      <div class="rounded-circle"></div>
                      <p className="m-0">Customize your online store</p>
                    </div>
                  ) : (
                    <>
                      <div className="add_product">
                        <div className="head d-flex align-items-start gap-3">
                          <div class="rounded-circle"></div>
                          <div>
                            <h6 className="m-0">Customize your online store</h6>
                            <p className="pt-3 " style={{ fontSize: "15px" }}>
                              Choose a theme and add your logo, colors, and
                              images to reflect your brand.{" "}
                              <Link className="link-no-underline" href={"/"}>
                                Learn More
                              </Link>
                            </p>
                            <div className="d-flex align-items-center gap-4">
                              <button className="add_btn">
                                Customize theme
                              </button>
                            </div>
                          </div>
                          <div className="ps-5">
                            <Image
                              src="/add-product.svg"
                              width={240}
                              height={240}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )} */}
                 
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" activeKey={activeAccordion === 1 ? '0' : null}>
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={() => handleAccordionToggle(1)}>
              <h4 className="font_medium fw_sb">
              Store settings
              </h4>
              </Accordion.Header>
              <Accordion.Body>
            
                   {details2 ? (
                    <div
                      className="head d-flex align-items-start gap-3 hoverClass"
                      onClick={handleDetail2}
                      style={{ cursor: "pointer" }}
                    >
                      <div class="rounded-circle"></div>
                      <p className="m-0">Name your store</p>
                    </div>
                  ) : (
                    <>
                      <div className="add_product">
                        <div className="head d-flex align-items-start gap-4">
                          <div class="rounded-circle"></div>
                          <div>
                            <h4 className="m-0">Name your store</h4>
                            <p className="pt-3 " style={{ fontSize: "13px" }}>
                            Your temporary store name is currently My Store. The store name appears in your admin and your online store.{' '}
                              <Link className="link-no-underline" href={"/"}>
                                Learn More
                              </Link>
                            </p>
                            <div className="d-flex align-items-center gap-4">
                           
                              <Link href={'/storeDetails'}>    <button  className="add_btn">Name Store
                              </button>

                              </Link>
                            
                            </div>
                          </div>
                          <div className="ps-5">
                            <Image
                              src="/add-product.svg"
                              width={240}
                              height={240}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
              
                <div
                  className="d-flex flex-column mt-2"
                  // style={{ padding: "1rem .7rem" }}
                >
                  {/* <div
                    className="head d-flex align-items-start gap-3 hoverClass"
                    style={{ cursor: "pointer" }}
                  >
                    <div class="rounded-circle"></div>
                    <p className="m-0">setup your online store</p>
                  </div> */}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </> }
        </div>
      </div>
    </>
  );
};

export default Page;
