"use client";

import { useRef } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <html lang="en">
      <body>
        <div className="relative">
          <div ref={ref}>{children}</div>
          <button
            className="fixed right-4 bottom-4"
            onClick={() => navigator.clipboard.writeText(ref.current?.innerHTML ?? "")}
          >
            HTMLをコピーする
          </button>
        </div>
      </body>
    </html>
  );
}
