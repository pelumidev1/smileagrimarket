import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";

// Display face — large headlines, tight tracking. Used with restraint.
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700"],
});

// Body / UI face — the workhorse.
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Data / eyebrow face — every figure and label, rendered like a ledger.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

export const fontVariables = `${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable}`;
