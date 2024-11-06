import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCartData } from "../../redux/cartItemDataSlicer";
import {
  setFavoraitdata,
  removeFavoraitData,
} from "../../redux/favoraitItemData";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";

export function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [favoriteStatus, setFavoriteStatus] = useState(true); // Track favorite status

  // funciton for handle img click send data to productPriceDetails page//
  function handleImgClick(e) {
    const filterData = products.find((item) => item.id === e.target.id);
    navigate("/PriceDetails", { state: filterData });
  }

  //function for handle Add to cart button//
  function handleAddToCartBtn(e) {
    const id = e.target.id;
    if (localStorage.getItem("user") === null) {
      toast.error("Please login!");
      return;
    } else {
      const findData = products.find((item) => item.id === id);
      const productToAdd = { ...findData, count: 1, favoraitStatus: false }; // Create a deep copy of the found item to avoid mutating any read-only object
      dispatch(setCartData(productToAdd));
      toast.success("Item added to cart");
    }
  }

  //function for handle Add to favorait button//
  function handleAddTofavoraitBtn(e) {
    const id = e.target.id;

    if (localStorage.getItem("user") === null) {
      toast.error("Please login!");
      return;
    } else {
      const findData = products.find((item) => item.id === id);
      if (findData) {
        const productToAdd = { ...findData, count: 1, favoraitStatus: false };
        dispatch(setFavoraitdata(productToAdd));
        toast.success(`${productToAdd.name}saved to favorait`);
        setFavoriteStatus((prevState) => ({
          ...prevState,
          [id]: !prevState[id], // Toggle the specific product's favorite status
        }));
      }
    }
  }

  // toggle favorait status//
  function handleFavoraitStatus(id) {
    console.log(id);

    // Toggle favorite status for the specific product

    setFavoriteStatus((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the specific product's favorite status
    }));
    dispatch(removeFavoraitData(id));
    toast.error("Item removed");
  }

  useEffect(() => {
    const data = [];
    axios
      .post("https://alphasilver.productsalphawizz.com/app/v1/api/get_sections")
      .then((res) => {
        res.data.data.map((item) =>
          item.product_details.map((val) => data.push(val), setProducts(data))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="bg-[#addadd] p-8 px-20 grid place-items-center lg:flex lg:justify-between mt-1">
        <h4 className="text-3xl">Products</h4>

        <p className="">
          <Link to="/">Home</Link>/
          <span className="text-gray-500">products</span>
        </p>
      </div>

      <div className="grid md:grid-cols-[3fr,9fr] mb-5">
        <div className="p-3">
          <h3 className="text-xl font-semibold underline">Category:-</h3>
          <select className="border-2 rounded-md w-full p-2 mt-3 outline-none">
            <option value="ALL">ALL</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>
        <div className="">
          <div className="flex justify-center lg:justify-normal gap-5 flex-wrap p-1">
            {products.map((item) => (
              <div
                key={item.id}
                className="border rounded-md py-4 px-4 relative h-[100%]"
              >
                <div className="flex justify-between">
                  <div className="-ms-4 px-1 bg-[#27cfc4e4] rounded-r text-white">
                    5% OFF
                  </div>
                  <div>
                    {/* favorait button */}
                    {favoriteStatus[item.id] ? (
                      <FaHeart
                        id={item.id}
                        className="text-xl cursor-pointer text-red-500"
                        onClick={() => {
                          handleFavoraitStatus(item.id);
                        }}
                      />
                    ) : (
                      <FaRegHeart
                        onClick={handleAddTofavoraitBtn}
                        id={item.id}
                        className="text-gray-300 text-xl cursor-pointer hover:text-red-500"
                      />
                    )}
                  </div>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  id={item.id}
                  onClick={handleImgClick}
                  className="cursor-pointer w-52 h-52 m-auto"
                />
                <div className="hover:-translate-y-2 duration-200 ease-in-out">
                  <p className="text-center">{item.name}</p>
                  <p className="text-center font-semibold">
                    &#8377;{item.min_max_price.min_price}
                  </p>
                  <button
                    className="flex items-center  gap-1 bg-[#09a69b] p-1 rounded-md m-auto text-white active:scale-75 duration-150 ease-in-out"
                    onClick={handleAddToCartBtn}
                    id={item.id}
                  >
                    Add to cart
                    <sup>
                      <FaPlus />
                    </sup>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
