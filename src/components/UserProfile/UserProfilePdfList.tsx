import { useDeletePdf } from "@/hooks/useFile";
import { PdfDocument } from "@/lib/types";
import { Loader2, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

type Props = {
  pdfs: PdfDocument[];
};

const UserProfilePdfList = ({ pdfs }: Props) => {
  const { deletePdfMutation } = useDeletePdf();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  return (
    <>
      <div className="mt-6 space-y-3">
        {pdfs.length === 0 && <p className="text-sm text-gray-500">No PDFs uploaded yet.</p>}

        {pdfs.map((pdf) => (
          <div key={pdf.id} className="flex items-center justify-between rounded-lg border p-3">
            <div>
              <p className="font-medium">{pdf.originalName}</p>
              <p className="text-xs text-gray-500">
                {new Date(pdf.createdAt).toLocaleDateString()}
              </p>
            </div>

            <Button
              //   disabled={deletePdfMutation.isPending}
              onClick={() => {
                deletePdfMutation.mutate(pdf.id);
              }}
              className="rounded-md bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
            >
              <Trash />
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserProfilePdfList;
