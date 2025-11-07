import { render, screen } from '@testing-library/react';
import Contact from '@/components/Contact';

// Mock the animated components
jest.mock('@/components/AnimatedContactText', () => {
  return function MockAnimatedContactText({ text }: { text: string }) {
    return <span>{text}</span>;
  };
});

jest.mock('@/components/BlurText', () => {
  return function MockBlurText({ text, ...props }: { text: string }) {
    return <div {...props}>{text}</div>;
  };
});

jest.mock('@/components/ScrambledText', () => {
  return function MockScrambledText({
    children,
    ...props
  }: {
    children: React.ReactNode;
  }) {
    return <div {...props}>{children}</div>;
  };
});

describe('Contact Component', () => {
  it('renders all contact links with correct attributes', () => {
    render(<Contact />);

    // Test email link
    const emailLink = screen.getByTestId('email-link');
    expect(emailLink).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:raquelmrsantos@gmail.com'),
    );
    expect(emailLink).toHaveAttribute('aria-label', 'Send me an email');

    // Test LinkedIn link
    const linkedinLink = screen.getByTestId('linkedin-link');
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/raquelmrsantos',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedinLink).toHaveAttribute(
      'aria-label',
      'Visit my LinkedIn profile',
    );

    // Test GitHub link
    const githubLink = screen.getByTestId('github-link');
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/raquelmrsantos',
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink).toHaveAttribute('aria-label', 'Visit my GitHub profile');

    // Test CV download link
    const cvLink = screen.getByTestId('cv-link');
    expect(cvLink).toHaveAttribute('href', '/raquel-santos-cv.pdf');
    expect(cvLink).toHaveAttribute('download');
    expect(cvLink).toHaveAttribute('aria-label', 'Download my CV');
  });

  it('renders section with proper accessibility attributes', () => {
    render(<Contact />);

    const section = screen.getByTestId('contact-section');
    expect(section).toHaveAttribute('aria-labelledby', 'contact-heading');

    const heading = screen.getByText('Contact Information');
    expect(heading).toHaveClass('sr-only');
  });

  it('renders the title and description', () => {
    render(<Contact />);

    const title = screen.getByTestId('contact-title');
    expect(title).toHaveAttribute('aria-hidden', 'true');
    expect(title).toHaveTextContent("Let's Connect");

    const description = screen.getByTestId('contact-description');
    expect(description).toHaveTextContent(
      'Available for freelance projects and full-time opportunities',
    );
  });
});
