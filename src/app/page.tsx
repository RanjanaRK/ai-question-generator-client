import PdfUpload from "@/components/UploadPdf/PdfUpload";

const page = () => {
  return (
    <>
      <div className="py-6">
        <div className="mx-auto mt-8 max-w-3xl pb-8 text-center text-3xl font-bold">
          <h2 className="mb-2 text-xl font-semibold">Upload Your PDF to Generate Questions</h2>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Choose a file and click <span className="font-medium">“Generate Questions”</span>
            to create AI-powered quizzes instantly.
          </p>

          <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
            Supported format: PDF • Max size: 5MB
          </p>
        </div>

        <PdfUpload />
      </div>
    </>
  );
};

export default page;
