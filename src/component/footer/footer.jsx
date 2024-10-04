import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="bg-[#1f2136] pt-10 pb-10">
        <div className="md:w-[90%] md:m-auto gap-10 md:flex md:justify-evenly md:items-center lg:flex xl:flex">
          <div className="flex justify-center">
            <img
              src="./alphaPlatinumLogo.png"
              alt="logoFooter"
              className="h-20"
            />
          </div>
          <div className="ps-5 mt-5">
            <p className="text-2xl text-white font-bold">Get to know Us</p>
            <p className="border-b-2 border-[#0cfef2] w-14 h-3"></p>
            <div>
              <div className="text-gray-400 mt-3 font-semibold flex space-x-20">
                <ul>
                  <Link to="/">
                    <li
                      className="hover:text-white"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/products">
                    <li
                      className="hover:text-white"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      Products
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li
                      className="hover:text-white"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      Contect Us
                    </li>
                  </Link>
                  <Link to="/T&C">
                    <li
                      className="hover:text-white"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      Terms & Condition
                    </li>
                  </Link>
                </ul>

                <ul>
                  <Link to="/category">
                    <li
                      className="hover:text-white"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      Category
                    </li>
                  </Link>
                  <Link to="/about">
                    <li
                      className="hover:text-white"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      About Us
                    </li>
                  </Link>
                  <li className="hover:text-white">Sellers</li>
                  <Link to="/privacyPolicy">
                    <li
                      className="hover:text-white"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      Privacy Policy
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="ps-5 mt-5">
            <p className="text-white  font-bold">Connects with US</p>
            <div className="mt-3 flex gap-3 text-white ">
              <div
                className="cursor-pointer h-8 w-8 flex justify-center items-center bg-blue-700 rounded-full hover:scale-[1.1] duration-100 ease-in-out"
                title="Fecebook"
              >
                <FaFacebookF />
              </div>
              <div
                className="cursor-pointer h-8 w-8  flex justify-center items-center bg-blue-500 rounded-full hover:scale-[1.1] duration-100 ease-in-out"
                title="Twitter"
              >
                <FaTwitter />
              </div>
              <div
                className="cursor-pointer h-8 w-8  flex justify-center items-center
              bg-gradient-to-tr from-yellow-500 via-purple-500 to-pink-700
              rounded-full hover:scale-[1.1] duration-100 ease-in-out"
                title="Instagram"
              >
                <FaInstagram />
              </div>
              <div
                className="cursor-pointer h-8 w-8 flex justify-center items-center bg-red-700 rounded-full hover:scale-[1.1] duration-100 ease-in-out"
                title="Youtube"
              >
                <FaYoutube />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-5">
              <button className="border-1 border-white bg-black flex items-center rounded-md p-2 pe-[18px] text-white gap-3 active:scale-75 duration-500 ease-in-out">
                <FaApple />
                <div>
                  <p className="text-[8px] -mb-1">Get it on</p>
                  <p className="">App Store</p>
                </div>
              </button>
              <button className="border-1 border-white bg-black flex items-center rounded-md p-2 text-white gap-2 active:scale-75 duration-500 ease-in-out">
                <FaGooglePlay />
                <div>
                  <p className="text-[8px] -mb-1">Get it on</p>
                  <p className="">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-5">
          <p className="text-center text-gray-500 font-semibold mt-5">
            Copyright &copy; 2024, All Right Reserved Alpha Platinum Private
            Limited
          </p>
        </div>
      </footer>
    </>
  );
}
