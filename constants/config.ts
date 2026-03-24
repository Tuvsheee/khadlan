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
  description: "Khadlan.mn",
};
