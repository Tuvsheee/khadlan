import type { Metadata } from "next";
import "./globals.css";
import { fontsConfig, siteConfig } from "@/constants/config";
import Providers from "@/components/layout/providers";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  ...siteConfig,
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body
        className={`${fontsConfig.className} antialiased bg-gray-50 max-w-[2000px] mx-auto overflow-x-hidden min-h-screen`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
