"use client";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import home from "@/components/assests/png/home.png";
import Image from "next/image";
import { FiHome } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
const ShopifySidebar = () => {
  return (
    <>
      <div className="" style={{height:"92.8vh"}} >
        <div className="sticky top-14">
          <Sidebar className="h-full ">
            <Menu>
              <MenuItem icon={<FiHome />}> Home </MenuItem>
              <MenuItem icon={<FaShoppingCart />}> Orders </MenuItem>
              <SubMenu icon={<FaProductHunt />} label="Products">
                <MenuItem
                  icon={<FaShoppingCart />}
                  component={<Link href={"/"} />}
                >
                  {" "}
                  Collections
                </MenuItem>
                <MenuItem
                  icon={<FaBox />}
                  component={<Link href={"/products"} />}
                >
                  {" "}
                  Inventory{" "}
                </MenuItem>
                <MenuItem
                  icon={<FaShoppingBag />}
                  component={<Link href={"/products"} />}
                >
                  {" "}
                  Purchase orders{" "}
                </MenuItem>
                <MenuItem
                  icon={<FaExchangeAlt />}
                  component={<Link href={"/products"} />}
                >
                  {" "}
                  Transfers{" "}
                </MenuItem>
                <MenuItem
                  icon={<FaGift />}
                  component={<Link href={"/products"} />}
                >
                  {" "}
                  Gift Card{" "}
                </MenuItem>
              </SubMenu>
              <MenuItem icon={<FaUsers />}> Customers </MenuItem>
              <MenuItem icon={<FaFileAlt />}> Content </MenuItem>
              <MenuItem icon={<FaChartBar />}> Analytics </MenuItem>
              <MenuItem icon={<FaBullhorn />}> Marketing </MenuItem>
              <MenuItem icon={<FaPercent />}> Discounts </MenuItem>
              <div className="ms-8 py-2 mt-4">
                <label>Sales and Channels</label>
              </div>
              <MenuItem icon={<FaStore />}> Online Store </MenuItem>
              <MenuItem icon={<FaCashRegister />}> Point of Sale </MenuItem>
              <div className="ms-8 py-2 mt-4">
                {/* <label>Sales and Channels</label> */}
                <label>Apps</label>
              </div>
              <MenuItem icon={<FaPlusCircle />}> Add apps </MenuItem>
            </Menu>
          </Sidebar>
        </div>

      </div>
    </>
  );
};

export default ShopifySidebar;
