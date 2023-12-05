import Logo from "../Logo";

function LoginHeading() {
  return (
    <header className="flex flex-col items-center self-center justify-center gap-4 mb-5">
      <span>
        <Logo size="lg" src="/images/brand-logo.webp" />
      </span>
      <h1 className="text-lg font-semibold text-classic-black">
        Sign in to your account
      </h1>
    </header>
  );
}

export default LoginHeading;
