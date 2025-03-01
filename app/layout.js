import "./globals.css";

export const metadata = {
  title: "Globetrotter Challenge",
  description: "The Ultimate Travel Guessing Game!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
