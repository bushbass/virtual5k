import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/"> Virtual 5k</Link>
      </div>
      <div className="sub-bar">search</div>
      <Nav />
    </header>
  );
}
