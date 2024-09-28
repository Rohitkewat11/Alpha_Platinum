import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "./Modal";

// mobile view menu icons//
import { FaBoxOpen } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import { FaInfo } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  // State for Modal//
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function handleTextClick(e) {
    const filterData = category.find((item) => item.id === e.target.id);
    navigate(`/category/${filterData.name}`, { state: filterData });
  }

  // fetching data from API
  useEffect(() => {
    // fetching get_categories Api data//
    axios
      .post(
        "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories"
      )
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

      // fetching data from fakestore API data//
  }, []);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      {/* import Modal component */}
      <header>
        <div className="flex justify-between items-center p-3 px-5">
          {/* Hamburger Menu icon */}
          <div className="block sm:block md:hidden lg:hidden xl:hidden">
            {showMobileMenu ? (
              <IoClose
                className="text-4xl cursor-pointer"
                onClick={() => {
                  setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                }}
              />
            ) : (
              <BsList
                className="text-4xl cursor-pointer"
                onClick={() => {
                  setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                }}
              />
            )}
          </div>
          <div className="flex items-center gap-8">
            <Link to="/">
              <img src="./alphaPlatinumLogo.png" alt="" className="h-14" />
            </Link>
            <div className="hidden sm:hidden md:hidden lg:block xl:block">
              <div className="border border-gray-300 rounded-md p-2 flex items-center bg-gray-100">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-[35em] bg-transparent "
                />
                <IoSearchSharp className="text-gray-300 text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="border border-[#49a6a2] text-[#49a6a2] rounded-md p-1 px-5 font-semibold"
              onClick={openModal}
            >
              Login
            </button>
            <FaRegHeart className="text-[#49a6a2] text-xl hidden sm:hidden md:block lg:block xl:block " />
            <FaCartPlus className="text-[#49a6a2] text-xl hidden sm:hidden md:block lg:block xl:block" />
          </div>
        </div>
        {/* addditional search box */}
        <div className="px-5 block md:block lg:hidden xl:hidden">
          <div className="border border-gray-300 rounded-md p-2 flex items-center bg-gray-100">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full bg-transparent outline-none"
            />
            <IoSearchSharp className="text-gray-300 text-2xl" />
          </div>
        </div>
        {/* category list Bar */}
        <div className="hidden md:hidden lg:block xl:block">
          <div className="bg-[#49a6a2] text-white text-lg flex justify-evenly">
            <Link to="/category">
              <div className="flex items-center p-2">
                <VscThreeBars />
                &nbsp;<span>See All</span>
              </div>
            </Link>
            <div className="border-r-2 border-white"></div>
            <div
              onClick={handleTextClick}
              className="p-2 hover:-translate-y-1 duration-200 ease-in-out cursor-pointer hover:border-b border-white"
              id={1}
            >
              Clothes
            </div>
            <div
              onClick={handleTextClick}
              className="p-2 hover:-translate-y-1 duration-200 ease-in-out cursor-pointer hover:border-b border-white"
              id={3}
            >
              Electronics
            </div>
            <div
              onClick={handleTextClick}
              className="p-2 hover:-translate-y-1 duration-200 ease-in-out cursor-pointer hover:border-b border-white"
              id={6}
            >
              Home & Kitchen
            </div>
            <div
              onClick={handleTextClick}
              className="p-2 hover:-translate-y-1 duration-200 ease-in-out cursor-pointer hover:border-b border-white"
              id={9}
            >
              Beauty & personal care
            </div>
            <div
              onClick={handleTextClick}
              className="p-2 hover:-translate-y-1 duration-200 ease-in-out cursor-pointer hover:border-b border-white"
              id={13}
            >
              Toys & Games
            </div>
            <div
              onClick={handleTextClick}
              className="p-2 hover:-translate-y-1 duration-200 ease-in-out cursor-pointer hover:border-b border-white"
              id={16}
            >
              Grocery & Gourmet Food
            </div>
            <div
              onClick={handleTextClick}
              className="p-2 hover:-translate-y-1 duration-200 ease-in-out cursor-pointer hover:border-b border-white"
              id={20}
            >
              Books
            </div>
          </div>
        </div>

        {/* Mobile view Menu on hamburger click start*/}
        <div
          className="absolute top-0 right-0 h-full z-50 bg-white w-[50%] py-4 border shadow-md shadow-black rounded-r-md"
          style={{
            display: showMobileMenu ? "block" : "none",
          }}
        >
          <ol className="">
            <Link to="/products">
              <li
                onClick={() => {
                  setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                }}
                className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
              >
                <FaBoxOpen className="text-[#49a6a2] text-xl" />
                <span c>Products</span>
              </li>
            </Link>
            <li
              onClick={() => {
                setShowMobileMenu((showMobileMenu) => !showMobileMenu);
              }}
              className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
            >
              <IoPersonCircle className="text-[#49a6a2] text-xl" />
              <span c>My Account</span>
            </li>
            <li
              onClick={() => {
                setShowMobileMenu((showMobileMenu) => !showMobileMenu);
              }}
              className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
            >
              <FaClockRotateLeft className="text-[#49a6a2] text-xl"/>
              <sapn c>My Order</sapn>
            </li>
            <li
              onClick={() => {
                setShowMobileMenu((showMobileMenu) => !showMobileMenu);
              }}
              className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
            >
              <FaRegHeart className="text-[#49a6a2] text-xl" />
              <span c>Favorite</span>
            </li>
            <li
              onClick={() => {
                setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                openModal();
              }}
              className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
            >
              <CgLogIn className="text-[#49a6a2] text-xl" />
              <span c>Login</span>
            </li>
            <li
              onClick={() => {
                setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                openModal();
              }}
              className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
            >
              <BsPersonCheckFill className="text-[#49a6a2] text-xl" />
              <span >Register</span>
            </li>
            <Link to="/about">
              <li
                onClick={() => {
                  setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                }}
                className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
              >
                <FaInfo className="text-[#49a6a2] text-xl" />
                <span c>About Us</span>
              </li>
            </Link>
            <Link to="/contact">
              <li
                onClick={() => {
                  setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                }}
                className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
              >
                <TbMailFilled className="text-[#49a6a2] text-xl" />
                <span c>Contact Us</span>
              </li>
            </Link>
          </ol>
        </div>
        {/* Mobile view Menu on hamburger click end*/}
        
      </header>
    </>
  );
}
