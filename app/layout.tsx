import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";

import RegisterModal from "@/components/Modals/RegisterModal";
import ReduxProvider from "@/providers/ReduxProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Hydration error for navbar */}
        <ReduxProvider>
          {/* <ClientOnly> */}
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
          {/* </ClientOnly> */}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
