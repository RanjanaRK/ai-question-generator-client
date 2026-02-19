"use client";

import { useSearchParams } from "next/navigation";
import QuestionTypeOption from "../GenerateAnswer/QuestionTypeOption";

export default function PDFIframe() {
  return (
    <div className="grid h-screen grid-cols-2 gap-6 border-4 p-6">
      <iframe src={"/UNIT-4.pdf"} className="h-full w-full rounded-xl border" />

      <div className="rounded-xl border p-6">
        <QuestionTypeOption />
      </div>
    </div>
  );
}
