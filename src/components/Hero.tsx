import DateComp from './DateComp';
import Section from './Section';
import AnimatedTitle from '@/components/AnimatedTitle';

export default function Hero() {
    return (
        <Section>
            <div className="text-center space-y-8">
                <div className="hero-title font-light tracking-wider">
                    <AnimatedTitle title="WEB DEVELOPER" />
                </div>
                <div className="text-lg md:text-xl font-light tracking-wide opacity-80">
                    Crafting elegant digital experiences
                </div>
                <DateComp />
            </div>
        </Section>
    );
}