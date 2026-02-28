import type { Metadata } from "next";
import "./globals.css";
import ScrollReset from "@/components/ScrollReset";

export const metadata: Metadata = {
  title: "ItzFizz",
  description: "Welcome ItzFizz",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/car.png" />
      </head>
      <body>
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}