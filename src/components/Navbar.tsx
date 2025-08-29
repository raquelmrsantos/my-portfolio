export default function Navbar() {
  return (
    <nav className="flex justify-end gap-8 p-6 font-mono text-sm uppercase">
      {["About", "Experience", "Work", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:underline"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
