import PDFIframe from "@/components/UploadPdf/PdfIframe";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log(slug);

  return (
    <>
      <div className="py-6">
        {/* <PdfViewer pdfUrl="/UNIT-4.pdf" /> */}
        <PDFIframe pdfId={slug} />
      </div>
    </>
  );
};

export default page;
