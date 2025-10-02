import Section from './Section';

export default function Experience() {
  return (
    <Section className='py-20 md:py-28'>
      <div className='space-y-12'>
        <div>
          <h1 className='mb-8 uppercase text-9xl font-bold font-sofia-sans-condensed'>
            Experience
          </h1>
        </div>
        <div className='space-y-12 font-spline-sans-mono uppercase'>
          <div>
            <h2 className='text-2xl font-light mb-2'>Present Technologies</h2>
            <h3 className='text-xl font-normal mb-1'>
              Junior Software Engineer
            </h3>
            <p className='text-sm font-light opacity-70 mb-6 uppercase tracking-widest'>
              2023 - 2025
            </p>

            <div className='space-y-6'>
              <div>
                <h4 className='font-normal mb-3'>
                  Farfetch Platform Solutions (FPS)
                </h4>
                <p className='font-light mb-4 leading-relaxed'>
                  Front-end development for multiple high-end e-commerce
                  websites, delivering premium shopping experiences for luxury
                  brands.
                </p>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2 text-sm font-light opacity-80'>
                  <span>Reebok</span>
                  <span>Ferragamo</span>
                  <span>Violet Grey</span>
                  <span>JW Anderson</span>
                  <span>Stadium Goods</span>
                  <span>Mackintosh</span>
                  <span>Browns</span>
                  <span>N°21</span>
                  <span>Thom Browne</span>
                </div>
                <p className='font-light mt-4 leading-relaxed'>
                    Front-end development of a specialized internal tool, designed for in-store sales
                  assistants across the YNAP Group, enhancing retail workflows
                  and customer service.
                </p>
              </div>

              <div>
                <h4 className='font-normal mb-3'>Critical TechWorks (CTW)</h4>
                <p className='font-light leading-relaxed'>
                  Front-end development for internal platforms focused on
                  improving employee workflows and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
