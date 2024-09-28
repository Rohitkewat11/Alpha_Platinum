import React from "react";
import { Link } from "react-router-dom";
import { RiMailOpenLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div className="my-5" id="top">
        <div className="bg-[#addadd] p-10 px-20 grid place-items-center lg:flex lg:justify-between">
          <h4 className="text-3xl">Contact Us</h4>
          <p className="">
            <Link to="/">Home</Link>/
            <span className="text-gray-500">Contact US</span>
          </p>
        </div>
        {/* contact form and google map */}
        <div className="grid lg:grid-cols-2 p-4 w-[80%] m-auto">
          <div className="p-2 h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3350465143653!2d75.8911284249963!3d22.752944076336973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1727263268698!5m2!1sen!2sin"
              loading="lazy"
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className="p-2">
            <div className="border rounded-xl p-5">
              <form className="h-full">
                <div className="flex gap-3 mb-3">
                  <p>Register as*:</p>
                  <div>
                    <input
                      type="radio"
                      id="vendor"
                      name="person"
                      className="me-2"
                    />
                    <label htmlFor="vendor">Vendor</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="customer"
                      name="person"
                      className="me-2"
                    />
                    <label htmlFor="customer">Customer</label>
                  </div>
                </div>
                <label className="" htmlFor="">
                  Username
                </label>
                <input
                  className="w-full border outline-none p-2  mb-2"
                  type="text"
                  placeholder="Your Name"
                />
                <label className="" htmlFor="">
                  E-mail
                </label>
                <input
                  className="w-full border outline-none p-2 mb-2"
                  type="text"
                  placeholder="Your Email"
                />
                <label className="" htmlFor="">
                  Mobile
                </label>
                <input
                  className="w-full border outline-none p-2 mb-2"
                  type="text"
                  placeholder="Mobile Number"
                />
                <label className="" htmlFor="">
                  City
                </label>
                <input
                  className="w-full border outline-none p-2 mb-2"
                  type="text"
                  placeholder="Your City"
                />
                <label className="" htmlFor="">
                  Message
                </label>
                <textarea
                  className="w-full border outline-none p-2 mb-2"
                  type="text"
                  placeholder="Your Message"
                  rows="5"
                  cols="5"
                />
                <button className="w-full bg-[#49a6a2] border p-2 mt-4 rounded-md active:scale-50 duration-200 ease-in-out">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* contact type */}
        <div className="w-[80%] m-auto lg:flex gap-5 justify-between">
          <fieldset className="border-2 text-center p-5 rounded-md mt-3 lg:w-96">
            <legend className="px-2">
              <FaLocationDot
                className="text-4xl text-[#49a6a2] cursor-pointer"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              />
            </legend>
            <p className="text-2xl font-semibold text-gray-400">Find us</p>
            <p>Vijay Nagar Indore</p>
          </fieldset>
          <fieldset className="border-2 text-center p-5 rounded-md mt-3 lg:w-96">
            <legend className="px-2">
              <IoCall
                className="text-4xl text-[#49a6a2] cursor-pointer"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              />
            </legend>
            <p className="text-2xl font-semibold text-gray-400">Contact Us</p>
            <p>9876543210</p>
          </fieldset>
          <fieldset className="border-2 text-center p-5 rounded-md mt-3 lg:w-96">
            <legend className="px-2">
              <RiMailOpenLine
                className="text-4xl text-[#49a6a2] cursor-pointer"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              />
            </legend>
            <p className="text-2xl font-semibold text-gray-400">Email Us</p>
            <p>support@alphaplatinum.in</p>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Contact;
