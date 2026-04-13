import "./globals.css"; 
import type { Metadata } from "next";

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
    <html lang="zh">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
