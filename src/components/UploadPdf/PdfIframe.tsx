"use client";

import { useState } from "react";
import MCQRenderer from "../GenerateAnswer/MCQRenderer";
import QARenderer from "../GenerateAnswer/QARenderer";
import QuestionTypeOption from "../GenerateAnswer/QuestionTypeOption";
import { useGetPdf } from "@/hooks/useFile";
import { useGenerate } from "@/hooks/useGenerate";
import { toast } from "react-toastify";

export const dummyMCQs = [
  {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A backend framework",
      "A database management system",
      "A programming language",
    ],
    correctAnswer: 0,
    explanation:
      "React is a JavaScript library developed by Facebook for building component-based user interfaces.",
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: 1,
    explanation: "useState allows you to add state variables to functional components.",
  },
  {
    question: "What does Next.js primarily provide on top of React?",
    options: [
      "Database integration",
      "Built-in state management",
      "Server-side rendering and routing",
      "Mobile app support",
    ],
    correctAnswer: 2,
    explanation:
      "Next.js provides server-side rendering, file-based routing, API routes, and performance optimizations.",
  },
  {
    question: "Which HTTP method is typically used to create new data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 1,
    explanation: "POST is used to send data to the server to create a new resource.",
  },
  {
    question: "What is Prisma used for?",
    options: [
      "Frontend styling",
      "ORM for database management",
      "Authentication provider",
      "State management tool",
    ],
    correctAnswer: 1,
    explanation:
      "Prisma is an ORM that simplifies database access in Node.js and TypeScript applications.",
  },
];

export const dummyQA = [
  {
    question:
      "Explain the difference between Server-Side Rendering (SSR) and Client-Side Rendering (CSR).",
    answer:
      "SSR renders pages on the server before sending them to the client, improving SEO and initial load time. CSR renders content in the browser using JavaScript after the page loads.",
  },
  {
    question: "What is the role of Prisma in a Next.js application?",
    answer:
      "Prisma acts as an ORM that allows developers to interact with databases using type-safe queries in Node.js and TypeScript.",
  },
];

type Props = {
  pdfId: string;
};

export default function PDFIframe({ pdfId }: Props) {
  const { data } = useGetPdf(pdfId);
  const { mcqMutation } = useGenerate();

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
      });
    }
  };

  const renderContent = () => {
    if (mcqMutation.isPending) {
      return <div>Generating...</div>;
    }

    switch (questionType) {
      case "multiple-choice":
        return <MCQRenderer data={result || []} />;
      case "open-ended":
        return <QARenderer data={result || []} />;

      default:
        return <QuestionTypeOption onGenerate={handleGenerate} />;
    }
  };

  return (
    <div className="grid h-screen grid-cols-2 gap-6 p-6">
      <iframe src={data?.data.signedUrl} className="h-full w-full rounded-xl border" />

      <div className="rounded-xl border p-6">{renderContent()}</div>
    </div>
  );
}
