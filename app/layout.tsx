import type { Metadata } from "next";
import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata: Metadata = {
  title: "Invoicer",
  description: "Generate invoices using AI Voice Assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          {" "}
          <div className="gradient" />{" "}
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
