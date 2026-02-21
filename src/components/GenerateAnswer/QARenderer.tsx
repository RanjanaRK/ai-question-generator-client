"use client";

import { QA } from "@/lib/types";
import { useState } from "react";

const QARenderer = ({ data }: { data: QA[] }) => {
  const [revealedIndex, setRevealedIndex] = useState<number | null>(null);
  return (
    <>
      <div className="space-y-6">
        {data.map((item, index) => {
          const isRevealed = revealedIndex === index;

          return (
            <div
              key={index}
              className="bg-background rounded-2xl border p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-3">Question {index + 1}</h3>

              <p className="mb-4 text-lg font-semibold">{item.question}</p>

              {/* <button
                onClick={() => setRevealedIndex(isRevealed ? null : index)}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white"
              >
                {isRevealed ? "Hide Answer" : "Show Answer"}
              </button> */}

              {/* {isRevealed && ( */}
              <div className="mt-5 pt-4">
                <h4 className="mb-2">Answer:</h4>

                <p className="mb-3 leading-relaxed">{item.answer}</p>
              </div>
              {/* )} */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QARenderer;
