import { useEffect, useState } from "react";
import axios from "axios";
import { FaCartPlus } from "react-icons/fa6";
// import react toastfy//
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import requried moudles
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCartData } from "../redux/Slicer.js";

//display fake store API data//
export function ProductImageSlider() {
  const [allProduct, setAllProduct] = useState([[], [], []]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProductData = allProduct.flat(); //combine all array//

  //function for handle Add to cart button//
  function handleAddToCartBtn(e) {
    const id = e.target.id;
    let temp = [];
    allProduct.map((item) => item.map((val) => temp.push(val)));

    if (localStorage.getItem("user") === null) {
      toast.error("Please login!");
      return;
    }else{
      const findData = temp.find((item) => item.id === id);
      const productToAdd = { ...findData, count: 1 }; // Create a deep copy of the found item to avoid mutating any read-only object
      dispatch(setCartData(productToAdd));
      toast.success("Item added to cart");
    }
  }

  // funciton for handle img click send data to productPriceDetails page//
  function handleImgClick(e) {
    const filterData = allProductData.find((item) => item.id === e.target.id);
    navigate("/PriceDetails", { state: filterData });
  }

  // for All product//
  useEffect(() => {
    const temp = [];
    axios
      .post("https://alpha-platinum.vercel.app/api/get_sections")
      .then((res) => {
        res.data.data.map(
          (item) => temp.push(item.product_details),
          setAllProduct(temp)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-[90%] m-auto flex justify-between">
        <div>
          <p className="text-xl font-bold">New Product</p>
          <p className="text-gray-400 font-semibold">special</p>
        </div>
        <div>
          <Link to="/products">
            <p className="text-[#09a69b] font-semibold">View More</p>
          </Link>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 mb-10">
        <div className="my-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {allProduct[0].map((item) => (
              <div>
                <SwiperSlide>
                  <div className="border rounded-md relative h-[100%] m-auto w-56 p-2">
                    <span className="absolute left-0 px-1 bg-[#27cfc4e4] rounded-r text-white">
                      10% OFF
                    </span>
                    <img
                      src={item.image}
                      alt={item.name}
                      id={item.id}
                      onClick={handleImgClick}
                      className="cursor-pointer w-48 h-48 m-auto"
                    />
                    <div className="bg-white hover:-translate-y-3 duration-200 ease-in-out group"  >
                      <p className="text-center font-semibold group-hover:text-[#09a69b]">{item.name}</p>
                      <p className="text-center font-semibold">
                        &#8377;&nbsp;{item.min_max_price.min_price}
                      </p>
                      <button
                        className="flex items-center border-2 border-[#09a69b]  gap-1 bg-[#09a69b] p-1 rounded-md m-auto text-white active:scale-75 duration-150 ease-in-out"
                        onClick={handleAddToCartBtn}
                        id={item.id}
                      >
                        <FaCartPlus />
                        Add to cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>

      {/* fetching data index 2 products */}

      <div className="mb-5 grid grid-cols-2 lg:grid px-3 lg:grid-cols-4 xl:flex xl:gap-2">
        {allProduct[1].slice(0, 5).map((item) => (
          <div className="border h-[100%] w-56 md:w-60 md:m-auto lg:w-60 rounded-md py-4 px-2 relative">
            <span className="absolute left-0 px-1 bg-[#27cfc4e4] rounded-r text-white">
              5% OFF
            </span>
            <img
              src={item.image}
              alt=""
              id={item.id}
              onClick={handleImgClick}
              className="cursor-pointer w-36 h-36 m-auto"
            />
            <div className="bg-white hover:-translate-y-2 duration-200 ease-in-out group">
              <p className="text-center font-semibold group-hover:text-[#09a69b]">{item.name}</p>
              <p className="text-center font-semibold">
                &#8377;&nbsp;{item.min_max_price.min_price}
              </p>
              <button
                className="flex items-center gap-1 bg-[#09a69b] p-1 rounded-md m-auto text-white active:scale-75 duration-150 ease-in-out"
                onClick={handleAddToCartBtn}
                id={item.id}
              >
                <FaCartPlus />
                Add to cart
              </button>
            </div>
          </div>
        ))}
        {/* offer container */}
        <div className="border w-56 h-58 rounded-md py-4 px-2 relative grid place-items-center">
          <div>
            <p className="font-semibold text-xl">Offer</p>
            <p className="font-semibold text-gray-400">Special offer</p>
            <p className="text-[#09a69b] font-semibold">View More</p>
          </div>
        </div>
      </div>
      <hr />
      {/* fetching data index 3 products */}
      <div className="w-[90%] m-auto my-5">
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-bold">New Product</p>
            <p className="text-gray-400 font-semibold">special</p>
          </div>
          <div>
            <Link to="/products">
              <p className="text-[#09a69b] font-semibold">View More</p>
            </Link>
          </div>
        </div>

        <div className="my-5 px-3 ">
          {allProduct[2].map((item) => (
            <div className="border h-[100%] w-56 md:w-60 lg:w-60 rounded-md py-4 px-2 relative">
              <span className="absolute left-0 px-1 bg-[#27cfc4e4] rounded-r text-white">
                5% OFF
              </span>
              <img
                src={item.image}
                alt=""
                id={item.id}
                onClick={handleImgClick}
                className="cursor-pointer w-36 h-36 m-auto"
              />
              <div className="bg-white hover:-translate-y-2 duration-200 ease-in-out group">
                <p className="text-center font-semibold group-hover:text-[#09a69b]">{item.name}</p>
                <p className="text-center font-semibold">
                  &#8377;&nbsp;{item.min_max_price.min_price}
                </p>
                <button
                  className="flex items-center gap-1 bg-[#09a69b] p-1 rounded-md m-auto text-white active:scale-75 duration-150 ease-in-out"
                  id={item.id}
                  onClick={handleAddToCartBtn}
                >
                  <FaCartPlus />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
