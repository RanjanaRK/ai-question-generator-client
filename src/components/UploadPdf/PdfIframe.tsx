"use client";

import { useGetPdf } from "@/hooks/useFile";
import { useGenerate } from "@/hooks/useGenerate";
import { useState } from "react";
import { toast } from "react-toastify";
import MCQRenderer from "../GenerateAnswer/MCQRenderer";
import QARenderer from "../GenerateAnswer/QARenderer";
import QuestionTypeOption from "../GenerateAnswer/QuestionTypeOption";

type Props = {
  pdfId: string;
};

export default function PDFIframe({ pdfId }: Props) {
  const { data } = useGetPdf(pdfId);
  const { mcqMutation, qaMutation } = useGenerate();

  const [questionType, setQuestionType] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleGenerate = (type: string) => {
    setQuestionType(type);

    if (type === "multiple-choice") {
      mcqMutation.mutate(pdfId, {
        onSuccess: (data) => {
          setResult(data);
          console.log(data);
          toast.success("generated");
        },
        onError: (err) => {
          toast.error(err?.response?.data?.message);
        },
      });
    }

    if (type === "open-ended") {
      qaMutation.mutate(pdfId, {
        onSuccess: (data) => {
          setResult(data);
          console.log(data);
          toast.success(data.message);
        },
        onError: (err) => {
          toast.error(err?.response?.data?.message);
        },
      });
    }
  };

  const resetGenerate = () => {
    setResult(null);
    setQuestionType(null);
  };

  const renderContent = () => {
    if (mcqMutation.isPending || qaMutation.isPending) {
      return <div className="text-center">Generating...</div>;
    }

    switch (questionType) {
      case "multiple-choice":
        return (
          <>
            <MCQRenderer data={result} />

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => handleGenerate("multiple-choice")}
                className="rounded-lg bg-black px-4 py-2 text-white"
              >
                Generate Again
              </button>

              <button onClick={resetGenerate} className="rounded-lg border px-4 py-2">
                Change Type
              </button>
            </div>
          </>
        );

      case "open-ended":
        return (
          <>
            <QARenderer data={result} />

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => handleGenerate("open-ended")}
                className="rounded-lg bg-black px-4 py-2 text-white"
              >
                Generate Again
              </button>

              <button onClick={resetGenerate} className="rounded-lg border px-4 py-2">
                Change Type
              </button>
            </div>
          </>
        );

      default:
        return <QuestionTypeOption onGenerate={handleGenerate} />;
    }
  };

  return (
    <div className="grid h-screen gap-6 p-6 md:grid-cols-2">
      <iframe src={data?.data.signedUrl} className="h-full w-full rounded-xl border" />

      <div className="rounded-xl border p-6">{renderContent()}</div>
    </div>
  );
}
