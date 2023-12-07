import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />;
    </>
  );
}
