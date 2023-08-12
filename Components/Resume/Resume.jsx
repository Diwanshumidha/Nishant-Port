"use client";
import { useState, useEffect } from "react";
{/* @ts-ignore */}
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {FcDownload} from 'react-icons/fc'


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ResumePDF = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setwidth] = useState(0);

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  useEffect(() => {
    const handleResize = () => {
      setwidth((window.innerWidth * 90) / 100);
    };

    // Initial width

    setwidth((window.innerWidth));

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" flex gap-3 max-[500px]:flex-col">

      <a href="../../public/resume.pdf" className=" px-6 py-2 mx-auto bg-white flex items-center justify-center gap-2 text-black rounded-full mb-6" download={true}>Download <FcDownload/> </a>
      <a href={'/resume.pdf'} target="_blank" className=" px-6 py-2 mx-auto bg-white flex items-center justify-center gap-2 text-black rounded-full mb-6" > Open in new tab </a>
      </div>
      
      {/* @ts-ignore */}
      <Document
        file="./resume.pdf"       
        className={`flex   justify-center mt-9  items-center`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {/* @ts-ignore */}
        <Page
          width={width > 600? width * 0.7: width * 0.9}
          pageNumber={pageNumber}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default ResumePDF;
