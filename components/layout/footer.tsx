"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto py-12">
        <div className="max-w-xl mx-auto text-center">
          {/* Logo & Description */}
          <div className="relative pb-8 mb-8 border-b">
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-6 h-6 rounded-full bg-background border flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <h3 className="font-bold text-xl tracking-tight mb-3">
              Khadlan.mn
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Хадлангийн талбай ашиглах хүсэлт илгээх, хянах цахим систем
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid gap-4 sm:grid-cols-3 max-w-lg mx-auto mb-8">
            <div className="group space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="mx-auto w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                Улаанбаатар, Монгол
              </p>
            </div>

            <div className="group space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="mx-auto w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">+976 9999-9999</p>
            </div>

            <div className="group space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="mx-auto w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">info@khadlan.mn</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground/80">
            <p>
              © {currentYear} Khadlan.mn - Бүх эрх хуулиар хамгаалагдсан.{" "}
              <span className="text-primary font-medium hover:text-primary/90 cursor-pointer transition-colors">
                Гео инженер сүрвэй ХХК
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
