import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}
