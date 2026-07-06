import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Archive from "@/components/Archive";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <Archive />
        <About />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
