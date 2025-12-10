import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "KRISH SAVALIYA — Creative Developer",
  description: "Portfolio of Krish Savaliya, Web Developer & Designer."
};

const montrealMono = JetBrains_Mono({
  variable: "--font-montreal-mono",
  display: "swap",
  subsets: ["latin"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montrealMono.variable} bg-background text-foreground antialiased`}>
        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-3 py-4 lg:px-6">
          {children}
        </div>
      </body>
    </html>
  );
}

