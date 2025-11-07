// Mock AnimatedText component
jest.mock('@/components/AnimatedText', () => {
  return function MockAnimatedText({ text }: { text: string }) {
    return <span data-testid='animated-text'>{text}</span>;
  };
});

