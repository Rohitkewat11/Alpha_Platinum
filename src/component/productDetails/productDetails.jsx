import { useState} from "react";
import { useLocation, Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import ReactImageMagnify from "react-image-magnify";

export function ProductDetails() {
  const location = useLocation();
  const data = location.state || {};
  const [productSummary, setProductSummary] = useState({});
  const [quantity, setQuantity] = useState(1);
  // for image magnification//
  const [show, setShow] = useState(false);

  function handleImgClick(e) {
    setProductSummary(data.children.find((item) => item.id === e.target.id));
    setShow(true);
  }

  return (
    <>
       
      <div className="">
        <div className="mt-4">
          <div className="bg-[#addadd] p-10 px-20 grid place-items-center lg:flex lg:justify-between">
            <h4 className="text-3xl">{data.name}</h4>
            <p className="">
              <Link to="/">Home</Link>/<Link to="/category">category</Link>/
              <span className="text-gray-500">{data.name}</span>
            </p>
          </div>
          <div className="w-[80%] m-auto border shadow-md p-10 mt-10 mb-10">
            <h4 className="text-2xl font-semibold mb-4">
              {data.name} Category
            </h4>
            <div className="border-2 shadow-gray shadow-lg flex gap-8 p-4">
              {data.children.map((item) => (
                <div className="text-center">
                  <img
                    src={item.image}
                    alt=""
                    id={item.id}
                    onClick={handleImgClick}
                    className="h-32 w-32 border border-[#09a69b]"
                  />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* product summary */}
        <div style={{display:show?"block":"none"}}>
        <div className="grid grid-cols-2 mb-10">
          {/* img part */}
          <div className="flex justify-center">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Magnified image",
                  isFluidWidth: false,
                  src: productSummary.image,
                  height: 200,
                  width: 200,
                },
                largeImage: {
                  src: productSummary.image,
                  width: 800, // Width of zoomed-in image
                  height: 600, // Height of zoomed-in image
                },
                enlargedImageContainerDimensions: {
                  width: "250%",
                  height: "250%",
                },
              }}
            />
          </div>

          <div className="p-2">
            <p className="text-2xl font-semibold">Shirt & Shorts Combo</p>
            <p className="text-gray-400">Baby Cloth</p>
            <hr className="mt-4 mb-4" />
            <p className="text-xl">
              &#8377;945.00
              <sup>
                <strike className="text-red-500">&#8377;1,050</strike>
              </sup>
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Zipcode"
                className="border border-gray-400 p-1 focus:outline-[#49a6a2] "
              />
              <button className="text-[#49a6a2] border-[#49a6a2] rounded-md px-2 py-1 border hover:bg-[#49a6a2] hover:text-white">
                Check Availability
              </button>
            </div>
            <div className="flex justify-between border border-green-500 p-1 rounded-md w-28 mt-3">
              <button
                className="border-0 w-6 rounded-md border-gray-500 p-1 active:scale-75 duration-100 ease-in-out"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                <FiMinus />
              </button>
              {quantity}
              <button
                className="border-0 w-6 rounded-md border-gray-500 p-1 active:scale-75 duration-100 ease-in-out"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                <FiPlus />
              </button>
            </div>
            <div className="flex flex-wrap gap-4 mt-5">
              <button className="border-2 border-[#49a6a2] flex items-center font-semibold rounded-md px-2 p-2 text-[#49a6a2] gap-2 active:scale-75 duration-500 ease-in-out">
                <FaCartPlus />
                <p className="">Add to Cart</p>
              </button>
              <button className="border-2 border-red-700 flex items-center rounded-md px-2 p-2 font-semibold text-red-700 gap-2 active:scale-75 duration-500 ease-in-out">
                <FaHeart />
                <p className="">Add to favorite</p>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
