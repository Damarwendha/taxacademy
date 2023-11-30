import Main from "@/components/home/Main";
import Tabs from "@/components/home/Tabs";

function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Tabs />
      <Main />
    </div>
  );
}

export default Home;
