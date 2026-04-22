import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      
      <main className="max-w-[var(--max-width)] mx-auto w-full px-[var(--padding-mobile)] md:px-[var(--padding-desktop)] pt-[var(--topbar-height)] md:pt-[64px]">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
