import { GithubIcon } from './ui/GithubIcon';
import { LinkedInIcon } from './ui/LinkedinIcon';
import { MailIcon } from './ui/MailIcon';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<{ name: string; href: string }>;
  onNavClick: (href: string) => void;
}

export default function MobileMenu({
  isOpen,
  navItems,
  onNavClick,
}: MobileMenuProps) {
  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className='flex flex-col h-full w-full'>
        {/* Navigation Items - Centered in the middle */}
        <div className='flex-1 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-4'>
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => onNavClick(item.href)}
                className='mobile-menu-item font-sofia-sans-condensed font-bold'
                style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
              >
                {item.name.replace(/\[|\]/g, '').trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Social Icons - Fixed at bottom */}
        <div className='flex justify-center py-8 gap-5'>
          <a
            href='https://www.linkedin.com/in/raquelmrsantos'
            target='_blank'
            rel='noopener noreferrer'
            className='font-light flex items-center gap-2 hover:opacity-70 transition-opacity'
          >
            <LinkedInIcon />
          </a>
          <a
            href='https://github.com/raquelmrsantos'
            target='_blank'
            rel='noopener noreferrer'
            className='font-light flex items-center gap-2 hover:opacity-70 transition-opacity'
          >
            <GithubIcon />
          </a>
          <a
            href='mailto:raquelmrsantos@gmail.com?subject=Hey%20Raquel%2C%20Let%E2%80%99s%20Build%20Something%20Awesome!%20%F0%9F%A4%9D'
            className='font-light flex items-center gap-2 hover:opacity-70 transition-opacity'
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

