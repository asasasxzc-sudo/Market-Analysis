import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="m-0 p-0"> {/* 确保 body 没有任何奇怪的背景色覆盖 */}
        {children}
      </body>
    </html>
  );
}
