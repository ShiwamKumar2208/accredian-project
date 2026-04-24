import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Accredian</title>
      </head>
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}