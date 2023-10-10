"use client";
import React from "react";
import Image from "next/image";
import { Accordion } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
const Page = () => {
  const now = 5;
  return (
    <>
      <div className="2xl:container px-md-4 px-2 mx-auto mt-3">
        <div
          className="trial d-flex justify-between align-items-center gap-5
        "
        >
          <div>Extend your plane for $1/Month for 3 months on select plane</div>
          <div className="flex flex-row align-middle gap-3">
            <div>
              <button className="planButton">Select a Plan</button>
            </div>
            <div className="" style={{ marginTop: ".56rem" }}>
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
          className="bg-white mt-4 customer_height rounded-xl shadow1 "
          style={{ borderRadius: "20px",position:"relative" }}
        >
          <Accordion style={{position:'absolute' , top:"0px" , width:"100%"}}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Setup guide</Accordion.Header>
              <Accordion.Body>
                <div>
                  <p>
                    Use this personalized guide to get your store up and running
                  </p>
                  <div className="d-flex align-items-center justify-content-between ">
                    <p  className="m-0">0 to 11 tasks completed</p>
                    <ProgressBar now={now}  />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <Accordion className="mt-1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Setup guide</Accordion.Header>
              <Accordion.Body>
                <div>
                  <p>
                    Use this personalized guide to get your store up and running
                  </p>
                  <div className="d-flex align-items-center justify-content-between ">
                    <p  className="m-0">0 to 11 tasks completed</p>
                    <ProgressBar now={now}  />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
        </div>
        
      </div>
    </>
  );
};

export default Page;
