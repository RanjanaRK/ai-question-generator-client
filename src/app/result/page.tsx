import PDFIframe from "@/components/UploadPdf/PdfIframe";
import PdfViewer from "@/components/UploadPdf/PdfViewer";

const page = () => {
  return (
    <>
      <div className="">
        <PdfViewer pdfUrl="/UNIT-4.pdf" />
        <PDFIframe />
      </div>
    </>
  );
};

export default page;
