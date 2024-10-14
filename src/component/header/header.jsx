import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "./Modal";
// import react toastfy//
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// mobile view menu icons//
import { FaBoxOpen } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { CgLogIn } from "react-icons/cg";
import { FaInfo } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { IoPower } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState();
  const [filterDataOnSearch, setFilterDataOnSearch] = useState([]);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));

  // State for Modal//
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const cartCount = useSelector((state) => state.data.cart.length); //getting cart length from store //

  function handleTextClick(e) {
    const filterData = category.find((item) => item.id === e.target.id);
    navigate(`/category/${filterData.name}`, { state: filterData });
  }

  // function for handle search bar//
  function handleSearchBox(e) {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      const filter = products.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setFilterDataOnSearch(filter);
    } else {
      setFilterDataOnSearch([]);
    }
  }

  // function for handle search product data//
  async function handleSearchProductData(e) {
    const id = e.target.id;
    const findData = filterDataOnSearch.find((item) => item.id === id);
    await navigate("PriceDetails", { state: findData });
    setFilterDataOnSearch([]);
  }

  // fetching data from API
  useEffect(() => {
    // fetching get_categories Api data//
    axios
      .post(
        "https://alpha-platinum.vercel.app/api/get_categories"
      )
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // fetching get_products API data//
    axios
      .post("https://alpha-platinum.vercel.app/api/get_products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* error Tostify */}
      <ToastContainer
        // limit={1}
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
                  className="w-[35em] bg-transparent outline-none "
                  onChange={handleSearchBox}
                  // value={text}
                />
                <IoSearchSharp className="text-gray-300 text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* login user Data start */}
            {userData ? (
              <div>
                <div className="flex items-center gap-2">
                  <img
                    src={userData.avatar_url}
                    alt="userImg"
                    className="h-10 w-10 rounded-full"
                  />
                  <span>{userData.display_name}</span>
                  {/* logout Button */}
                  <IoPower
                    title="logout"
                    className="text-red-500 cursor-pointer"
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("/");
                    }}
                  />
                </div>
              </div>
            ) : (
              // login btn
              <button
                className="border border-[#49a6a2] text-[#49a6a2] rounded-md p-1 px-5 font-semibold"
                onClick={openModal}
              >
                Login
              </button>
            )}
            {/* feveroit button */}
            <button className="hidden sm:hidden md:block lg:block xl:block">
              <FaRegHeart className="text-[#49a6a2] text-xl" />
            </button>
            {/* Cart button */}
            <button
              className="reletive hidden sm:hidden md:block lg:block xl:block"
              onClick={() => {
                if (localStorage.getItem("user") !== null) {
                  navigate("/cart");
                } else {
                  toast.error("Please login!");
                }
              }}
            >
              <FaCartPlus className="text-[#49a6a2] text-xl" />
              <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-5 end-3 ">
                {cartCount}
              </div>
            </button>{" "}
            {/* cart button */}
          </div>
        </div>
        {/* addditional search box */}
        <div className="px-5 block md:block lg:hidden xl:hidden">
          <div className="border border-gray-300 rounded-md p-2 flex items-center bg-gray-100">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full bg-transparent outline-none"
              onChange={handleSearchBox}
              // value={text}
            />
            <IoSearchSharp className="text-gray-300 text-2xl" />
          </div>
        </div>
        {/* display product based on search */}
        <div className={filterDataOnSearch.length === 0 ? "hidden" : "block"}>
          <ol className="border-2 rounded-md bg-white h-72 lg:h-96 overflow-y-scroll w-full lg:w-[39vw] absolute lg:left-48 z-50 ">
            {filterDataOnSearch.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className="flex gap-5 p-2 hover:bg-gray-200"
              >
                <figure className="border p-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    id={item.id}
                    className="h-20 w-20 cursor-pointer"
                    onClick={handleSearchProductData}
                  />
                </figure>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-gray-500">{item.category_name}</p>
                </div>
              </li>
            ))}
          </ol>
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
                <span>Products</span>
              </li>
            </Link>
            <li
              onClick={() => {
                setShowMobileMenu((showMobileMenu) => !showMobileMenu);
              }}
              className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
            >
              <IoPersonCircle className="text-[#49a6a2] text-xl" />
              <span>My Account</span>
            </li>
            <Link to="/cart">
              <li
                onClick={() => {
                  setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                }}
                className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
              >
                <FaClockRotateLeft className="text-[#49a6a2] text-xl" />
                <span>My Order</span>
              </li>
            </Link>
            <li
              onClick={() => {
                setShowMobileMenu((showMobileMenu) => !showMobileMenu);
              }}
              className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
            >
              <FaRegHeart className="text-[#49a6a2] text-xl" />
              <span>Favorite</span>
            </li>
            <li
              onClick={() => {
                setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                openModal();
              }}
              className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
            >
              <CgLogIn className="text-[#49a6a2] text-xl" />
              <span>Login</span>
            </li>
            <li
              onClick={() => {
                setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                openModal();
              }}
              className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
            >
              <BsPersonCheckFill className="text-[#49a6a2] text-xl" />
              <span>Register</span>
            </li>
            <Link to="/about">
              <li
                onClick={() => {
                  setShowMobileMenu((showMobileMenu) => !showMobileMenu);
                }}
                className="flex items-center space-x-5 p-5 border cursor-pointer hover:bg-gray-100"
              >
                <FaInfo className="text-[#49a6a2] text-xl" />
                <span>About Us</span>
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
                <span>Contact Us</span>
              </li>
            </Link>
          </ol>
        </div>
        {/* Mobile view Menu on hamburger click end*/}
      </header>
    </>
  );
}
