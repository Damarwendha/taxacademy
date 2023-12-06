import { Button, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import Error from "../Error";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
      {errors?.email && <Error label={errors?.email?.message} />}
      <TextInput
        id="email"
        type="email"
        placeholder="Email"
        {...register("email", { required: "*This field is required" })}
      />
      {errors?.password && <Error label={errors?.password?.message} />}
      <TextInput
        id="password"
        type="password"
        placeholder="Password"
        {...register("password", { required: "*This field is required" })}
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
