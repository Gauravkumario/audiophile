import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Catalouge from "@/components/Catalouge";
import Bestgear from "@/components/Bestgear";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Audiophile store",
  description: "feel music like you are the artist",
};

export default function RootLayout({
  children,
  showCatalouge = true,
  showBestgear = true,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
          {showCatalouge && <Catalouge />}
          {showBestgear && <Bestgear />}
        </main>
        <Footer />
      </body>
    </html>
  );
}
