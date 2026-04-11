import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";

const SUPPORTED_LANGS = ["en", "ge", "de"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const seg = publicLocalePathSegment(raw);
  const isDE = seg === "de";
  const title = isDE ? "Kontakt — UGC Studio | Content Creation" : "Contact — UGC Studio | UGC Content Services";
  const description = isDE
    ? "Kontaktieren Sie UGC Studio für eine Beratung zu User Generated Content, Creator Casting und Video-Produktion."
    : "Contact UGC Studio for a consultation about user-generated content, creator casting, and video production.";
  const { languages } = hreflangAlternates("contact");
  const canonical = absoluteUrl(`/${seg}/contact`);

  return {
    title,
    description,
    keywords: isDE
      ? ["kontakt UGC Studio", "UGC beratung", "content creation anfrage"]
      : ["contact UGC Studio", "UGC inquiry", "content creation consultation"],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isDE ? "de_DE" : "en_US",
      alternateLocale: isDE ? "en_US" : "de_DE",
      siteName: "UGC Studio",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "UGC Studio" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.jpg")],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!SUPPORTED_LANGS.includes(rawLang?.toLowerCase())) notFound();
  const lang = rawLang === "ge" || rawLang === "de" ? "ge" : "en";
  return <ContactClient lang={lang} />;
}
