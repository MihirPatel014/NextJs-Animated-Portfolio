"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin,FaTwitter,FaInstagram } from "react-icons/fa";

function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true); // Component is mounted on the client side
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t
    border-gray-700 pt-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Mihir Patel</h1>

      <div className='flex space-x-6 mt-4'>
        <a href='#' className='hover:text-gray-300'>
          <FaLinkedin />
        </a>
        <a href='#' className='hover:text-gray-300'>
          <FaTwitter />
        </a>
        <a href='#' className='hover:text-gray-300'>
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Footer;
