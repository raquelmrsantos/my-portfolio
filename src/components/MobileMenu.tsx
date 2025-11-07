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
    <div
      className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
      id='mobile-menu'
      role='dialog'
      aria-modal='true'
      aria-label='Mobile navigation menu'
      hidden={!isOpen}
      data-testid='mobile-menu'
    >
      <div className='flex flex-col h-full w-full'>
        {/* Navigation Items - Centered in the middle */}
        <nav
          className='flex-1 flex items-center justify-center'
          role='navigation'
          aria-label='Mobile navigation'
        >
          <div className='flex flex-col items-center gap-4' role='menu'>
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => onNavClick(item.href)}
                className='mobile-menu-item font-sofia-sans-condensed font-bold'
                style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
                role='menuitem'
                aria-label={`Go to ${item.name
                  .replace(/[\[\]]/g, '')
                  .trim()} section`}
                data-testid={`mobile-${item.href.replace('#', '')}-button`}
              >
                {item.name.replace(/\[|\]/g, '').trim()}
              </button>
            ))}
          </div>
        </nav>

        {/* Social Icons - Fixed at bottom */}
        <div
          className='flex justify-center py-8 gap-5'
          role='list'
          aria-label='Social links'
          data-testid='social-links'
        >
          <a
            href='https://www.linkedin.com/in/raquelmrsantos'
            target='_blank'
            rel='noopener noreferrer'
            className='font-light flex items-center gap-2 hover:opacity-70 transition-opacity p-2'
            aria-label='Visit my LinkedIn profile'
            data-testid='linkedin-link'
          >
            <LinkedInIcon aria-hidden='true' />
          </a>
          <a
            href='https://github.com/raquelmrsantos'
            target='_blank'
            rel='noopener noreferrer'
            className='font-light flex items-center gap-2 hover:opacity-70 transition-opacity p-2'
            aria-label='Visit my GitHub profile'
            data-testid='github-link'
          >
            <GithubIcon aria-hidden='true' />
          </a>
          <a
            href='mailto:raquelmrsantos@gmail.com?subject=Hey%20Raquel%2C%20Let%E2%80%99s%20Build%20Something%20Awesome!%20%F0%9F%A4%9D'
            className='font-light flex items-center gap-2 hover:opacity-70 transition-opacity p-2'
            aria-label='Send me an email'
            data-testid='email-link'
          >
            <MailIcon aria-hidden='true' />
          </a>
        </div>
      </div>
    </div>
  );
}

