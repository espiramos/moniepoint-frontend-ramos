import React from "react";
import { Urbanist } from "next/font/google";
import "./globals.css";

// components
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ramos - Moniepoint Frontend test - Feranmi",
  description:
    "Submission by Feranmi Olawale - hello@feranmiolawale.me - olawalevictor77@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-white`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
