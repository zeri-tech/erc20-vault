// Styles.
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Footer from "../containers/Footer";
import { twMerge } from "tailwind-merge";
import AppMenu from "@/components/AppMenu";
import AppSidebar from "@/components/AppSidebar";

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
      <body className={twMerge("min-h-screen", INTER.className)}>
        <Providers>
          <div className="h-screen w-screen flex">
            <aside className="w-72 h-full flex flex-col bg-blue-600">
              <AppSidebar className="grow" />

              <Footer className="text-white border-t border-t-blue-300/80" />
            </aside>

            <section className="flex flex-col grow">
              <header className="w-full h-24 border-b border-b-gray-200">
                <AppMenu />
              </header>

              <div className="flex flex-col grow">{children}</div>
            </section>
          </div>
        </Providers>
      </body>
    </html>
  );
}
