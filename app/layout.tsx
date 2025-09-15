import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Serenity Resort",
  description: "TRANQUILITY peace and LUXURY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/c1.jpg"/>
<link rel="icon" type="image/png" sizes="32x32" href="/c1.jpg"/>
<link rel="icon" type="image/png" sizes="16x16" href="/c1.jpg"/>
<link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] overflow-y-scroll scroll-smooth`}
      >
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
