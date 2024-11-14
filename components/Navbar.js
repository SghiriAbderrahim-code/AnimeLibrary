
import Link from 'next/link';




const Navbar = () => (
  <nav className="p-4 bg-emerald-500 text-white flex justify-between">
    <Link href="/">Home</Link>
    
    <Link href="/categories">Categories</Link>
    <Link href="/search">Search</Link>
  </nav>
);

export default Navbar;
