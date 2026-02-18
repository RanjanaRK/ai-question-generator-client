import PdfViewer from "@/components/UploadPdf/PdfViewer";

const page = () => {
  return (
    <>
      <div className="">
        <PdfViewer pdfUrl="/UNIT-4.pdf" />
      </div>
    </>
  );
};

export default page;
