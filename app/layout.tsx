import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YMTEA Labs - Global Market Analysis",
  description: "AI-powered market insights for ymtea.club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
