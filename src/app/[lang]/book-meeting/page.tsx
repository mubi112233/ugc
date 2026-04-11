import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BookMeetingClient from "./BookMeetingClient";
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
  const title = isDE ? "Termin buchen — Kostenlose UGC-Beratung | UGC Studio" : "Book a Meeting — Free UGC Consultation | UGC Studio";
  const description = isDE
    ? "Vereinbaren Sie eine kostenlose Strategie-Beratung und erfahren Sie, wie UGC Ihre Conversion-Rate steigern kann."
    : "Schedule a free UGC strategy consultation and learn how user-generated content can boost your conversion rates.";
  const { languages } = hreflangAlternates("book-meeting");
  const canonical = absoluteUrl(`/${seg}/book-meeting`);

  return {
    title,
    description,
    keywords: isDE
      ? ["ugc beratung", "content strategie gespräch", "ugc studio termin"]
      : ["ugc consultation", "content strategy call", "ugc studio meeting"],
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

export default async function BookMeetingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!SUPPORTED_LANGS.includes(rawLang?.toLowerCase())) notFound();
  return <BookMeetingClient />;
}
