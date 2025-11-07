import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
    priority?: boolean;
    'data-testid'?: string;
  }) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock the DateComp component
jest.mock('@/components/DateComp', () => {
  return function MockDateComp() {
    return <div data-testid='date-component'>Date Component</div>;
  };
});

// Mock the AnimatedHeroTitle component
jest.mock('@/components/AnimatedHeroTitle', () => {
  return function MockAnimatedHeroTitle({
    title,
    ...props
  }: {
    title: string;
  }) {
    return <div {...props}>{title}</div>;
  };
});

describe('Hero Component', () => {
  it('renders the hero section with all elements', () => {
    render(<Hero />);

    // Check if main elements are present
    expect(screen.getByTestId('hero-image-container')).toBeInTheDocument();
    expect(screen.getByTestId('hero-image')).toBeInTheDocument();
    expect(screen.getByTestId('hero-title')).toBeInTheDocument();
    expect(screen.getByTestId('hero-tagline')).toBeInTheDocument();
    expect(screen.getByTestId('date-component')).toBeInTheDocument();
  });

  it('has the correct image attributes', () => {
    render(<Hero />);
    const image = screen.getByTestId('hero-image');

    expect(image).toHaveAttribute('src', '/profile-picture.webp');
    expect(image).toHaveAttribute('alt', 'Raquel Santos, Web Developer');
    expect(image).toHaveAttribute('width', '430');
    expect(image).toHaveAttribute('height', '490');
  });

  it('renders the tagline text correctly', () => {
    render(<Hero />);
    const tagline = screen.getByTestId('hero-tagline');

    expect(tagline).toHaveTextContent('Crafting elegant digital experiences');
  });

  it('includes a visually hidden heading for accessibility', () => {
    render(<Hero />);
    const heading = screen.getByText('Raquel Santos - Web Developer');

    expect(heading).toHaveClass('sr-only');
  });

  it('has proper ARIA attributes', () => {
    render(<Hero />);
    const heroTitle = screen.getByTestId('hero-title');

    expect(heroTitle).toHaveAttribute('aria-hidden', 'true');
  });
});
