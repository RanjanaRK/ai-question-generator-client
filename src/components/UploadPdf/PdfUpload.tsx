"use client";

import { useUploadPdf } from "@/hooks/useFile";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

const PdfUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const { pdfUploadmutate, error, loading } = useUploadPdf();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleUpload = () => {
    if (!file) return;

    try {
      pdfUploadmutate(file);
    } catch (error) {
      console.log(error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
  });

  return (
    <>
      <div className="grid place-items-center gap-4">
        <div
          {...getRootProps()}
          className="border-foreground/45 bg-foreground/5 dark:bg-foreground/10 flex h-72 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition"
        >
          <input {...getInputProps()} />

          <div className="text-center">
            <div className="bg-foreground/15 hover:bg-foreground/25 mb-2 w-64 rounded-xl border py-3 text-2xl font-semibold">
              {isDragActive ? "Drop PDF here" : "Choose PDF file"}
            </div>

            <p className="opacity-80">or drag & drop files here</p>

            {file && (
              <p className="bg-accent mt-4 rounded px-3 py-1 text-sm font-semibold">{file.name}</p>
            )}
          </div>
        </div>

        <Button
          className="bg-primary text-primary-foreground rounded-xl px-6 py-3 transition hover:opacity-90 disabled:opacity-50"
          onClick={handleUpload}
          disabled={!file || loading}
        >
          {loading ? "Uploading..." : "Generate Questions"}
        </Button>
      </div>
    </>
  );
};

export default PdfUpload;
