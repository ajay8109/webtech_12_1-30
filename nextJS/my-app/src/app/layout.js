// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Tasks App",
  description: "A simple Next.js CRUD demo backed by MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
