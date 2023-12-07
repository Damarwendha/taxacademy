import Image from "next/image";
import styles from "@/styles/Auth.module.scss";
import Link from "next/link";
import logoFlazztax from "./../../public/flazztax.png";
import AuthLayout from "@/component/layout/AuthLayout";
import eye from "./../../public/assets/eye.svg";
import eyeHide from "./../../public/assets/eye-hide.svg";
import message from "./../../public/assets/message.svg";
import password from "./../../public/assets/password.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginDataThunk } from "@/redux/thunks/LoginThunks";
import * as Yup from "yup"; //
import { yupResolver } from "@hookform/resolvers/yup"; //
import { useForm } from "react-hook-form"; //
import { toast } from 'react-toastify'; //
import { useRouter } from "next/router";
import { authService } from "@/services/AuthServices";
import Helmet from "@/component/common/Helmet";
import { removeLoginData } from "@/redux/reducers/LoginReducers";
import { getCookie } from "@/helpers/utils";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const login = useSelector((state: any) => state.login);
  const [showPassword, setShowPassword] = useState(false);

  //
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Harap mengisi password.").max(100),
    email: Yup.string()
      .email("Harap memasukkan alamat email yang valid.")
      .required("Harap mengisi email.")
      .max(100),
  });

  const _form = validateForm(validationSchema);

  function validateForm(validationSchema: any) {
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState, getValues, setValue, trigger } =
      useForm(formOptions);
    const { errors } = formState;

    return { register, handleSubmit, errors, getValues, setValue, trigger };
  }

  const onSubmit = ({ email, password }: any) => {
    const _payload = { email, password };
    dispatch<any>(postLoginDataThunk(_payload));
  };
//
  useEffect(() => {
    if (login.loginData) {
      if (login.loginData.status === "fail") {
        let errorMsg = login.loginData.data.data.message
        toast.error(errorMsg, {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 3000,
        })
      }
      if (login.loginData.status === "success") {
        let msg = login.loginData.data.message
        let token = login.loginData.data.token
        let newData = {
          token
        }
        authService.setLogin(newData)

        const { targetUrl } = router.query;
        if (targetUrl) {
          router.push(${targetUrl});
        } else {
          router.push("/dashboard");
        }
        toast.success(msg, {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 3000,
        })
      }
    }
  }, [login])

  useEffect(() => {
    const _cookie = getCookie("flazztax_user");
    console.log("_cookie",_cookie);
    
    dispatch<any>(removeLoginData());
    // authService.redirectToDashboard(router);
  }, []);

  return (
    <>
      <Helmet title="Login" />
      <AuthLayout>
        <div className="card">
          <div className="card-body auth">
            <div className="text-center">
              <div className="mb-4">
                <Image src={logoFlazztax} alt="logo-flazztax" />
              </div>
              <h3 className="mb-2 font-medium">Masuk Admin</h3>
              <p className="mb-5 p-secondary">
                Halaman ini digunakan untuk Admin
              </p>
            </div>

            <form onSubmit={_form.handleSubmit(onSubmit)}>
              {/* email */}
              <div className="mb-3 form-group">
              <label className="mb-2 p-secondary">Email</label>
                <div className="position-relative">
                  <Image
                    style={{ left: "12px", top: "16px" }}
                    className="position-absolute"
                    src={message}
                    alt="message"
                  />
                  <input
                    className={form-control ps-5 ${_form.errors.email ? "is-invalid" : ""
                      }}
                    type="text"
                    id="email"
                    autoComplete="email"
                    {..._form.register("email")}
                  />
                  <div className="invalid-feedback">
                    {_form?.errors?.email?.message?.toString()}
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="mb-2 form-group ">
                <label className="mb-2 p-secondary">Password</label>
                <div className="position-relative">
                  <Image
                    style={{ left: "12px", top: "16px" }}
                    className="position-absolute"
                    src={password}
                    alt="password"
                  />
                  <input
                    className={form-control ps-5 ${_form.errors.password ? "is-invalid" : ""}  }
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="password"
                    {..._form.register("password")}
                  />
                  <Image
                    style={{ right: "30px", top: "16px" }}
                    className="position-absolute hover-cursor"
                    onClick={() => setShowPassword(!showPassword)}
                    src={showPassword ? eyeHide : eye}
                    alt="show"
                  />
                  <div className="invalid-feedback">
                    {_form?.errors?.password?.message?.toString()}
                  </div>
                </div>
              </div>

              {/* forgot password */}
              <div className="mb-5 text-end">
                <Link
                  href="/forgot-password"
                  className={styles.linkCTA__forgot}
                >
                  <p className="p-secondary">Lupa Password?</p>
                </Link>
              </div>

              {/* button */}
              <button className="btn btn-secondary w-100">
                Masuk
              </button>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}