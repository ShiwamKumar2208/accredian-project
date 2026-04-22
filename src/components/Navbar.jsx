export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <h1 className="font-bold text-xl">Accredian</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#">Programs</a>
          <a href="#">Enterprise</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}