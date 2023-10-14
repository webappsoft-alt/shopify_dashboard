/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import home from "@/components/assests/png/home.png";
import Image from "next/image";
import { BiChevronRight } from 'react-icons/bi'
const ShopifySidebar = () => {
  return (
    <>
      <div className=" sticky top-14" style={{ height: "92.7vh" }} >

        <Sidebar className="h-full pt-3 sidebar_main" width="240px" color="#ebebeb" backgroundColor="#ebebeb" >
          <div className="flex flex-col justify-between h-full">
            <div className="h-full ">
              <Menu className="padd_inline pb-2">
                <MenuItem className="px-0" component={<Link href={"/home"} />}
                  icon={<span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                      aria-hidden="true">
                      <path fillRule="evenodd"
                        d="M 14 16 h -2 a 1 1 0 0 1 -1 -1 v -2.5 a 0.5 0.5 0 0 0 -0.5 -0.5 h -1 a 0.5 0.5 0 0 0 -0.5 0.5 v 2.5 a 1 1 0 0 1 -1 1 h -2 a 2 2 0 0 1 -2 -2 v -4.257 a 3 3 0 0 1 0.879 -2.122 l 3.707 -3.707 a 2 2 0 0 1 2.828 0 l 3.707 3.707 a 3 3 0 0 1 0.879 2.122 v 4.257 a 2 2 0 0 1 -2 2 Z">
                      </path>
                    </svg>
                    {/* <svg
                  viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                  aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M8.344 3.692a2.25 2.25 0 0 1 3.312 0l3.854 4.19a3.75 3.75 0 0 1 .99 2.538v3.33a2.75 2.75 0 0 1-2.75 2.75h-1.75a1.5 1.5 0 0 1-1.5-1.5v-2h-1v2a1.5 1.5 0 0 1-1.5 1.5h-1.75a2.75 2.75 0 0 1-2.75-2.75v-3.33c0-.94.353-1.847.99-2.539l3.854-4.189Zm2.208 1.016a.75.75 0 0 0-1.104 0l-3.854 4.189a2.25 2.25 0 0 0-.594 1.523v3.33c0 .69.56 1.25 1.25 1.25h1.75v-2a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v2h1.75c.69 0 1.25-.56 1.25-1.25v-3.33a2.25 2.25 0 0 0-.594-1.523l-3.854-4.19Z"
                  >
                  </path>
                </svg> */}
                  </span>
                  } > Home
                </MenuItem>
                <SubMenu component={<Link href={"/order"} />} icon={
                  <span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                      aria-hidden="true">
                      <path fillRule="evenodd"
                        d="M4.255 5.847a2.75 2.75 0 0 1 2.72-2.347h6.05a2.75 2.75 0 0 1 2.72 2.347l.66 4.46c.063.425.095.853.095 1.282v1.661a3.25 3.25 0 0 1-3.25 3.25h-6.5a3.25 3.25 0 0 1-3.25-3.25v-1.66c0-.43.032-.858.094-1.283l.661-4.46Zm2.72-.847a1.25 1.25 0 0 0-1.236 1.067l-.583 3.933h2.484a1.25 1.25 0 0 1 1.185.855l.159.474a.25.25 0 0 0 .237.171h1.558a.25.25 0 0 0 .237-.17l.159-.475a1.25 1.25 0 0 1 1.185-.855h2.484l-.583-3.933a1.25 1.25 0 0 0-1.236-1.067h-6.05Z">
                      </path>
                    </svg>
                    {/* <svg
                  viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                  aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M 6.976 3.5 a 2.75 2.75 0 0 0 -2.72 2.347 l -0.662 4.46 a 8.75 8.75 0 0 0 -0.094 1.282 v 1.661 a 3.25 3.25 0 0 0 3.25 3.25 h 6.5 a 3.25 3.25 0 0 0 3.25 -3.25 v -1.66 c 0 -0.43 -0.032 -0.858 -0.095 -1.283 l -0.66 -4.46 a 2.75 2.75 0 0 0 -2.72 -2.347 h -6.05 Z m -1.237 2.567 a 1.25 1.25 0 0 1 1.237 -1.067 h 6.048 c 0.62 0 1.146 0.454 1.237 1.067 l 0.583 3.933 h -2.484 a 1.25 1.25 0 0 0 -1.185 0.855 l -0.159 0.474 a 0.25 0.25 0 0 1 -0.237 0.171 h -1.558 a 0.25 0.25 0 0 1 -0.237 -0.17 l -0.159 -0.475 a 1.25 1.25 0 0 0 -1.185 -0.855 h -2.484 l 0.583 -3.933 Z m -0.738 5.433 l -0.001 0.09 v 1.66 c 0 0.966 0.784 1.75 1.75 1.75 h 6.5 a 1.75 1.75 0 0 0 1.75 -1.75 v -1.75 h -2.46 l -0.1 0.303 a 1.75 1.75 0 0 1 -1.66 1.197 h -1.56 a 1.75 1.75 0 0 1 -1.66 -1.197 l -0.1 -0.303 h -2.46 Z"
                  >
                  </path>
                </svg> */}
                  </span>} label="Orders">
                  <MenuItem className="px-0"
                    component={<Link href={"/draft"} />}  >
                    Drafts
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/order/inventory"} />} >
                    Inventory
                  </MenuItem>
                </SubMenu>
                <SubMenu icon={
                  <span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                      aria-hidden="true">
                      <path fillRule="evenodd"
                        d="M11.025 4h1.725a3.25 3.25 0 0 1 3.25 3.25v1.938a2.5 2.5 0 0 1-.765 1.8l-4.468 4.308a2.5 2.5 0 0 1-3.503-.032l-2.528-2.528a2.5 2.5 0 0 1-.032-3.503l4.161-4.315a3 3 0 0 1 2.16-.918Zm1.975 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                      >
                      </path>
                    </svg>
                    {/* <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M13 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path fillRule="evenodd" d="M11.276 3.5a3.75 3.75 0 0 0-2.701 1.149l-4.254 4.417a2.75 2.75 0 0 0 .036 3.852l2.898 2.898a2.5 2.5 0 0 0 3.502.033l4.747-4.571a3.25 3.25 0 0 0 .996-2.341v-2.187a3.25 3.25 0 0 0-3.25-3.25h-1.974Zm-1.62 2.19a2.25 2.25 0 0 1 1.62-.69h1.974c.966 0 1.75.784 1.75 1.75v2.187c0 .475-.194.93-.536 1.26l-4.747 4.572a1 1 0 0 1-1.401-.014l-2.898-2.898a1.25 1.25 0 0 1-.016-1.75l4.253-4.418Z"></path></svg> */}
                  </span>} component={<Link href={"/products"} />} label="Products" color="#616161">
                  <MenuItem className="px-0"
                    component={<Link href={"/products/collection"} />} >
                    Collections
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/products"} />} >
                    Inventory
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/products"} />}>
                    Purchase orders
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/products"} />}>
                    Transfers
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/products"} />} >
                    Gift Card
                  </MenuItem>
                </SubMenu>
                <SubMenu icon={
                  <span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                      aria-hidden="true">
                      <path d="M10 9.75a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"></path>
                      <path
                        d="M10 11.5c-1.968 0-3.815.95-4.959 2.552l-.561.786a1.05 1.05 0 0 0 .855 1.662h9.33a1.05 1.05 0 0 0 .855-1.662l-.561-.786a6.094 6.094 0 0 0-4.959-2.552Z">
                      </path>
                    </svg>
                    {/* <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path fillRule="evenodd" d="M10 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"></path><path fillRule="evenodd" d="M15.484 14.227a6.274 6.274 0 0 0-10.968 0l-.437.786a1.338 1.338 0 0 0 1.17 1.987h9.502a1.338 1.338 0 0 0 1.17-1.987l-.437-.786Zm-9.657.728a4.773 4.773 0 0 1 8.346 0l.302.545h-8.95l.302-.545Z"></path></svg> */}
                  </span>} component={<Link href={"/customers"} />} label="Customers" color="#616161">
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Segements
                  </MenuItem>
                </SubMenu>
                <SubMenu icon={
                  <span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                      aria-hidden="true">
                      <path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path fillRule="evenodd"
                        d="M7.42 3.5h5.16c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073.03.365.03.81.03 1.345v1.91c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.751 2.751 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27a6.052 6.052 0 0 1-.288.017.744.744 0 0 1-.137.013h-6.08c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.047-.934.75.75 0 0 1-.176-.31c-.157-.324-.22-.667-.25-1.031-.029-.365-.029-.81-.029-1.345v-1.91c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073a2.75 2.75 0 0 1 1.202-1.202c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03Zm7.58 5.8-.001.533-.135-.192a1.75 1.75 0 0 0-2.778-.116l-1.086 1.303-2.411-2.893a1.75 1.75 0 0 0-2.68-.01l-.909 1.073v-1.548c0-.572 0-.957.025-1.253.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111.296-.024.68-.025 1.253-.025h5.1c.572 0 .957 0 1.252.025.288.023.425.065.516.111.235.12.426.311.546.547.046.09.088.227.111.514.024.296.025.68.025 1.253v1.85Z">
                      </path>
                      <path
                        d="M4 15.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z">
                      </path>
                      <path d="M12.75 15a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"></path>
                    </svg>
                    {/* <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path fillRule="evenodd" d="M7.42 3.5h5.16c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073.03.365.03.81.03 1.345v1.91c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.751 2.751 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27-.365.03-.81.03-1.345.03h-5.16c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.201c-.172-.338-.24-.694-.27-1.074-.03-.365-.03-.81-.03-1.345v-1.91c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073a2.75 2.75 0 0 1 1.202-1.202c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03Zm-1.223 1.525c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514-.024.296-.025.68-.025 1.253v1.548l.908-1.073a1.75 1.75 0 0 1 2.68.01l2.412 2.894 1.086-1.304a1.75 1.75 0 0 1 2.778.116l.135.192.001-.533v-1.85c0-.572 0-.957-.025-1.253-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.546-.547c-.091-.046-.228-.088-.515-.111-.296-.024-.68-.025-1.253-.025h-5.1c-.572 0-.957 0-1.253.025Zm-.514 6.589a1.25 1.25 0 0 1-.516-.49l1.886-2.23a.25.25 0 0 1 .383.001l2.38 2.855h-2.366c-.572 0-.957 0-1.253-.025-.287-.023-.424-.065-.514-.111Zm6.867.136h-.365l1.054-1.265a.25.25 0 0 1 .397.017l.751 1.073a1.274 1.274 0 0 1-.07.039c-.09.046-.227.088-.514.111-.296.024-.68.025-1.253.025Z"></path><path d="M4 15.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z"></path><path d="M12.75 15a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"></path></svg> */}
                  </span>} label="Contents" color="#616161">
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Metaobjects
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Files
                  </MenuItem>
                </SubMenu>
                <SubMenu icon={
                  <span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                      aria-hidden="true">
                      <path
                        d="M9.983 4c-.101 0-.212 0-.308.006a1.262 1.262 0 0 0-.403.09 1.25 1.25 0 0 0-.677.676 1.262 1.262 0 0 0-.088.403 4.73 4.73 0 0 0-.007.308v10.034c0 .101 0 .212.007.308.007.108.025.25.088.403.127.307.37.55.677.677.152.063.295.081.403.088.096.007.206.007.308.007h.034c.101 0 .212 0 .308-.006a1.246 1.246 0 0 0 1.08-.766c.063-.152.081-.295.088-.403.007-.096.007-.207.007-.308v-10.034c0-.101 0-.212-.007-.308a1.266 1.266 0 0 0-.088-.403 1.25 1.25 0 0 0-.677-.677 1.262 1.262 0 0 0-.403-.088 4.728 4.728 0 0 0-.308-.007h-.034Z">
                      </path>
                      <path
                        d="M5.483 9c-.101 0-.212 0-.308.007a1.262 1.262 0 0 0-.403.088 1.25 1.25 0 0 0-.677.677 1.263 1.263 0 0 0-.088.403 4.728 4.728 0 0 0-.007.308v5.034c0 .101 0 .212.006.308a1.246 1.246 0 0 0 .766 1.08c.152.063.295.081.403.088.096.007.207.007.308.007h.034c.101 0 .212 0 .308-.006a1.246 1.246 0 0 0 1.08-.766 1.28 1.28 0 0 0 .089-.403c.006-.096.006-.207.006-.308v-5.034c0-.101 0-.212-.006-.308a1.263 1.263 0 0 0-.09-.403 1.25 1.25 0 0 0-.676-.677 1.262 1.262 0 0 0-.403-.088 4.73 4.73 0 0 0-.308-.007h-.034Z">
                      </path>
                      <path
                        d="M14.483 6c-.101 0-.212 0-.308.006a1.262 1.262 0 0 0-.403.09 1.25 1.25 0 0 0-.677.676 1.264 1.264 0 0 0-.088.403c-.007.096-.007.207-.007.308v8.034c0 .101 0 .212.007.308.007.108.025.25.088.403.127.307.37.55.677.677.152.063.296.081.403.088.096.007.207.007.308.007h.034c.101 0 .212 0 .308-.006a1.246 1.246 0 0 0 1.08-.766c.063-.152.081-.295.088-.403.007-.096.007-.207.007-.308v-8.034c0-.101 0-.212-.007-.308a1.266 1.266 0 0 0-.088-.403 1.25 1.25 0 0 0-.677-.677 1.262 1.262 0 0 0-.403-.088 4.728 4.728 0 0 0-.308-.007h-.034Z">
                      </path>
                    </svg>
                    {/* <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path fillRule="evenodd" d="M9.952 3.5h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v9.096c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.375c-.172.035-.361.034-.543.034h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.824 2.824 0 0 1-.034-.543v-9.096c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194 8.216 8.216 0 0 0-.005.3v9.001a8.217 8.217 0 0 0 .005.3.25.25 0 0 0 .194.195l.053.003c.055.002.127.002.248.002a8.046 8.046 0 0 0 .3-.005.25.25 0 0 0 .195-.194l.003-.053c.002-.055.002-.127.002-.248v-9a8.046 8.046 0 0 0-.005-.3.25.25 0 0 0-.194-.195 8.217 8.217 0 0 0-.3-.005 8.216 8.216 0 0 0-.302.005Z"></path><path fillRule="evenodd" d="M5.452 9h.096c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v3.596c0 .182 0 .371-.034.543a1.75 1.75 0 0 1-1.375 1.375c-.172.035-.361.034-.543.034h-.096c-.182 0-.371 0-.543-.034a1.75 1.75 0 0 1-1.375-1.375 2.824 2.824 0 0 1-.034-.543v-3.596c0-.182 0-.371.034-.543a1.75 1.75 0 0 1 1.375-1.375c.172-.035.361-.034.543-.034Zm-.253 1.505a.25.25 0 0 0-.194.194 8.221 8.221 0 0 0-.005.3v3.501a8.217 8.217 0 0 0 .005.3.25.25 0 0 0 .194.195l.053.003c.055.002.127.002.248.002a8.045 8.045 0 0 0 .3-.005.25.25 0 0 0 .195-.194l.003-.053c.002-.055.002-.127.002-.248v-3.5a8.212 8.212 0 0 0-.005-.3.25.25 0 0 0-.194-.195l-.053-.003a8.045 8.045 0 0 0-.248-.002c-.121 0-.193 0-.248.002l-.053.003Z"></path><path fillRule="evenodd" d="M14.5 6h-.048c-.182 0-.371 0-.543.034a1.75 1.75 0 0 0-1.375 1.375 2.825 2.825 0 0 0-.034.543v6.596c0 .182 0 .371.034.543a1.75 1.75 0 0 0 1.375 1.375c.172.035.361.034.543.034h.096c.182 0 .371 0 .543-.034a1.75 1.75 0 0 0 1.375-1.375c.035-.172.034-.361.034-.543v-6.596c0-.182 0-.371-.034-.543a1.75 1.75 0 0 0-1.375-1.375 2.824 2.824 0 0 0-.543-.034h-.048Zm-.495 1.7a.25.25 0 0 1 .194-.195 8.221 8.221 0 0 1 .3-.005 8.217 8.217 0 0 1 .302.005.25.25 0 0 1 .194.194l.003.053c.002.055.002.127.002.248v6.5a8.046 8.046 0 0 1-.005.3.25.25 0 0 1-.194.195 8.046 8.046 0 0 1-.3.005 8.05 8.05 0 0 1-.302-.005.25.25 0 0 1-.194-.194l-.003-.053a8.046 8.046 0 0 1-.002-.248v-6.5c0-.121 0-.193.002-.248l.003-.053v.002-.002Z"></path></svg> */}
                  </span>} label="Analytics" color="#616161">
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Reports
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Live View
                  </MenuItem>
                </SubMenu>
                <SubMenu icon={
                  <span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                      aria-hidden="true">
                      <path
                        d="M5 10a5 5 0 0 1 10 0 1 1 0 1 0 2 0 7 7 0 1 0-7 7 1 1 0 1 0 0-2 5 5 0 0 1-5-5Z">
                      </path>
                      <path
                        d="M11.29 9.84a1 1 0 0 0 1.98-.278 3.25 3.25 0 1 0-3.782 3.653 1 1 0 1 0 .347-1.97 1.25 1.25 0 1 1 1.455-1.405Z">
                      </path>
                      <path
                        d="M11.611 10.973a.5.5 0 0 0-.638.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.172a.5.5 0 0 0-.135-.87l-6.01-2.122Z">
                      </path>
                    </svg>
                    {/* <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M5 10a5 5 0 0 1 10 0 1 1 0 1 0 2 0 7 7 0 1 0-7 7 1 1 0 1 0 0-2 5 5 0 0 1-5-5Z"></path><path d="M11.29 9.84a1 1 0 0 0 1.98-.278 3.25 3.25 0 1 0-3.782 3.653 1 1 0 1 0 .347-1.97 1.25 1.25 0 1 1 1.455-1.405Z"></path><path d="M11.611 10.973a.5.5 0 0 0-.638.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.172a.5.5 0 0 0-.135-.87l-6.01-2.122Z"></path></svg> */}
                  </span>} label="Marketing" color="#616161">
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Compaings
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Automations
                  </MenuItem>
                </SubMenu>
                <MenuItem className="px-0" icon={
                  <span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg
                      viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                      aria-hidden="true">
                      <path fillRule="evenodd"
                        d="M11.527 3.327c-.6-1.306-2.455-1.306-3.054 0a1.68 1.68 0 0 1-2.112.874c-1.347-.5-2.66.813-2.16 2.16a1.68 1.68 0 0 1-.874 2.112c-1.306.6-1.306 2.455 0 3.054a1.68 1.68 0 0 1 .874 2.112c-.5 1.347.813 2.659 2.16 2.16a1.68 1.68 0 0 1 2.112.874c.6 1.306 2.455 1.306 3.054 0a1.68 1.68 0 0 1 2.112-.874c1.347.499 2.66-.813 2.16-2.16a1.68 1.68 0 0 1 .874-2.112c1.306-.6 1.306-2.455 0-3.054a1.68 1.68 0 0 1-.874-2.112c.5-1.347-.813-2.66-2.16-2.16a1.68 1.68 0 0 1-2.112-.874Zm-2.527 4.923a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.53.53-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 1 1 1.06 1.06Zm.47 3.47a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z">
                      </path>
                    </svg>
                    {/* <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path fillRule="evenodd" d="M11.527 3.327c-.6-1.306-2.455-1.306-3.054 0a1.68 1.68 0 0 1-2.112.874c-1.347-.5-2.66.813-2.16 2.16a1.68 1.68 0 0 1-.874 2.112c-1.306.6-1.306 2.455 0 3.054a1.68 1.68 0 0 1 .874 2.112c-.5 1.347.813 2.659 2.16 2.16a1.68 1.68 0 0 1 2.112.874c.6 1.306 2.455 1.306 3.054 0a1.68 1.68 0 0 1 2.112-.874c1.347.499 2.66-.813 2.16-2.16a1.68 1.68 0 0 1 .874-2.112c1.306-.6 1.306-2.455 0-3.054a1.68 1.68 0 0 1-.874-2.112c.5-1.347-.813-2.66-2.16-2.16a1.68 1.68 0 0 1-2.112-.874Zm-2.527 4.923a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.53.53-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 1 1 1.06 1.06Zm.47 3.47a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> */}
                  </span>
                }> Discounts </MenuItem>
              </Menu>
              {/* <button className="btn1 w-100 justify-content-between">
                <h6 className="text-xs menuText">
                  Sales channels
                </h6>
                <div className="menuTextIcon"> <BiChevronRight className="" /></div>
              </button>
              <Menu className="padd_inline pb-2">
                <SubMenu component={<Link href={"/order"} />} icon={
                  <span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <img
                      className="Polaris-Icon__Img_375hq filter" style={{ height: "1rem", width: "1rem" }}
                      src="data:image/svg+xml;utf8,&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 20 20&quot;&gt;&lt;path d=&quot;M5 11.18v4.445c0 .345.28.625.625.625h2.5v-2.5c0-.69.56-1.25 1.25-1.25h1.25c.69 0 1.25.56 1.25 1.25v2.5h2.5c.345 0 .625-.28.625-.625V11.18a2.822 2.822 0 0 1-2.813-.975A2.807 2.807 0 0 1 10 11.25a2.807 2.807 0 0 1-2.188-1.045A2.807 2.807 0 0 1 5 11.18ZM7.188 7.5v.938a1.562 1.562 0 1 1-3.125 0V7.5h3.125ZM8.438 8.438V7.5h3.124v.938a1.563 1.563 0 0 1-3.124 0ZM12.813 8.438V7.5h3.124v.938a1.563 1.563 0 0 1-3.124 0ZM4.305 6.25h11.39l-.69-2.073a.625.625 0 0 0-.593-.427H5.588a.625.625 0 0 0-.592.427L4.305 6.25Z&quot;/&gt;&lt;path fillRule=&quot;evenodd&quot; d=&quot;M5 0a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H5ZM3.81 3.782A1.875 1.875 0 0 1 5.588 2.5h8.824c.807 0 1.523.516 1.778 1.282l.997 2.992v1.663c0 .833-.362 1.582-.937 2.097v5.091c0 1.035-.84 1.875-1.875 1.875h-8.75a1.875 1.875 0 0 1-1.875-1.875v-5.091a2.805 2.805 0 0 1-.938-2.097V6.774l.998-2.992Z&quot; clip-rule=&quot;evenodd&quot;/&gt;&lt;/svg&gt;"
                      alt="" aria-hidden="true" />
                  </span>} label="Online Store">
                  <MenuItem className="px-0"
                    component={<Link href={"/draft"} />}  >
                    Themes
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Blog posts
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Pages
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Navigation
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Preferences
                  </MenuItem>
                </SubMenu>
                <SubMenu icon={
                  <span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <img style={{ height: "1rem", width: "1rem" }} class="filter Polaris-Icon__Img_375hq" src="data:image/svg+xml;utf8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 20 20&quot;><path d=&quot;M11.123 6.753c.141.045.201.196.154.337l-.434 1.296c-.06.179-.264.263-.443.2a2.891 2.891 0 0 0-.9-.158c-.997 0-1.041.624-1.041.782 0 .338.347.594.768.903.645.476 1.463 1.078 1.463 2.297 0 1.58-.998 2.6-2.35 2.6a3.257 3.257 0 0 1-2.313-.872.296.296 0 0 1-.078-.304l.242-.798c.065-.217.336-.3.525-.175.313.205.77.447 1.182.447a.63.63 0 0 0 .658-.64c0-.49-.352-.775-.747-1.095-.506-.41-1.082-.877-1.082-1.905 0-1.546 1.109-3.042 3.344-3.042.493-.014.843.06 1.052.127ZM8.957 4.047c.475-.094.712.364.62.773-.092.41-.41.77-.818.8-.407.03-.599-.32-.567-.674a1.045 1.045 0 0 1 .765-.9Z&quot;/><path fill-rule=&quot;evenodd&quot; d=&quot;M.545 2.73C0 3.8 0 5.2 0 8v4c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C3.8 20 5.2 20 8 20h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 16.2 20 14.8 20 12V8c0-2.8 0-4.2-.545-5.27A5 5 0 0 0 17.27.545C16.2 0 14.8 0 12 0H8C5.2 0 3.8 0 2.73.545A5 5 0 0 0 .545 2.73Zm13.07 2.074L12.29 3.027a1.198 1.198 0 0 0-1.034-.526c-.19.014-.38.048-.564.102l-2.54.628-.998.244c-.269.063-.501.23-.649.464l-1.369 2c-.139.187-.23.406-.265.637-.025.168-.046.338-.066.507l-.004.03c-.22 1.724-.442 3.453-.667 5.186l-.299 2.316a5.235 5.235 0 0 1-.027.177c-.066.399-.163.987.26 1.107.278.08.571.126.862.172.142.023.284.046.424.072l7.052 1.34c.371.072.716-.08.798-.49.015-.105.023-.21.022-.316.028-.544.054-1.086.08-1.63l.271-5.56c.064-1.342.13-2.683.2-4.025a.895.895 0 0 0-.164-.658Zm.83 11.295.048-.994.272-5.56c.063-1.327.129-2.653.197-3.978.027-.244.011-.49-.046-.725.1.118.165.262.185.417l1.413 10.398a.49.49 0 0 1-.53.6l-1.539-.158Z&quot; clip-rule=&quot;evenodd&quot;/></svg>" alt="" aria-hidden="true"></img>
                  </span>} label="Point of Sale" color="#616161">
                  <MenuItem className="px-0"
                    component={<Link href={"/"} />} >
                    Staff
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/products"} />} >
                    Location
                  </MenuItem>
                  <MenuItem className="px-0"
                    component={<Link href={"/products"} />}>
                    Settings
                  </MenuItem>
                </SubMenu>
              </Menu>
              <button className="btn1 w-100 justify-content-between">
                <h6 className="text-xs menuText">
                  Apps
                </h6>
                <div className="menuTextIcon"> <BiChevronRight className="" /></div>
              </button>
              <Menu className="padd_inline pb-2" >
                <MenuItem className="px-0" component={<Link href={"/home"} />}
                  icon={<span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"></path><path fillRule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path></svg>
                  </span>
                  } >Add Apps
                </MenuItem>
              </Menu> */}
            </div>
            <div className="inline-block">
              <Menu className="padd_inline pb-3" >
                <MenuItem className="px-0" component={<Link href={"/home"} />}
                  icon={<span className="Polaris-Icon_yj27d">
                    <span
                      className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6">
                    </span>
                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M8.013 4.389c0-.767.621-1.389 1.389-1.389h1.196c.767 0 1.39.622 1.39 1.389v.66c0 .153.101.33.307.436.141.074.278.155.411.241.196.128.402.13.536.052l.576-.332a1.389 1.389 0 0 1 1.897.508l.599 1.037a1.39 1.39 0 0 1-.509 1.897l-.621.359c-.131.075-.232.249-.225.477a5.135 5.135 0 0 1-.004.427c-.012.233.09.412.223.489l.627.362c.665.384.892 1.233.509 1.897l-.599 1.037a1.39 1.39 0 0 1-1.897.508l-.672-.388c-.132-.076-.332-.076-.526.045a4.928 4.928 0 0 1-.325.185c-.206.108-.308.284-.308.437v.778a1.39 1.39 0 0 1-1.389 1.39h-1.196a1.389 1.389 0 0 1-1.39-1.39v-.778c0-.153-.102-.33-.307-.437a4.96 4.96 0 0 1-.325-.185c-.194-.121-.395-.12-.526-.045l-.672.388a1.39 1.39 0 0 1-1.898-.508l-.598-1.037a1.389 1.389 0 0 1 .509-1.897l.627-.362c.133-.077.235-.256.223-.49a5.03 5.03 0 0 1-.004-.426c.007-.228-.094-.401-.225-.477l-.621-.359a1.389 1.389 0 0 1-.509-1.897l.598-1.037a1.389 1.389 0 0 1 1.898-.508l.576.332c.133.078.34.076.535-.052a4.81 4.81 0 0 1 .412-.24c.205-.108.308-.284.308-.437v-.66Zm1.987 7.611a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg>                  </span>
                  } >Settings
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default ShopifySidebar;
