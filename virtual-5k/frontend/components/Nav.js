import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/races">Races </Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </nav>
  );
}
