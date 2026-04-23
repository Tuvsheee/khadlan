"use client";

import { Mail, MapPin, Phone, Leaf } from "lucide-react";
import Image from "next/image";
import { useQueryUtil } from "@/hooks/use-query";
import { HomeContentResponse } from "@/types/home";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const { data } = useQueryUtil<HomeContentResponse>({
    queryKey: ["home-content"],
    endpoint: "/home/content",
    enabled: true,
  });

  const logoUrl = data?.data?.logoUrl;

  return (
    <footer className="w-full bg-[#1a3a3e]">
      {/* Main footer body */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {logoUrl ? (
                <div className="inline-flex items-center justify-center rounded-md bg-white/90 p-1">
                  <Image
                    src={logoUrl}
                    alt="Khadlan.mn logo"
                    width={120}
                    height={36}
                    className="h-9 w-auto object-contain"
                  />
                </div>
              ) : (
                <>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400">
                    <Leaf className="h-5 w-5 text-[#1a3a3e]" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white">
                    Khadlan.mn
                  </span>
                </>
              )}
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Хадлангийн талбай ашиглах хүсэлт илгээх, хянах цахим систем.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Холбоосууд
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Нүүр хуудас", href: "/" },
                { label: "Хүсэлт илгээх", href: "/requests" },
                { label: "Нэвтрэх", href: "/auth/login" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/60 hover:text-amber-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Холбоо барих
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
                Улаанбаатар, Монгол
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                +976 9999-9999
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-amber-400" />
                info@khadlan.mn
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {currentYear} Khadlan.mn — Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <p className="text-xs text-white/40">
            Хөгжүүлэгч:{" "}
            <span className="text-amber-400 font-medium">TANUSOFT ХХК</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
