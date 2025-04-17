import Approach from "@/components/Approach";
import Clients from "@/components/clientsWord";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main role="main"className="relative flex-center flex-col mx-auto overflow-hidden sm:px-10 px-5 bg-black-100">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Projects />
        {/* <Clients /> */}
        <Experience />
        <Skills />
        <Approach />
        <Footer />
      </div>

    </main>
    
  );
}
