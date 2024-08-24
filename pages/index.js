import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Food Ordering App</h1>
      <Link href="/dashboard">
        <a>Go to Dashboard</a>
      </Link>
    </div>
  );
}
