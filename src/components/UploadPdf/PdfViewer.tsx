"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = (numPages: any) => {
    setNumPages(numPages);
  };

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();

  return (
    <>
      <div className="grid h-44 grid-cols-2 gap-6 border-8 border-green-600 p-6">
        <Document file={pdfUrl} onLoadSuccess={onLoadSuccess}>
          {Array.from(new Array(numPages), (_, index) => (
            <Page key={index} pageNumber={index + 1} width={500} />
          ))}
        </Document>

        <div className="rounded-xl border p-6">
          Generated questions will appear here
        </div>
      </div>
    </>
  );
};

export default PdfViewer;
