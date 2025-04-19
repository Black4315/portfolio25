import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yahia's Portfolio - Crafting Digital Excellence",
  description:
    "Step into Yahia's world of digital craftsmanship. Explore a portfolio that blends cutting-edge web development, interactive 3D designs, and seamless user experiences to leave a lasting impression.",
  
  openGraph: {
    title: "Yahia's Portfolio - Crafting Digital Excellence",
    description:
      "Step into Yahia's world of digital craftsmanship. Explore a portfolio that blends cutting-edge web development, interactive 3D designs, and seamless user experiences to leave a lasting impression.",
    url: "https://portfolio25-one.vercel.app",
    siteName: "Yahia's Portfolio",
    images: [
      {
        url: "https://portfolio25-one.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yahia's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yahia's Portfolio - Crafting Digital Excellence",
    description:
      "Step into Yahia's world of digital craftsmanship. Explore a portfolio that blends cutting-edge web development, interactive 3D designs, and seamless user experiences to leave a lasting impression.",
    images: ["https://portfolio25-one.vercel.app/og-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="canonical" href="https://portfolio25-one.vercel.app" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Yahia's Portfolio",
          url: "https://portfolio25-one.vercel.app",
          description:
            "Step into Yahia's world of digital craftsmanship. Explore a portfolio that blends cutting-edge web development, interactive 3D designs, and seamless user experiences to leave a lasting impression.",
        }),
          }}
        />
      </Head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
