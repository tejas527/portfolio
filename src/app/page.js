import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-gray container ">
         <Navbar/>
         <div className="container mx-auto bg-white px-12 py-4 mt-24">
          <HeroSection/> 
          <section id="about">
            <AboutSection/>
          </section>
          <section id="projects">
            <ProjectsSection/>
          </section>
          <section id="contact">
            <EmailSection/>
          </section>
          <Footer/>
         </div>
      </main>
  );
}
