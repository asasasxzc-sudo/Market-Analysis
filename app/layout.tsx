import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0"> {/* 确保 body 没有背景色 */}
        {children}
      </body>
    </html>
  );
}
