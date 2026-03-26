import { Metadata } from "next";
import localFont from "next/font/local";

export const fontsConfig = localFont({
  src: [
    {
      path: "../public/fonts/GIP-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/GIP-UltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/GIP-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/GIP-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GIP-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/GIP-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/GIP-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/GIP-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/GIP-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gip",
});
export const siteConfig: Metadata = {
  title: {
    template: "%s | Khadlan.mn",
    default: "Khadlan.mn",
  },
  description:
    "Khadlan.mn - Улсын хадлан системийн үйл ажиллагааг дэмжих хэлэлцүүлэг ба хүсэлтүүдийн платформ",
  keywords: [
    "Хадлан",
    "Хүсэлт",
    "Сумд",
    "Баг хороо",
    "Улсын үйлчилгээ",
    "Mongolia",
  ],
  authors: [{ name: "Khadlan Team" }],
  creator: "Khadlan Team",
  publisher: "Khadlan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "mn_MN",
    url: "https://khadlan.mn",
    siteName: "Khadlan.mn",
    title: "Khadlan.mn",
    description:
      "Улсын хадлан системийн үйл ажиллагааг дэмжих хэлэлцүүлэг ба хүсэлтүүдийн платформ",
    images: [
      {
        url: "https://khadlan.mn/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khadlan.mn",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khadlan.mn",
    description:
      "Улсын хадлан системийн үйл ажиллагааг дэмжих хэлэлцүүлэг ба хүсэлтүүдийн платформ",
    creator: "@khadlan",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual Google Search Console verification code
  },
  metadataBase: new URL("https://khadlan.mn"),
};
