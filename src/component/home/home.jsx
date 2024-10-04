import { Carousal } from "../carousal";
import { CategorySlider } from "../CategorySlider";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { ProductImageSlider } from "../productImageSlider";


export function Home() {
  return (
    <>
      <div>
        <Carousal />
        <CategorySlider />
        <ProductImageSlider/>
      </div>
      {/* app download section start */}
        <div className="w-[80%] m-auto mb-5 p-5 flex flex-wrap justify-between items-center border rounded-md shadow-md shadow-gray-500">
          <div>
            <img src="./downloadPhone.png" alt="" className="lg:float-left me-5" />
            <div>
              <p className="font-bold text-3xl">Downlaod App Now!</p>
              <p className="text-md mt-1 font-semibold">
                Use code <span className="bg-yellow-300 px-1 font-sans">WELCOMEMMT</span> and get FLAT 12% OFF* on your first domestic
                flight booking
              </p>
            </div>
          </div>
          <div>
            <button className="border-1 border-white bg-black flex items-center rounded-md pe-5 p-2 mb-5 text-white gap-2 active:scale-75 duration-500 ease-in-out">
              <FaApple />
              <div>
                <p className="text-[8px] -mb-1">Get it on</p>
                <p className="">App Store</p>
              </div>
            </button>
            <button className="border-1 border-white bg-black flex items-center rounded-md px-2 p-2 text-white gap-2 active:scale-75 duration-500 ease-in-out">
              <FaGooglePlay />
              <div>
                <p className="text-[8px] -mb-1">Get it on</p>
                <p className="">Google Play</p>
              </div>
            </button>
          </div>
        <div>
          <img src="./QrCode.jpg" alt="" className="w-32" />
        </div>
        </div>
      {/* app download section end */}

      {/* support and return section start */}
      <div className="bg-[#49a6a2] h-fit py-10 grid place-items-center md:grid-cols-2 lg:flex lg:justify-around lg:px-5">
        <div className="w-96 lg:w-fit  flex items-center gap-10 text-white">
          <FaShippingFast className="text-4xl" />
          <div>
            <p className="text-lg font-semibold">Fast Shiping</p>
            <p className="">Fast Shiping at your door steps.</p>
          </div>
        </div>
        <div className="w-96 lg:w-fit  flex items-center gap-10 text-white">
          <FiRefreshCcw className="text-4xl" />
          <div>
            <p className="text-lg font-semibold">Free Returns</p>
            <p className="">
              Free return if products are damaged.
            </p>
          </div>
        </div>
        <div className="w-96 lg:w-fit  flex items-center gap-10 text-white">
          <SlEarphonesAlt className="text-4xl" />
          <div>
            <p className="text-lg font-semibold">Support 27/7</p>
            <p className="">
              24/7 and 365 days support is available.
            </p>
          </div>
        </div>
        <div className="w-96 lg:w-fit  flex items-center gap-10 text-white">
          <FaArrowRight className="text-4xl" />
          <p className="text-lg font-semibold">Seller Login</p>
        </div>
      </div>
      {/* supprot and return section end */}
    </>
  );
}
