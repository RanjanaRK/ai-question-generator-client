import PdfUpload from "@/components/UploadPdf/PdfUpload";

const page = () => {
  return (
    <>
      <div className=" py-6">
        <h1 className="text-3xl font-bold text-center pb-10">
          AI Question Generator
        </h1>
        <PdfUpload />
      </div>
    </>
  );
};

export default page;
