"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HomeContent, HomeStat } from "@/types/home";

interface HomeEditorProps {
  form: HomeContent;
  onChange: (key: keyof HomeContent, value: string | HomeStat[]) => void;
  onBackgroundImageChange: (file: File | null) => void;
  onLogoChange: (file: File | null) => void;
  onStatChange: (index: number, key: keyof HomeStat, value: string) => void;
  onStatLinkChange: (index: number, file: File | null) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
}

export default function HomeEditor({
  form,
  onChange,
  onBackgroundImageChange,
  onLogoChange,
  onStatChange,
  onStatLinkChange,
  onSubmit,
  isPending,
}: HomeEditorProps) {
  return (
    <section className="rounded-2xl border bg-white p-5 md:p-6 space-y-5">
      <div>
        <h2 className="text-xl font-semibold">Super Admin тохиргоо</h2>
        <p className="text-sm text-muted-foreground">
          Нүүр хуудасны контентыг эндээс шууд шинэчилнэ.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="heroTitle">Гарчгийн эхлэл</Label>
            <Input
              id="heroTitle"
              value={form.heroTitle}
              onChange={(event) => onChange("heroTitle", event.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroHighlight">Онцлох үг</Label>
            <Input
              id="heroHighlight"
              value={form.heroHighlight}
              onChange={(event) =>
                onChange("heroHighlight", event.target.value)
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="heroDescription">Тайлбар</Label>
          <textarea
            id="heroDescription"
            value={form.heroDescription}
            onChange={(event) =>
              onChange("heroDescription", event.target.value)
            }
            className="min-h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ctaText">Товчны текст</Label>
          <Input
            id="ctaText"
            value={form.ctaText}
            onChange={(event) => onChange("ctaText", event.target.value)}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="logoImage">Сайтын лого</Label>
            <Input
              id="logoImage"
              type="file"
              accept="image/*"
              onChange={(event) =>
                onLogoChange(event.target.files?.[0] || null)
              }
            />
            {form.logoUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={form.logoUrl}
                alt="Current logo"
                className="h-10 w-auto object-contain rounded border p-1"
              />
            )}
            <p className="text-xs text-muted-foreground">
              Навбар болон footer-т харагдах лого.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="backgroundImage">Header background зураг</Label>
            <Input
              id="backgroundImage"
              type="file"
              accept="image/*"
              onChange={(event) =>
                onBackgroundImageChange(event.target.files?.[0] || null)
              }
            />
            <p className="text-xs text-muted-foreground">
              PNG/JPG/SVG зураг upload хийвэл header дээр шууд солигдоно.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium">Стат картууд</h3>
          <div className="grid gap-3">
            {form.stats.map((stat, index) => (
              <div
                key={`${stat.order}-${index}`}
                className="rounded-xl border bg-muted/20 p-4 space-y-3"
              >
                <div className="grid gap-3 md:grid-cols-4">
                  <Input
                    value={stat.order}
                    onChange={(event) =>
                      onStatChange(index, "order", event.target.value)
                    }
                    placeholder="01"
                  />
                  <Input
                    value={stat.value}
                    onChange={(event) =>
                      onStatChange(index, "value", event.target.value)
                    }
                    placeholder="21"
                  />
                  <Input
                    value={stat.title}
                    onChange={(event) =>
                      onStatChange(index, "title", event.target.value)
                    }
                    placeholder="Гарчиг"
                  />
                  <Input
                    value={stat.subtitle}
                    onChange={(event) =>
                      onStatChange(index, "subtitle", event.target.value)
                    }
                    placeholder="Тайлбар"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">
                    Холбоос файл ({stat.order} карт) —{" "}
                    {stat.link ? (
                      <a
                        href={stat.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        одоогийн файл
                      </a>
                    ) : (
                      "байхгүй"
                    )}
                  </Label>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                    onChange={(event) =>
                      onStatLinkChange(index, event.target.files?.[0] || null)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Хадгалж байна..." : "Нүүр хуудас шинэчлэх"}
        </Button>
      </form>
    </section>
  );
}
