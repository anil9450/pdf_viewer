"use client";
import React from "react";
import Header from "../components/Header";
import { data } from "../data";
import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiZoomIn } from "react-icons/ci";
import { CiZoomOut } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;

const IndividualPdf = ({ params: { id } }: { params: { id: string } }) => {
  const individualItem = data?.find((res) => res.id === id);

  const [file, setFile] = useState<PDFFile>(individualItem?.pdf!);
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    const nextFile = files?.[0];

    if (nextFile) {
      setFile(nextFile);
    }
  }

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl item-center justify-between p-2 lg:px-8 shadow-sm bg-slate-200">
        <div className="Example">
          <div className="Example__container">
            <div className="Example__container__document" ref={setContainerRef}>
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
              >
                {Array.from(new Array(numPages), (_el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={
                      containerWidth
                        ? Math.min(containerWidth, maxWidth)
                        : maxWidth
                    }
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>

        <div className="flex bg-blue-500 p-3 rounded-full max-w-96 mx-auto">
          <div className="flex space-x-2">
            <span className="bg-white rounded-full p-2 text-blue-500">
              <IoIosArrowUp />
            </span>
            <span className="bg-white rounded-full p-1 text-blue-500">
              2 out of 14
            </span>
            <span className="bg-white rounded-full p-2 text-blue-500">
              <IoIosArrowDown />
            </span>
          </div>
          <div className="ml-2 inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-white mt-1"></div>
          <span className="">
            <CiZoomIn className="text-white" size={35} />
          </span>
          <span className="">
            <CiZoomOut className="text-white" size={35} />
          </span>
          <div className="ml-2 inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-white mt-1"></div>
          <span className="flex bg-white p-1 ml-2 rounded-full text-blue-500">
            <MdOutlineFileDownload className="mt-1" />
            Download
          </span>
        </div>
      </div>
    </div>
  );
};

export default IndividualPdf;
