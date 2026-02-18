"use client";

import { useState } from "react";
import { Document, Page } from "react-pdf";

const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = (numPages: any) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div className="h-[75vh] overflow-auto rounded-xl bg-white p-4 shadow">
        <Document file={pdfUrl} onLoadSuccess={onLoadSuccess}>
          {Array.from(new Array(numPages), (_, index) => (
            <Page key={index} pageNumber={index + 1} width={500} />
          ))}
        </Document>
      </div>
    </>
  );
};

export default PdfViewer;
