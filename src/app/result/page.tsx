import PDFIframe from "@/components/UploadPdf/PdfIframe";

const page = () => {
  return (
    <>
      <div className="">
        {/* <PdfViewer pdfUrl="/UNIT-4.pdf" /> */}
        <PDFIframe />
      </div>
    </>
  );
};

export default page;
