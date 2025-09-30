import About from '@/components/About';
import BackToTop from '@/components/BackToTop';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Three from '@/components/Three';
import ConnectForm from '@/components/ConnectForm';

export default function Home() {
  return (
    <>
      <Three >
      <main>
        <Navbar />

        <section id='home'>
          <Hero />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='experience'>
          <Experience />
        </section>

        <section id='connect'>
          <ConnectForm />
        </section>

        <section id='contact'>
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTop />
      </Three> 
    </>
  );
}
