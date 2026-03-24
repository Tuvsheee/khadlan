import type { Metadata } from "next";
import "./globals.css";
import { fontsConfig, siteConfig } from "@/constants/config";
import Providers from "@/components/layout/providers";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  ...siteConfig,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontsConfig.className} antialiased bg-gray-50 max-w-[2000px] mx-auto overflow-x-hidden`}
      >
        <Providers>
          <main>
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
