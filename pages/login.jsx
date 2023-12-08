import { Card } from "flowbite-react";
import MainNav from "@/components/MainNav";
import Link from "@/components/Link";
import LoginForm from "@/components/login/LoginForm";
import LoginHeading from "@/components/login/LoginHeading";
import Helmet from "@/components/Helmet";

function Login() {
  return (
    <>
      <Helmet str="Login" />

      <MainNav />

      <Card className="absolute w-full max-w-md py-10 transform -translate-x-1/2 -translate-y-1/2 rounded-none shadow-none left-1/2 top-1/2 border-y-0 sm:rounded-md sm:border-b-4 sm:border-t-4 sm:shadow-lg sm:border-b-brand-secondary border-t-brand-secondary">
        <LoginHeading />
        <LoginForm />
        <Link className="self-center w-fit" href="/">
          Forgot your password?
        </Link>
      </Card>
    </>
  )
}

export default Login;
