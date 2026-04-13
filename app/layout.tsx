import "./globals.css"; // 必须有这一行！
import type { Metadata } from "next";
import { Inter } from "next/font-source"; // 如果报错可以先删掉字体相关

export const metadata: Metadata = {
  title: "Ymtea AI Terminal",
  description: "Market Analysis Tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
