import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

export function Products() {
  const [products, setProducts] = useState([]);

  // funciton for handle category//
  const handleCategoryChange = (e) => {
    if (e.target.value === "ALL") {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }else{
        axios
        .get(`https://fakestoreapi.com/products/category/${e.target.value}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

    // function for handle pagination//
    const handlePagination = (e)=>{
        const number = e.target.value;
        // setProducts(products.splice(number*5,0));
    }

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const temp = res.data;
        setProducts(temp.splice(15,5));

      })
      .catch((err) => {
        console.log(err.message);
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
          <select
            className="border-2 rounded-md w-full p-2 mt-3 outline-none"
            onChange={handleCategoryChange}
          >
            <option value="ALL">ALL</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>
        <div className="">
            {/* pagination section start */}
            <div>
                <div className="flex gap-1 justify-center">
        <button className="bg-[#49a6a2] h-8 w-8 rounded-full text-white border text-md"><FaAngleDoubleLeft className="m-auto"/></button>
                    <button value={0} onClick={handlePagination} className="bg-[#49a6a2] h-8 w-8 rounded-full  text-white border text-md">1</button>
                    <button value={1} onClick={handlePagination} className="bg-[#49a6a2] h-8 w-8 rounded-full  text-white border text-md">2</button>
                    <button value={2} onClick={handlePagination} className="bg-[#49a6a2] h-8 w-8 rounded-full  text-white border text-md">3</button>
                    <button value={4} onClick={handlePagination} className="bg-[#49a6a2] h-8 w-8 rounded-full  text-white border text-md">4</button>
                    <button onClick={handlePagination} className="bg-[#49a6a2] h-8 w-8 rounded-full  text-white border text-md"><FaAngleDoubleRight className="m-auto"/></button>
                </div>
            </div>
            {/* pagination section end */}
            
          <div className="flex flex-wrap justify-center p-1">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex justify-center m-auto w-48 mt-2"
              >
                <div className="border rounded-md py-4 px-4 relative h-[100%]">
                  <span className="absolute left-0 px-1 bg-[#27cfc4e4] rounded-r text-white">
                    5% OFF
                  </span>
                  <img
                    src={item.image}
                    alt={item.name}
                    id={item.id}
                    className="cursor-pointer w-52 h-32 m-auto"
                  />
                  <div className="hover:-translate-y-2 duration-200 ease-in-out">
                    <p className="text-center">{(item.title).substr(0,10)}</p>
                    <p className="text-center font-semibold">
                      &#8377;{item.price}
                    </p>
                    <button className="flex items-center  gap-1 bg-[#09a69b] p-1 rounded-md m-auto text-white">
                      Add to cart
                      <sup>
                        <FaPlus />
                      </sup>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
