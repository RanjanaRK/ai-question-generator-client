import LoginForm from "@/components/Auth/LoginForm";

const page = () => {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-indigo-50 p-10">
          <h1 className="mb-6 text-4xl font-bold">
            Turn Any PDF Into an AI-Generated Quiz in Seconds
          </h1>

          <p className="mb-6 text-gray-600">
            Upload your study material and instantly generate MCQ, True/False, and Open-Ended
            questions with answers.
          </p>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>✔ Free and easy test maker for teachers</li>
            <li>✔ Simple PDF to quiz maker for studying</li>
            <li>✔ Generates questions & answers instantly</li>
          </ul>
        </div>

        <div className="flex h-dvh flex-col items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default page;
