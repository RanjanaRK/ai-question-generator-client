import { GenerateMCQResponse, MCQ } from "@/lib/types";

const MCQRenderer = ({ data }: { data: GenerateMCQResponse }) => {
  console.log(data);

  return (
    <>
      {/* <div className="space-y-6">
        {data.mcqs.map((mcq, index) => (
          <div
            key={index}
            className="bg-background rounded-xl border p-5 shadow-md transition hover:shadow-lg"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-lg font-semibold">Question {index + 1}</h3>
            </div>

            <p className="mb-4">{mcq.question}</p>

            <div className="space-y-3">
              {mcq.options.map((option) => {
                const isCorrect = option === mcq.correctAnswer;

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

            {/* {mcq.explanation && (
              <div className="bg-background mt-4 rounded-lg border p-3 text-sm">
                <span className="font-medium">Explanation:</span> {mcq.explanation}
              </div>
            )} */}
      {/* </div>
        ))}
      </div> */}

      <div className="space-y-6">
        {data.mcqs.map((mcq, index) => {
          const options = mcq.options;

          return (
            <div key={index} className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 font-semibold">Question {index + 1}</h3>

              <p className="mb-5 text-lg">{mcq.question}</p>

              <div className="space-y-3">
                {Object.entries(options).map(([key, value]) => {
                  const isCorrect = key === mcq.correctAnswer;

                  return (
                    <div
                      key={key}
                      className={`rounded-lg border p-3 ${
                        isCorrect ? "border-green-500 bg-green-50" : "bg-muted"
                      } `}
                    >
                      <span className="mr-2 font-medium">{key}</span>

                      {/* {value} */}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MCQRenderer;
