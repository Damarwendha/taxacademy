import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, TextInput } from "flowbite-react";
import Error from "../Error";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    toast.success("Berhasil Login !", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    console.log(data);
  }

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        id="email"
        type="text"
        placeholder="Email"
        color={errors?.email && "failure"}
        {...register("email", {
          required: "*This field is required",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "*Please enter a valid email",
          },
        })}
      />
      {errors?.email && <Error label={errors?.email?.message} />}

      <TextInput
        id="password"
        type="password"
        placeholder="Password"
        color={errors?.password && "failure"}
        {...register("password", { required: "*This field is required" })}
      />
      {errors?.password && <Error label={errors?.password?.message} />}

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
