import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr.Atif Ali",
  description: "Dr. Atif Ali, with a Postdoc in AI and a Ph.D. in Computer Science, excels in Cyber Security, AI, and Software Engineering. He has 60+ research articles and 4+ books. yah lain meta description lik di hoi hai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-custom-bgblack h-full w-full text-white ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
