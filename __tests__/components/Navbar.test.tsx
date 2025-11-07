import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/Navbar';

// Mock AnimatedText component
jest.mock('@/components/AnimatedText', () => {
  return function MockAnimatedText({ text }: { text: string }) {
    return <span data-testid='animated-text'>{text}</span>;
  };
});

describe('Navbar Component', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('renders the navbar with all navigation items', () => {
    render(<Navbar />);

    expect(screen.getByTestId('home-button')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-nav')).toBeInTheDocument();
    expect(screen.getByTestId('contact-button')).toBeInTheDocument();
  });

  it('renders all navigation links with correct labels', () => {
    render(<Navbar />);

    expect(screen.getByTestId('nav-home')).toHaveAttribute(
      'aria-label',
      'Go to Home section',
    );
    expect(screen.getByTestId('nav-about')).toHaveAttribute(
      'aria-label',
      'Go to About Me section',
    );
    expect(screen.getByTestId('nav-experience')).toHaveAttribute(
      'aria-label',
      'Go to Experience section',
    );
  });

  it('handles mobile menu toggle correctly', () => {
    render(<Navbar />);
    const menuButton = screen.getByTestId('mobile-menu-button');

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('scrolls to the correct section when navigation item is clicked', () => {
    render(<Navbar />);
    const aboutButton = screen.getByTestId('nav-about');

    // Mock element to scroll to
    const mockElement = document.createElement('div');
    mockElement.getBoundingClientRect = () =>
      ({
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
      } as DOMRect);

    document.querySelector = jest.fn().mockReturnValue(mockElement);

    fireEvent.click(aboutButton);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
