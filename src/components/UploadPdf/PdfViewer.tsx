"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import QuestionTypeOption from "../GenerateAnswer/QuestionTypeOption";

const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const [numPages, setNumPages] = useState<number>();
  const onLoadSuccess = (numPages: any) => {
    setNumPages(numPages);
  };

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();

  return (
    <>
      <div className="grid h-44 grid-cols-2 gap-6 p-6">
        <Document
          file="/UNIT-4.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page key={index} pageNumber={index + 1} />
          ))}
        </Document>

        <div className="rounded-xl border p-6">
          <QuestionTypeOption />
        </div>
      </div>
    </>
  );
};

export default PdfViewer;
