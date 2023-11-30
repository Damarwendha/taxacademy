import MainNav from "@/components/navbar/MainNav";
import Main from "@/components/home/Main";
import Tabs from "@/components/home/Tabs";

function Home() {
  return (
    <>
      <MainNav />

      <div className="flex flex-col gap-8">
        <Tabs />
        <Main />
      </div>
    </>
  );
}

export default Home;
