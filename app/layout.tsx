"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Container from "@/components/ui/container";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
