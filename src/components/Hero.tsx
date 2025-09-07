import DateComp from './DateComp';
import Section from './Section';

export default function Hero() {
  return (
    <Section>
      <h1 className='text-9xl font-grand-slang'>
        Hello
        <span className='text-blue-800'>.</span>
      </h1>
      <h1 className='text-4xl font-grand-slang'>I am Raquel</h1>
      <DateComp />
    </Section>
  );
}
