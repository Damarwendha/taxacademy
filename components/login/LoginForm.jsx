import { Button, TextInput } from "flowbite-react";

function LoginForm() {
  return (
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
        color="primary"
        className="mt-2 font-bold text-classic-white bg-brand-primary"
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
