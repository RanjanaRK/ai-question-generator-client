import PdfUpload from "@/components/UploadPdf/PdfUpload";

const page = () => {
  return (
    <>
      <div className=" py-6">
        <h1 className="text-3xl font-bold text-center pb-10">
          AI Question Generator
        </h1>
        <PdfUpload />

        <div className=" grid grid-cols-4  ">
          <div className="col-span-3">
            Instantly create multiple-choice, true-or-false, or open-ended
            tests. Upload a PDF, and our AI quiz generator will quickly provide
            questions and potential answers.
          </div>
          <ul>
            <li>Free and easy test maker for teachers</li>
            <li>Simple PDF to quiz maker for studying</li>
            <li> Generates questions and answers in seconds</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
