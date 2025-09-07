import About from '@/components/About';
import BackToTop from '@/components/BackToTop';
import DateComp from '@/components/DateComp';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import SpinLoader from '@/components/SpinLoader';

export default function Home() {
  return (
    <SpinLoader>
      <main>
        <Navbar />
        <DateComp />
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </SpinLoader>
  );
}
