import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
