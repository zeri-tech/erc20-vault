// Styles.
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

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
      <body className={INTER.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
