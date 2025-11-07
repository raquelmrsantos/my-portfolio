export const gsap = {
  to: jest.fn(),
  from: jest.fn(),
  set: jest.fn(),
  timeline: jest.fn(() => ({
    to: jest.fn(),
    from: jest.fn(),
  })),
};

export const SplitText = jest.fn(() => ({
  chars: [],
  words: [],
  lines: [],
}));

export default gsap;
