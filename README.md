# My Portfolio

A modern, high-performance, and visually engaging developer portfolio built with **Next.js 15**, **React 19**, and **TypeScript**. This project showcases creative development through sophisticated animations and 3D elements.

## ✨ Features

- 🚀 **Next.js 15 (App Router)**: Leverages the latest Next.js features for optimal performance and SEO.
- 🎨 **Advanced Animations**: Powered by **GSAP** and **Motion** (Framer Motion) for fluid, interactive UI transitions.
- 🧊 **3D Graphics**: Integrates **Three.js** for immersive 3D experiences.
- 📱 **Responsive Design**: Fully responsive layout built with **Tailwind CSS**.
- ✉️ **Contact Form**: Integrated contact functionality using **AWS SES** (Simple Email Service).
- 🧪 **Robust Testing**: Comprehensive test suite using **Jest** and **React Testing Library**.
- 🛠️ **UI Components**: Custom-built, reusable UI components including animated titles, blurred text, scrambled text effects, and interactive cursors.
- 🔍 **SEO & Web Vitals**: Optimized for search engines and performance, including Vercel Analytics and Speed Insights.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your AWS credentials and other required variables (e.g., for SES).

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/), [Motion](https://motion.dev/)
- **3D**: [Three.js](https://threejs.org/)
- **Backend/API**: [AWS SDK (SES)](https://aws.amazon.com/ses/)
- **Testing**: [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run test`: Runs the test suite.
- `npm run test:watch`: Runs tests in watch mode.
- `npm run test:coverage`: Generates a test coverage report.

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (pages, API routes, styles)
├── components/     # Reusable UI components
│   └── ui/         # Base UI components and icons
└── lib/            # Utility functions and shared logic
```

## 📄 License

This project is private and intended for personal use.
