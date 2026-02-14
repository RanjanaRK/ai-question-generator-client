import Link from "next/link";
import { Button } from "../ui/button";

const LoginForm = () => {
  return (
    <>
      <div className="">
        <div className="">Login</div>
        <div className="">
          Don’t have an account?{" "}
          <span>
            <Link href={"#"}>Create account</Link>
          </span>
        </div>
        <div className="">
          <Button>Continue with Google</Button>
        </div>
        <div className="">
          <div className=""></div>
          <div className="">Or</div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
