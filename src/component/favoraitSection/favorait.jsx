import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import {
  removeFavoraitData,
  clearFavoraitData,
} from "../../redux/favoraitItemData";
import { setCartData } from "../../redux/cartItemDataSlicer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Favorait({ openFev, closeFev }) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.favoraitData.favoraitData);
  if (!openFev) return null;

  // funtion for remove cart item//
  function handleRemoveCartItem(e) {
    const removeID = e.target.id;
    if (window.confirm("Record Deleted.\nAre you sure?") === true) {
      dispatch(removeFavoraitData(removeID));
    } else {
      return false;
    }
  }

  // function for add to cart from whishlist and remove wishlist
  function handleAddToCart(id, data) {
    console.log(id, data);

    dispatch(removeFavoraitData(id)); // remove data from favorait list//
    dispatch(setCartData(data)); // add data favorait to cart list//
    toast.success(`${data.name} added to cart`);
  }

  function handleCloseFavoraitWindow(e) {
    if (e.target.classList.contains("fevPage")) {
      closeFev();
    }
  }

  // function for handle img click//
  function handleImgClick(data){
    navigate('/PriceDetails',{state:data})
    closeFev();
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-[#464343ad] z-10 h-[100vh] grid fevPage"
        onClick={handleCloseFavoraitWindow}
      >
        <div className="bg-white border-2 rounded-md w-[60%] m-auto">
          <div className="bg-[#addadd] p-8 px-20 grid place-items-center lg:flex lg:justify-between">
            <h4 className="text-3xl">Wishlist</h4>
          </div>

          <div>
            <div>
              <div className="">
                <div
                  style={{
                    maxHeight: "450px",
                    overflow: "auto",
                    scrollbarWidth: "none",
                  }}
                >
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-300 uppercase">
                        <th className="w-32 p-2">Image</th>
                        <th className="w-32 p-2">Name</th>
                        <th className="w-32 p-2">Price</th>
                        <th className="w-32 p-2"></th>
                      </tr>
                    </thead>
                    <tbody className="h-32">
                      {data.map((item) => (
                        <tr
                          key={item.id}
                          className="text-center hover:bg-gray-100 cursor-pointer border"
                        >
                          <td className="w-32 p-2">
                            <img
                              src={item.image}
                              className="h-10 w-10 m-auto"
                              alt=""
                              onClick={()=>{handleImgClick(item)}}
                            />
                          </td>
                          <td>
                            <p>{item.name}</p>
                          </td>
                          <td className="w-32 p-2">
                            {item.min_max_price.min_price}
                          </td>
                          <td className="">
                            <div className="flex justify-evenly">
                              <div className="border border-transparent hover:border hover:border-green-500 rounded-md p-2">
                                <FaCartPlus
                                  id={item.id}
                                  className="text-xl text-green-800 cursor-pointer active:scale-75 duration-100 ease-in-out"
                                  title="Add to cart"
                                  onClick={() => {
                                    handleAddToCart(item.id, item);
                                  }}
                                />
                              </div>
                              <div className="border border-transparent hover:border hover:border-red-500 rounded-md p-2">
                                <FaRegTrashAlt
                                  onClick={handleRemoveCartItem}
                                  id={item.id}
                                  className="text-xl text-red-500 cursor-pointer active:scale-75 duration-100 ease-in-out"
                                  title="Remove"
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end m-5">
                <button
                  onClick={() => {
                    dispatch(clearFavoraitData([]));
                  }}
                  className="content-end border rounded-md p-1 px-5 bg-[#f70000] text-white font-semibold active:scale-75 duration-150 ease-in-out"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
