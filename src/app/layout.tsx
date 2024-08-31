// Styles.
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Footer from "../containers/Footer";
import { twMerge } from "tailwind-merge";

const APP_NAME = "ERC20 Vault";
const INTER = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  description: "Lock ERC20 tokens in a vault for a specified period of time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          "min-h-screen flex flex-col items-center justify-center",
          INTER.className
        )}
      >
        <Providers>
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
