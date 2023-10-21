import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const os = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Challenges",
  description: "Showcase Repository",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={os.className}>{children}</body>
    </html>
  );
}
