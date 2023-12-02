import MainNav from "@/components/MainNav";
import CourseList from "@/components/home/CourseList";
import Tabs from "@/components/home/Tabs";

function Home() {
  return (
    <>
      <MainNav />
      <Tabs />

      <CourseList
        courses={[
          {
            title: "Learn Figma - UI/UX Design Essential Training",
            imgSrc:
              "https://tse1.mm.bing.net/th?id=OVP.EV-XTbO_yVr-Ej6ThwTLpwEsDh&pid=Api&w=296&h=156&c=7&p=0",
          },
          {
            title: "Learn Figma - UI/UX Design Essential Training",
            imgSrc:
              "https://tse1.mm.bing.net/th?id=OVP.EV-XTbO_yVr-Ej6ThwTLpwEsDh&pid=Api&w=296&h=156&c=7&p=0",
          },
          {
            title: "Learn Figma - UI/UX Design Essential Training",
            imgSrc:
              "https://tse1.mm.bing.net/th?id=OVP.EV-XTbO_yVr-Ej6ThwTLpwEsDh&pid=Api&w=296&h=156&c=7&p=0",
          },
          {
            title: "Learn Figma - UI/UX Design Essential Training",
            imgSrc:
              "https://tse1.mm.bing.net/th?id=OVP.EV-XTbO_yVr-Ej6ThwTLpwEsDh&pid=Api&w=296&h=156&c=7&p=0",
          },
          {
            title: "Learn Figma - UI/UX Design Essential Training",
            imgSrc:
              "https://tse1.mm.bing.net/th?id=OVP.EV-XTbO_yVr-Ej6ThwTLpwEsDh&pid=Api&w=296&h=156&c=7&p=0",
          },
          {
            title: "Learn Figma - UI/UX Design Essential Training",
            imgSrc:
              "https://tse1.mm.bing.net/th?id=OVP.EV-XTbO_yVr-Ej6ThwTLpwEsDh&pid=Api&w=296&h=156&c=7&p=0",
          },
        ]}
      />
    </>
  );
}

export default Home;
