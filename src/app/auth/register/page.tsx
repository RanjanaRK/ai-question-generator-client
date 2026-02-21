import RegisterForm from "@/components/Auth/RegisterForm";

const page = () => {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="bg-foreground/2 dark:bg-foreground/2 hidden flex-col justify-center p-12 text-black transition-colors duration-300 md:flex dark:text-white">
          <h1 className="mb-6 text-4xl leading-tight font-bold">
            Create AI-Generated Quizzes in Seconds
          </h1>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Upload your PDF and instantly generate multiple-choice, true/false, and open-ended
            questions with answers.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-black dark:text-white">✔</span>
              Free to get started
            </li>

            <li className="flex items-center gap-3">
              <span className="text-black dark:text-white">✔</span>
              Instant AI-powered quiz creation
            </li>

            <li className="flex items-center gap-3">
              <span className="text-black dark:text-white">✔</span>
              Save and manage quiz history
            </li>

            <li className="flex items-center gap-3">
              <span className="text-black dark:text-white">✔</span>
              Upgrade anytime for advanced features
            </li>
          </ul>

          <p className="mt-10 text-xs text-gray-400 dark:text-gray-500">No credit card required.</p>
        </div>
        <div className="flex h-dvh flex-col items-center justify-center">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default page;
