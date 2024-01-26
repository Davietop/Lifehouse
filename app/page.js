"use client";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <>
        <Navbar />

        {/* <main className="h-[620px] w-full bg-vr_Img bg-contain bg-no-repeat bg-right">
          <Hero />
        </main> */}
      </>
    </NextUIProvider>
  );
}
/* From https://css.glass */
