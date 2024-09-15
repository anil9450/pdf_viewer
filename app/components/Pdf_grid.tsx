"use client";
import React from "react";
import Image from "next/image";
import { IoDocumentOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { data } from "../data";

const Pdf_grid = () => {
  const PdfData = [
    {
      id: 1,
      pdf: "/a1.pdf",
    },
    {
      id: 2,
      pdf: "/a2.pdf",
    },
    {
      id: 3,
      pdf: "/a3.pdf",
    },
    {
      id: 4,
      pdf: "/a4.pdf",
    },
    {
      id: 5,
      pdf: "/a5.pdf",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl item-center justify-between p-2 lg:px-8 shadow-sm bg-slate-200">
      <div className="grid xl:grid-cols-4 grid-cols gap-4 mt-10">
        {data.map((item, index) => (
          <div className="bg-white shadow-sm rounded-lg" key={item.id}>
            <Image
              className="rounded-lg object-cover h-32 w-96 p-1"
              src={item.img}
              width={700}
              height={50}
              alt="Picture of the author"
            />
            <div className="p-2 mt-8">
              <h1 className="ml-2 text-lg font-bold text-justify">
                {item.heading}
              </h1>
              <div className="flex justify-between w-full mt-8">
                <div className="flex p-3 bg-slate-200 rounded-full">
                  <span className="mt-1">
                    <IoDocumentOutline />
                  </span>
                  <div className="ml-2 inline-block h-[15px] min-h-[1em] w-0.5 self-stretch bg-neutral-500 mt-1"></div>
                  <span className="ml-2">{item.view}</span>
                </div>
                <div className="flex p-3 bg-slate-200 rounded-full">
                  <span className="mt-1">
                    <IoDocumentOutline />
                  </span>
                  <div className="ml-2 inline-block h-[15px] min-h-[1em] w-0.5 self-stretch bg-neutral-500 mt-1"></div>
                  <span className="ml-2">{item.tr}</span>
                </div>
                <div className="flex p-3 bg-slate-200 rounded-full">
                  <span className="mt-1">
                    <FaEye />
                  </span>
                  <div className="ml-2 inline-block h-[15px] min-h-[1em] w-0.5 self-stretch bg-neutral-500 mt-1"></div>
                  <span className="ml-2">{item.view}</span>
                </div>
              </div>
              <Link href={`/${item.id}`}>
                <button className="bg-blue-500 p-2 text-white rounded-full mt-4 w-full">
                  View document
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pdf_grid;
