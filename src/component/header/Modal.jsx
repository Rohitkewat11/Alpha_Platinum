import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Login from "../login&Register/login";
import { Register } from "../login&Register/register";

export function Modal({ isOpen, onClose }) {
  const [active, setActive] = useState(true);

  if (!isOpen) return null; // Don't render the modal if it's not open

  // if user clicks outside on modal form close modal//
    function handleClose(e){
      if(e.target.classList.contains("login-modal")){
        onClose();
      }
    };

  return (
    <div className=" fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 fixed inset-0 login-modal" onClick={handleClose}></div>
      {/* Background overlay */}
      <div className="bg-white rounded-lg shadow-lg z-10 w-full max-w-md relative">
        <div className="grid grid-cols-2 text-center">
          <button
            className="rounded-tl-md p-2 active:scale-75 duration-200 ease-in-out"
            onClick={() => {
              setActive(true);
            }}
            style={{ backgroundColor: active ? "#49a6a2" : "" }}
          >
            Login
          </button>

          <button
            className="rounded-rl-md p-2 active:scale-75 duration-200 ease-in-out"
            onClick={() => {
              setActive(false);
            }}
            style={{ backgroundColor: active ? "" : "#09a69b" }}
          >
            Register
          </button>
        </div>

        <div className="p-4">{active ? <Login /> : <Register />}</div>
        <button
          onClick={onClose}
          className="text-gray-800 text-4xl absolute -top-2 -right-2 active:scale-75 duration-200 ease-in-out"
          title="Close"
        >
          <IoMdCloseCircle />
        </button>
      </div>
    </div>
  );
}
