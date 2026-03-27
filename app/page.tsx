import HomeLogo from "@/components/home-logo";
import HomeGallery from "@/components/home-gallery";
import "@/styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <h1 className="visually-hidden">
        Genus Tech — Desenvolvimento de Software
      </h1>
      <HomeLogo />
      <HomeGallery />
    </main>
  );
}
