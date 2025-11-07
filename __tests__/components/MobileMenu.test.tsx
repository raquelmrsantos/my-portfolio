import { render, screen, fireEvent } from '@testing-library/react';
import MobileMenu from '@/components/MobileMenu';

describe('MobileMenu Component', () => {
  const mockNavItems = [
    { name: '[ Home ]', href: '#home' },
    { name: '[ About Me ]', href: '#about' },
    { name: '[ Experience ]', href: '#experience' },
  ];

  const mockOnNavClick = jest.fn();

  it('renders properly when open', () => {
    render(
      <MobileMenu
        isOpen={true}
        navItems={mockNavItems}
        onNavClick={mockOnNavClick}
      />,
    );

    const menu = screen.getByTestId('mobile-menu');
    expect(menu).toBeInTheDocument();
    expect(menu).not.toHaveAttribute('hidden');
  });

  it('is hidden when closed', () => {
    render(
      <MobileMenu
        isOpen={false}
        navItems={mockNavItems}
        onNavClick={mockOnNavClick}
      />,
    );

    const menu = screen.getByTestId('mobile-menu');
    expect(menu).toHaveAttribute('hidden');
  });

  it('renders all navigation items', () => {
    render(
      <MobileMenu
        isOpen={true}
        navItems={mockNavItems}
        onNavClick={mockOnNavClick}
      />,
    );

    expect(screen.getByTestId('mobile-home-button')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-about-button')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-experience-button')).toBeInTheDocument();
  });

  it('calls onNavClick when a navigation item is clicked', () => {
    render(
      <MobileMenu
        isOpen={true}
        navItems={mockNavItems}
        onNavClick={mockOnNavClick}
      />,
    );

    const homeButton = screen.getByTestId('mobile-home-button');
    fireEvent.click(homeButton);
    expect(mockOnNavClick).toHaveBeenCalledWith('#home');
  });

  it('renders social links with proper attributes', () => {
    render(
      <MobileMenu
        isOpen={true}
        navItems={mockNavItems}
        onNavClick={mockOnNavClick}
      />,
    );

    const linkedinLink = screen.getByTestId('linkedin-link');
    const githubLink = screen.getByTestId('github-link');
    const emailLink = screen.getByTestId('email-link');

    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/raquelmrsantos',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/raquelmrsantos',
    );
    expect(emailLink).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:raquelmrsantos@gmail.com'),
    );
  });
});
