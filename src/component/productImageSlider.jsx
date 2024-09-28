import { useEffect, useState } from "react";
import axios from "axios";
import { FaCartPlus } from "react-icons/fa6";

//import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import requried moudles
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

export function ProductImageSlider() {
  const [data, setData] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);
  useEffect(() => {
    // getting limited product from API//
    axios
      .get("https://fakestoreapi.com/products?limit=10")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    // getting only category wise product form API
    axios
      .get(
        "https://fakestoreapi.com/products/category/women's%20clothing?limit=5"
      )
      .then((res) => {
        setCategoryProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <>
      <div className="w-[90%] m-auto flex justify-between">
        <div>
          <p className="text-xl font-bold">New Product</p>
          <p className="text-gray-400 font-semibold">special</p>
        </div>
        <div>
          <p className="text-[#09a69b] font-semibold">View More</p>
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
                spaceBetween: 10,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <div>
                <SwiperSlide className="">
                  <div className="flex justify-center m-auto w-44">
                    <div className="border rounded-md py-4 px-4 relative h-[100%]">
                      <span className="absolute left-0 px-1 bg-[#27cfc4e4] rounded-r text-white">
                        5% OFF
                      </span>
                      <img
                        src={item.image}
                        alt={item.name}
                        id={item.id}
                        className="cursor-pointer w-48 h-32 m-auto"
                      />
                      <div className="hover:-translate-y-2 duration-200 ease-in-out">
                        <p className="text-center">{item.title}</p>
                        <p className="text-center font-semibold">
                          &#8377;{item.price}
                        </p>
                        <button className="flex items-center  gap-1 bg-[#09a69b] p-1 rounded-md m-auto text-white">
                          <FaCartPlus />
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>

      {/* fetching data from categoryProduct state */}

      <div className="mb-5 grid grid-cols-2 gap-2 lg:grid lg:grid-cols-4 xl:flex xl:gap-0 xl:h-80">
        {categoryProduct.map((item) => (
          <div className="border h-[100%]  w-fit md:w-60 md:m-auto lg:w-60 rounded-md py-4 px-2 relative">
            <span className="absolute left-0 px-1 bg-[#27cfc4e4] rounded-r text-white">
              5% OFF
            </span>
            <img
              src={item.image}
              alt=""
              id={item.id}
              className="cursor-pointer w-36 h-36 m-auto"
            />
            <div className="hover:-translate-y-2 duration-200 ease-in-out">
              <p className="text-center">{item.title}</p>
              <p className="text-center font-semibold">&#8377;{item.price}</p>
              <button className="flex items-center  gap-1 bg-[#09a69b] p-1 rounded-md m-auto text-white">
                <FaCartPlus />
                Add to cart
              </button>
            </div>
          </div>
        ))}
        {/* offer container */}
        <div className="border w-60 md:w-60 md:m-auto lg:w-60 h-[100%] rounded-md py-4 px-2 relative grid place-items-center">
          <div>
          <p className="font-semibold text-xl">Offer</p>
          <p className="font-semibold text-gray-400">Special offer</p>
          <p className="text-[#09a69b] font-semibold">View More</p>
          </div>
        </div>
      </div>
    </>
  );
}
