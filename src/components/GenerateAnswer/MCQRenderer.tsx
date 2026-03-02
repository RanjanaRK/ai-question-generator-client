import { GenerateMCQResponse } from "@/lib/types";

const MCQRenderer = ({ data }: { data: GenerateMCQResponse }) => {
  if (!data) return null;
  console.log(data);

  return (
    <>
      <div className="space-y-6">
        {data.mcqs.map((mcq, index) => {
          const options = mcq.options;

          return (
            <div key={index} className="rounded-xl p-6 shadow-sm">
              <h3 className="mb-3 font-semibold">Question {index + 1}</h3>

              <p className="mb-5 text-lg">{mcq.question}</p>

              <div className="space-y-3">
                {Object.entries(options).map(([key, value]) => {
                  const isCorrect = key === mcq.correctAnswer;

                  return (
                    <div
                      key={key}
                      className={`rounded-lg border p-3 ${
                        isCorrect
                          ? "border-green-500 bg-green-50 dark:border-green-950 dark:bg-green-950"
                          : "bg-muted"
                      } `}
                    >
                      <span className="mr-2 font-medium">{key}</span>

                      {value}

                      <div className=""></div>
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
