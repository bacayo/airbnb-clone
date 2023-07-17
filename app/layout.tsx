import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";

import RegisterModal from "@/components/Modals/RegisterModal";
import ReduxProvider from "@/providers/ReduxProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import LoginModal from "@/components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "@/components/Modals/RentModal";
import SearchModal from "@/components/Modals/SearchModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const curretUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Hydration error for navbar */}
        <ReduxProvider>
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <RentModal />
            <SearchModal />
            <Navbar currentUser={curretUser} />

            <div className="h-full pb-20 pt-28">{children}</div>
          </ClientOnly>
        </ReduxProvider>
      </body>
    </html>
  );
}
