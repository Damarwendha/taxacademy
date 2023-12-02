import { Button, Card, TextInput } from "flowbite-react";
import MainNav from "@/components/navbar/MainNav";
import Link from "@/components/Link";
import Logo from "@/components/Logo";

const customTheme = {
  color: {
    primary: "bg-brand-primary hover:bg-brand-secondary",
  },
};

function Login() {
  return (
    <>
      <MainNav />

      <div className="flex items-center justify-center w-screen h-screen">
        <Card className="w-screen max-w-md py-10 border-t-4 sm:border-b-4 sm:border-t-4 sm:shadow-lg sm:border-b-brand-secondary border-t-brand-secondary">
          <header className="flex flex-col items-center self-center justify-center gap-4 mb-5">
            <span>
              <Logo size="lg" src="/images/brand-logo.webp" />
            </span>
            <h1 className="text-lg font-semibold text-classic-black">
              Sign in to your account
            </h1>
          </header>

          <form className="flex flex-col gap-1">
            <TextInput id="email" type="email" placeholder="Email" required />
            <TextInput
              id="password"
              type="password"
              placeholder="Password"
              required
            />
            <Button
              type="submit"
              theme={customTheme}
              color="primary"
              className="mt-2 font-bold text-classic-white"
            >
              Login
            </Button>
          </form>

          <Link className='w-fit'>Forgot your password?</Link>
        </Card>
      </div>
    </>
  );
}

export default Login;
