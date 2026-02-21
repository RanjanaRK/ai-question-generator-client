import LoginForm from "@/components/Auth/LoginForm";

const page = () => {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="dark:bg-foreground/2 bg-foreground/2 flex flex-col justify-center p-10 text-black transition-colors duration-300 dark:text-white">
          <h1 className="mb-6 text-4xl leading-tight font-bold">
            Turn Any PDF Into an AI-Generated Quiz in Seconds
          </h1>

          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Upload your study material and instantly generate MCQ, True/False, and Open-Ended
            questions with answers.
          </p>

          <ul className="space-y-3 text-sm text-gray-800 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400">✔</span>
              Free and easy test maker for teachers
            </li>

            <li className="flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400">✔</span>
              Simple PDF to quiz maker for studying
            </li>

            <li className="flex items-center gap-2">
              <span className="text-indigo-600 dark:text-indigo-400">✔</span>
              Generates questions & answers instantly
            </li>
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
