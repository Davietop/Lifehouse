import { Inter } from "next/font/google";
import { work_Sans } from "@/fonts";
import { montserrat } from "@/fonts";
import "./globals.css";

export const metadata = {
  title: "LifeHouse",
  description: "Created by Davietop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_Sans.className}>{children}</body>
    </html>
  );
}
