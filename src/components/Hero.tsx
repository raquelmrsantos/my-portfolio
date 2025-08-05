import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between h-screen px-12 overflow-hidden">
      <Image
        src="/hero.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
        priority
      />
      <div className="relative z-20 max-w-xl">
        <p className="text-sm">Hi, my name is</p>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-2 leading-tight">
          RAQUEL SANTOS
        </h1>
        <p className="text-lg mt-4">Front-End Web Developer</p>
        <button className="mt-6 px-6 py-2 border border-white hover:bg-white hover:text-red-600 transition-all duration-300 font-medium">
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
}
