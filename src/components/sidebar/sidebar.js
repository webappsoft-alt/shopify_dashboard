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
      <div className=" sticky top-14" style={{height:"92.3vh"}} >

        <Sidebar className="h-full sidebar_main "  color="#ebebeb" backgroundColor="#ebebeb" >
          <Menu>
            <MenuItem component={<Link href={"/home"} />}
              icon={<FiHome />} > Home </MenuItem>
            <SubMenu component={<Link href={"/order"} />} icon={<FaShoppingCart />} label="Orders">
              <MenuItem
                // icon={<FaShoppingCart />}
                component={<Link href={"/draft"} />}  >
                Drafts
              </MenuItem>
              <MenuItem
                // icon={<FaBox />}
                component={<Link href={"/"} />} >
                Inventory
              </MenuItem>
           </SubMenu>
            <SubMenu icon={<FaProductHunt />} label="Products" color="#616161">
              <MenuItem
                // icon={<FaShoppingCart />}
                component={<Link href={"/"} />} >
                Collections
              </MenuItem>
              <MenuItem
                // icon={<FaBox />}
                component={<Link href={"/products"} />} >
                Inventory
              </MenuItem>
              <MenuItem
                // icon={<FaShoppingBag />}
                component={<Link href={"/products"} />}>
                Purchase orders
              </MenuItem>
              <MenuItem
                // icon={<FaExchangeAlt />}
                component={<Link href={"/products"} />}>
                Transfers
              </MenuItem>
              <MenuItem
                // icon={<FaGift />}
                component={<Link href={"/products"} />} >
                Gift Card
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link href={"/customers"} />} icon={<FaUsers />}> Customers </MenuItem>
            <MenuItem icon={<FaFileAlt />}> Content </MenuItem>
            <MenuItem icon={<FaChartBar />}> Analytics </MenuItem>
            <MenuItem icon={<FaBullhorn />}> Marketing </MenuItem>
            <MenuItem icon={<FaPercent />}> Discounts </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default ShopifySidebar;
