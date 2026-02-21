import { MCQ } from "@/lib/types";

const MCQRenderer = ({ data }: { data: MCQ[] }) => {
  return (
    <>
      <div className="space-y-6">
        {data.map((mcq, index) => (
          <div
            key={index}
            className="bg-background rounded-xl border p-5 shadow-md transition hover:shadow-lg"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-lg font-semibold">Question {index + 1}</h3>
            </div>

            <p className="mb-4">{mcq.question}</p>

            <div className="space-y-3">
              {mcq.options.map((option, optIndex) => {
                const isCorrect = optIndex === mcq.correctAnswer;

                return (
                  <div
                    key={optIndex}
                    className={`rounded-lg border p-3 text-sm transition ${
                      isCorrect
                        ? "border-accent-foreground bg-foreground/15"
                        : "border-foreground/25 bg-foreground/5"
                    }`}
                  >
                    <span className="mr-2 font-medium">{String.fromCharCode(65 + optIndex)}.</span>
                    {option}
                  </div>
                );
              })}
            </div>

            {mcq.explanation && (
              <div className="bg-background mt-4 rounded-lg border p-3 text-sm">
                <span className="font-medium">Explanation:</span> {mcq.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MCQRenderer;
