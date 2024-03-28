import CoursePage from "@/app/MainCourse/CoursePage";
import CarouselComponent from "@/app/components/CarouselComponent";
import ContentPage from "@/app/MainCourse/ContentPage";

export default function Home() {
  return (
    <main >
      <CarouselComponent />
      <CoursePage />
      <ContentPage />
    </main>
  );
}
