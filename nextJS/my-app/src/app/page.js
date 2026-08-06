// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Welcome</h1>
      <p>This is the Tasks demo app.</p>
      <Link href="/tasks">Go to Tasks →</Link>
    </main>
  );
}
