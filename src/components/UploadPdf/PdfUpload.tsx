"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const PdfUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
  });

  return (
    <>
      <div className="grid place-items-center gap-4">
        {/* Dropzone */}
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-foreground/45 rounded-xl
                   bg-foreground/5 dark:bg-foreground/10
                   flex flex-col items-center justify-center
                   h-72 cursor-pointer transition
                   w-full "
        >
          <input {...getInputProps()} />

          <div className="text-center">
            <div
              className="text-2xl font-semibold mb-2 border rounded-xl py-3
                          bg-foreground/15 hover:bg-foreground/25 w-64"
            >
              {isDragActive ? "Drop PDF here" : "Choose PDF file"}
            </div>

            <p className="opacity-80">or drag & drop files here</p>

            {file && (
              <p className="mt-4 text-sm font-semibold px-3 py-1 rounded bg-accent">
                {file.name}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground
                   hover:opacity-90 disabled:opacity-50 transition"
        >
          Generate questions
        </button>
      </div>
    </>
  );
};

export default PdfUpload;
