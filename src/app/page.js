"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Accordion } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
// import { Image } from "next/image";
const Page = () => {
  const [isRotated, setIsRotated] = useState(true);
  const [heightedDiv, setHeightedDiv] = useState(true);
  const [details, setDetails] = useState(false);
  const [details2, setDetails2] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(0);
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
  const now = 1;
  return (
    <>
      <div className="2xl:container grid mx-auto mt-3">
        <div className="home mx-auto px-2">
          <div
            className={`bg-white mt-4  rounded-xl  ${heightedDiv ? "increase" : ""}`}
            style={{ borderRadius: "0.7rem", position: "relative", border: "1px solid #E5E5E5" }}>
            <div className="p-6">
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="m-0 pb-2 homeFont color1 ">Setup guide</h6>
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
              <p className="mb-2 f13">Use this personalized guide to get your store up and running</p>
              <div className="d-flex align-items-center justify-content-between ">
                <p className="m-0 f13" style={{ color: "#616161" }}>0 to 9 tasks completed</p>
                <ProgressBar now={now} />
              </div>
            </div>
            {
              isRotated &&
              <>
                <Accordion defaultActiveKey="0" activeKey={activeAccordion === 0 ? '0' : null}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={() => handleAccordionToggle(0)}>
                      <h4 className=" f13 homeFont" style={{ color: "#303030" }}>
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
                            <div className="rounded-circle"></div>
                            <p className="m-0">Add your first product</p>
                          </div>
                        ) : (
                          <>
                            <div className="add_product">
                              <div className="head d-flex align-items-start gap-3">
                                <div><div className="rounded-circle"></div></div>
                                <div>
                                  <h4 className="m-0 homeFont">Add your first product</h4>
                                  <p className="pt-3 f13 color1" style={{ fontSize: "13px" }}>
                                    Write a description, add photos, and set pricing
                                    for the products you plan to sell.{" "}
                                    <Link className="link-no-underline f13 opacity-80" href={"/"}>
                                      Learn More
                                    </Link>
                                  </p>
                                  <div className="d-flex align-items-center gap-4">
                                    <Link href={'/products/add-product'} className="add_btn">Add Product</Link>
                                  </div>
                                </div>
                                <div className="ps-5  max-[600px]:hidden ">
                                  <Image
                                    src="/add-product.svg"
                                    width={240}
                                    height={240} alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0" activeKey={activeAccordion === 1 ? '0' : null}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={() => handleAccordionToggle(1)}>
                      <h4 className=" f13 homeFont" style={{ color: "#303030" }}>
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
                          <div className="rounded-circle"></div>
                          <p className="m-0">Name your store</p>
                        </div>
                      ) : (
                        <>
                          <div className="add_product">
                            <div className="head d-flex align-items-start gap-4">
                              <div> <div className="rounded-circle"></div></div>
                              <div>
                                <h4 className="m-0">Name your store</h4>
                                <p className="pt-3 " style={{ fontSize: "13px" }}>
                                  Your temporary store name is currently My Store. The store name appears in your admin and your online store.{' '}
                                  <Link className="link-no-underline" href={"/"}>
                                    Learn More
                                  </Link>
                                </p>
                                <div className="d-flex align-items-center gap-4">
                                  <Link href={'/storeDetails'}>
                                        <button className="add_btn">Name Store   </button>
                                  </Link>
                                </div>
                              </div>
                              <div className="ps-5 max-[600px]:hidden" >
                                <Image
                                  src="/add-product.svg"
                                  width={240}
                                  height={240} alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <div
                        className="d-flex flex-column mt-2">
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </>}
          </div>
        </div>

      </div>
    </>
  );
};

export default Page;
