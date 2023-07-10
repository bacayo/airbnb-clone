"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="w-full py-2 transition bg-white border rounded-full cursor-pointer text-neutral-900 md:w-auto ">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold ">Anywhere</div>
        <div className="flex-1 hidden px-6 text-sm font-semibold text-center sm:block">
          Any Week
        </div>
        <div className="flex items-center gap-3 pl-6 pr-2 text-sm">
          <div className="hidden text-gray-500 sm:block ">Add Guests</div>
          <div className="p-2 text-white rounded-full bg-rose-500">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
