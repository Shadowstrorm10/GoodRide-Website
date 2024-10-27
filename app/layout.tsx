import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "GoodRide",
  description: "Have a good ride with us.",
  icons: {
    icon: "/apple-touch-icon.png", // Add your favicon here
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-dark-300 font-sans antialiased", fontSans.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
