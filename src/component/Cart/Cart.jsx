import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartData,
  addCartItemCount,
  removeCartItemCount,
} from "../../redux/Slicer";
import { FaRegTrashAlt } from "react-icons/fa";

export function Cart() {
  let data = useSelector((state) => state.data.cart);
  const dispatch = useDispatch();

  // funtion for remove cart item//
  function handleRemoveCartItem(e) {
    const removeID = e.target.id;
    if (window.confirm("Record Deleted.\nAre you sure?") == true){
      dispatch(removeCartData(removeID));
    }else{
      return false;
    }
  }
  // function for add cart count//
  function handleAddCartCount(e) {
    const countID = e.target.id;
    dispatch(addCartItemCount(countID));
  }
  // function for add cart count//
  function handleRemoveCartCount(e) {
    const countID = e.target.id;
    dispatch(removeCartItemCount(countID));
  }

  return (
    <>
      {/* cart list */}
      <div className="my-4 grid lg:grid-cols-[6fr 6fr]">
        <div>
          <table className="border">
            <thead className="">
              <tr className="bg-gray-300 uppercase">
                <th className="w-28 p-2">Image</th>
                <th className="w-28 p-2">Product</th>
                <th className="w-28 p-2">Price</th>
                <th className="w-28 p-2">Qwantity</th>
                <th className="w-28 p-2">Total</th>
                <th className=""></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="text-center hover:bg-gray-200">
                  <td className="p-2">
                    <img src={item.image} className="h-20 w-20" alt="" />
                  </td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.min_max_price.min_price}</td>
                  <td className="p-2">
                    <div className="flex justify-between items-center border border-green-500 rounded-md w-28">
                      <button
                        id={item.id}
                        className="cursor-pointer border-0 w-6 rounded-md border-gray-500 active:scale-75 duration-100 ease-in-out text-2xl font-semibold"
                        onClick={handleRemoveCartCount}
                      >
                        -
                      </button>
                      {item.count}
                      <button
                        id={item.id}
                        className="cursor-pointer border-0 w-6 rounded-md border-gray-500 active:scale-75 duration-100 ease-in-out text-2xl font-semibold"
                        onClick={handleAddCartCount}
                      >
                        +
                        </button>
                    </div>
                  </td>
                  <td className="p-2">
                    {item.min_max_price.min_price * item.count}
                  </td>
                  <td className="p-2">
                    <FaRegTrashAlt
                      onClick={handleRemoveCartItem}
                      id={item.id}
                      className="text-red-500 cursor-pointer"
                      title="Remove"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </>
  );
}
