"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="2xl:container px-md-4 px-2 mx-auto mt-4">
        <h5>Store details</h5>
        <div
          className="bg-white mt-4  rounded-xl shadow1"
          style={{ borderRadius: "10px", width: "100%" }}
        >
          <div className="p-3">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="m-0 ">Profile</h6>
              <button style={{ color: "blue" }}>Close</button>
            </div>
            <p className="m-0" style={{ fontSize: "14px" }}>
              Please note that these details could be publicly available. Do not
              use your personal information.
            </p>
            <form className="w-100 mt-3 ">
              <div className="d-flex flex-row gap-2">
                <Form.Group className="w-50">
                  <Form.Label className="m-0 mb-1">Store Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    // placeholder="My Store"
                    style={{ fontSize: "14px" }}
                  />
                </Form.Group>

                <Form.Group className="w-50">
                  <Form.Label className="m-0 mb-1">Store Phone</Form.Label>
                  <Form.Control
                    className="mb-0"
                    type="number"
                    name="phone"
                    // placeholder="phone"
                    style={{ fontSize: "14px" }}
                  />
                </Form.Group>
         
                <div className="forgot_pass d-flex justify-content-end">
  
                </div>
              </div>
              <p className="m-0 mt-2" style={{fontSize:"14px"}}>
                Appears on your website.
                </p>
                <Form.Group className="w-100 mt-2">
                  <Form.Label className="m-0 mb-1">Store Email</Form.Label>
                  <Form.Control
                    className="mb-0"
                    type="email"
                    name="email"
                    // placeholder="email"
                    style={{ fontSize: "14px" }}
                  />
                </Form.Group>
                <p className="mt-2" style={{fontSize:"15px"}}>
                Receives messages about your store. For sender email, go to <Link href={'/'}>notification settings</Link>
                </p>
              <button type="submit"></button>
            </form>
          
          </div>
        </div>
        <div
          className="bg-white mt-4  rounded-xl shadow1 p-2"
          style={{ borderRadius: "10px", width: "100%" }}
        >
            <h6 className="m-0 px-2">
                Upload logo
            </h6>
            <div className="d-flex flex-row gap-2 p-2">
                 <div>
                    <p className="m-0 py-2">
                    With Hatchful, you can create stunning logos in seconds. No design experience necessary.
                    </p>
                    <button   className="add_btn">Upload logo
                              </button>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
