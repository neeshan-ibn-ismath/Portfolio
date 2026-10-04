import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Neeshan Ismath — Software Engineer",
 description: "Software engineer based in Sri Lanka. Explore Neeshan Ismath’s work in full-stack development, local AI, and quality engineering.",
 icons: { icon: "/icon.svg" },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body>{children}</body></html>;
}
