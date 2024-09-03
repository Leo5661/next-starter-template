import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//TODO- Change "metadata" and "viewport" as per project.
export const metadata: Metadata = {
  title: {
    template: "%s | Next Starter Template",
    default: "Next Starter Template - @Leocoder",
  },
  description: "Next.js Starter Template + Tailwind linting + SEO",
  openGraph: {
    url: "",
    title: "Next Starter Template - @Leocoder",
    description: "Next.js Starter Template + Tailwind linting + SEO",
    type: "website",
    siteName: "Next Starter Template",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Starter Template",
    description: "Next.js Starter Template + Tailwind linting + SEO",
    creator: "@Leo_5661",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
