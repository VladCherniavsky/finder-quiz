export default function Header() {
  return (
    <header className="bg-brooks-blue text-white py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">BROOKS</div>
        <nav className="flex gap-6">
          <a href="#" className="hover:opacity-80">Men</a>
          <a href="#" className="hover:opacity-80">Women</a>
          <a href="#" className="hover:opacity-80">About</a>
        </nav>
      </div>
    </header>
  )
} 