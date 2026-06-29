import About from '@/components/About';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import LoadingAnimation from '@/components/LoadingAnimation';
import TargetCursor from '@/components/TargetCursor';
import dynamic from 'next/dynamic';

const Experience = dynamic(() => import('@/components/Experience'));
const Contact = dynamic(() => import('@/components/Contact'));
const ConnectForm = dynamic(() => import('@/components/ConnectForm'));

export default function Home() {
  return (
    <>
      <LoadingAnimation>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />

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
      </LoadingAnimation>
    </>
  );
}
