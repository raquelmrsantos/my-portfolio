import Image from "next/image";

export default function Hero() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between h-screen bg-red-600 px-12 text-white">
        <div className="max-w-xl">
          <p className="text-sm">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-2">RAQUEL SANTOS</h1>
          <p className="text-lg mt-4">Front-End Web Developer</p>
          <button className="mt-6 px-6 py-2 border border-white text-white hover:bg-white hover:text-red-600 transition">
            GET IN TOUCH
          </button>
        </div>
        <Image src="/profile.png" alt="Profile" className="w-72 h-auto mt-8 md:mt-0" width={20} height={20} />
      </section>
    );
  }