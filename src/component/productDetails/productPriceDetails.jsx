import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCartData } from "../../redux/cartItemDataSlicer";
import { toast } from "react-toastify";

const ProductPriceDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const data = location.state || {};
  const dispatch = useDispatch();
  const [magnifierStyle, setMagnifierStyle] = useState({ display: "none" });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setMagnifierStyle({
      // left: `${offsetX}px`,
      // top: `${offsetY}px`,
      left:"220px",
      top:"285px",
      backgroundPosition: `-${offsetX}px -${offsetY}px`,
    });
  };

  // handle add product in cart //
  function handleAddCart(){
    if (localStorage.getItem("user") === null) {
      toast.error("Please login!");
      return;
    }else{
      const newdata = {...data,count:quantity}
      dispatch(setCartData(newdata));
      toast.success("Item added to cart");
    }
  }

  return (
    <>
      <div className="bg-[#addadd] p-10 mt-1 px-20 grid place-items-center lg:flex lg:justify-between relative">
        <h4 className="text-3xl">{data.category_name}</h4>
        <p className="">
          <Link to="/">Home</Link>/<Link to="/category">category</Link>/
          <span className="text-gray-500">{data.category_name}</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 my-10">
        {/* img part */}
        <div className="flex justify-center">
          <img
            src={data.image}
            alt={data.slug}
            className="border p-2 h-96 w-80 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMagnifierStyle({ display: "none" })}
          />
        </div>

        <div className="p-2">
          <p className="text-2xl font-semibold">{data.category_name}</p>
          <p className="text-gray-400">{data.name}</p>
          <hr className="mt-4 mb-4" />
          <p className="text-xl">
            &#8377;{data.min_max_price.min_price}
            <sup>
              <strike className="text-red-500">
                &#8377;{data.min_max_price.min_price}
              </strike>
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
            <button className="border-2 border-[#49a6a2] flex items-center font-semibold rounded-md px-2 p-2 text-[#49a6a2] gap-2 active:scale-75 duration-500 ease-in-out" onClick={handleAddCart}>
              <FaCartPlus />
              <p className="">Add to Cart</p>
            </button>
            <button className="border-2 border-red-700 flex items-center rounded-md px-2 p-2 font-semibold text-red-700 gap-2 active:scale-75 duration-500 ease-in-out">
              <FaHeart />
              <p className="">Add to favorite</p>
            </button>
          </div>
        </div>
        <div className="hidden md:hidden lg:block" style={{
            ...magnifierStyle,
            position: "absolute",
            width: "320px",
            height: "385px",
            // borderRadius: "50%",
            backgroundImage: `url(${data.image})`, // Same image URL here
            backgroundSize: "700px 800px", // 2x zoom
            pointerEvents: "none",
            backgroundRepeat: "no-repeat",
            border: "1px solid lightgray",
          }}
        />
      </div>
    </>
  );
};

export default ProductPriceDetails;
