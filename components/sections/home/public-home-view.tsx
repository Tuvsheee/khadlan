"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HomeHeader from "./home-header";
import HomeEditor from "./home-editor";
import { HomeContent, HomeContentResponse, HomeStat } from "@/types/home";
import { useQueryUtil } from "@/hooks/use-query";
import { useMutationUtil } from "@/hooks/use-mutation";
import { useAuthRole } from "@/hooks/use-auth-role";
import { DEFAULT_HOME_CONTENT } from "@/constants/home-default-content";

export default function PublicHomeView() {
  const router = useRouter();
  const { isSuperAdmin } = useAuthRole();
  const isEditor = isSuperAdmin();

  const { data, isLoading } = useQueryUtil<HomeContentResponse>({
    queryKey: ["home-content"],
    endpoint: "/home/content",
    enabled: true,
  });

  const resolvedContent = useMemo(
    () => data?.data || DEFAULT_HOME_CONTENT,
    [data?.data],
  );

  const [form, setForm] = useState<HomeContent>(resolvedContent);
  const [backgroundImageFile, setBackgroundImageFile] = useState<File | null>(
    null,
  );
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [statLinkFiles, setStatLinkFiles] = useState<
    Record<number, File | null>
  >({});

  useEffect(() => {
    setForm(resolvedContent);
    setBackgroundImageFile(null);
    setLogoFile(null);
    setStatLinkFiles({});
  }, [resolvedContent]);

  const updateMutation = useMutationUtil<HomeContentResponse, FormData>({
    endpoint: "/home/content",
    method: "put",
    queryKey: ["home-content"],
    successMessage: "Нүүр хуудасны мэдээлэл шинэчлэгдлээ.",
    contentType: "multipart/form-data",
  });

  const handleFieldChange = (
    key: keyof HomeContent,
    value: string | HomeStat[],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleStatChange = (
    index: number,
    key: keyof HomeStat,
    value: string,
  ) => {
    setForm((prev) => {
      const nextStats = [...prev.stats];
      const target = nextStats[index];
      if (!target) return prev;

      nextStats[index] = { ...target, [key]: value };
      return { ...prev, stats: nextStats };
    });
  };

  const handleStatLinkChange = (index: number, file: File | null) => {
    setStatLinkFiles((prev) => ({ ...prev, [index]: file }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("heroTitle", form.heroTitle);
    formData.append("heroHighlight", form.heroHighlight);
    formData.append("heroDescription", form.heroDescription);
    formData.append("ctaText", form.ctaText);
    formData.append("stats", JSON.stringify(form.stats));

    if (backgroundImageFile) {
      formData.append("backgroundImage", backgroundImageFile);
    }

    if (logoFile) {
      formData.append("logo", logoFile);
    }

    Object.entries(statLinkFiles).forEach(([index, file]) => {
      if (file) formData.append(`statLink_${index}`, file);
    });

    updateMutation.mutate(formData);
  };

  return (
    <main className="w-full min-h-screen md:h-screen">
      <HomeHeader
        content={resolvedContent}
        onCtaClick={() => router.push("/auth/login")}
      >
        <section className="grid gap-4 sm:gap-6 md:gap-12 md:grid-cols-4 mb-6 sm:mb-8 md:mb-12">
          {(isLoading ? DEFAULT_HOME_CONTENT.stats : resolvedContent.stats).map(
            (stat) => (
              <article
                key={`${stat.order}-${stat.title}`}
                className="rounded-2xl md:rounded-3xl border border-white/20 bg-white/5 backdrop-blur-[2px] text-white p-4 md:p-5 shadow-md"
              >
                {stat.link ? (
                  <a
                    href={stat.link}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flex items-start justify-between">
                      <Image
                        src={`/images/1.svg`}
                        alt="Statistic icon"
                        width={15}
                        height={30}
                        className="h-6 w-auto opacity-90"
                      />
                      <p className="text-2xl md:text-3xl font-extrabold text-white/35 leading-none">
                        {stat.order}
                      </p>
                    </div>
                    <p className="mt-2 md:mt-3 text-4xl md:text-5xl font-extrabold leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-amber-300 font-semibold group-hover:underline">
                      {stat.title}
                    </p>
                    <p className="mt-1.5 md:mt-2 text-sm text-white/75">
                      {stat.subtitle}
                    </p>
                  </a>
                ) : (
                  <>
                    <div className="flex items-start justify-between">
                      <Image
                        src={`/images/1.svg`}
                        alt="Statistic icon"
                        width={15}
                        height={30}
                        className="h-6 w-auto opacity-90"
                      />
                      <p className="text-2xl md:text-3xl font-extrabold text-white/35 leading-none">
                        {stat.order}
                      </p>
                    </div>
                    <p className="mt-2 md:mt-3 text-4xl md:text-5xl font-extrabold leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-amber-300 font-semibold">
                      {stat.title}
                    </p>
                    <p className="mt-1.5 md:mt-2 text-sm text-white/75">
                      {stat.subtitle}
                    </p>
                  </>
                )}
              </article>
            ),
          )}
        </section>
      </HomeHeader>

      {isEditor && (
        <HomeEditor
          form={form}
          onChange={handleFieldChange}
          onBackgroundImageChange={setBackgroundImageFile}
          onLogoChange={setLogoFile}
          onStatChange={handleStatChange}
          onStatLinkChange={handleStatLinkChange}
          onSubmit={handleSubmit}
          isPending={updateMutation.isPending}
        />
      )}
    </main>
  );
}
