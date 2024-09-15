"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";

const Hero_Part1 = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    {
      value: "Subject",
      label: "Subject",
    },
    {
      value: "Option 2",
      label: "Option 2",
    },
    {
      value: "Option 3",
      label: "Option 3",
    },
  ];

  const [selectedValue1, setSelectedValue1] = useState("Universities");
  const handleChange1 = (event1: any) => {
    setSelectedValue(event1.target.value);
  };
  return (
    <div className="mx-auto max-w-7xl items-center justify-between p-2 lg:px-8 shadow-sm bg-slate-200">
      <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full"
          placeholder="Search for assignments, samples and resources . . ."
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-100 rounded-full"
        >
          <svg
            className="w-4 h-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>

      <div className="mt-2 flex">
        <select
          className="rounded-full"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={selectedValue1}
          onChange={handleChange1}
          className="ml-2 rounded-full"
        >
          <option value="Option 1">Universities</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <div className="ml-2 inline-block h-[35px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
        <button className="flex mt-2 ml-2">
          <FaArrowRotateRight className="mt-1" />
          <span className="ml-2">Clear all</span>
        </button>
      </div>
    </div>
  );
};

export default Hero_Part1;
