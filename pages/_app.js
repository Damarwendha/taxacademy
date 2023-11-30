import MainNav from "@/components/navbar/MainNav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainNav />
      <Component {...pageProps} />
    </>
  );
}
