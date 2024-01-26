import { Inter, Montserrat, Work_Sans } from "next/font/google";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
});

export const work_Sans = Work_Sans({
  weight: ["100", "200", "300", "400", "500"],
  display: "swap",
  subsets: ["latin"],
});
