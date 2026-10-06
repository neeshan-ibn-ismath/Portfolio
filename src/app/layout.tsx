import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neeshan-ismath.vercel.app"),

  title: "Neeshan Ismath | Software Engineer & Business Analyst",

  description:
    "Neeshan Ismath is a Software Engineer and Business Analyst based in Sri Lanka, experienced in full-stack development, quality assurance, AI-powered applications, and software projects.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.png?v=transparent-ni",
    apple: "/apple-icon.png?v=transparent-ni",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "NG2nFQD37oc9ccjwaUouvEjoM2vgCy_X3o6Cr3w2lTo",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Neeshan Ismath",
  url: "https://neeshan-ismath.vercel.app",
  jobTitle: ["Software Engineer", "Business Analyst"],
  sameAs: [
    "https://www.linkedin.com/in/neeshan-ismath-131282290/",
    "https://github.com/neeshan-ibn-ismath",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Neeshan Ismath",
  alternateName: "Neeshan Ismath Portfolio",
  url: "https://neeshan-ismath.vercel.app/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  );
}