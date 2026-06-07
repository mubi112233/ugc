import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const seg = publicLocalePathSegment(lang);
  const pathAfterLocale = `case-study/${slug}`;
  const canonical = absoluteUrl(`/${seg}/${pathAfterLocale}`);
  const { languages } = hreflangAlternates(pathAfterLocale);

  return {
    alternates: { canonical, languages },
    robots: { index: true, follow: true },
  };
}

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}
