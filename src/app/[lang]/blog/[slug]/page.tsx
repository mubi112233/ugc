import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const seg = publicLocalePathSegment(lang);
  const pathAfterLocale = `blog/${slug}`;
  const canonical = absoluteUrl(`/${seg}/${pathAfterLocale}`);
  const { languages } = hreflangAlternates(pathAfterLocale);

  return {
    alternates: { canonical, languages },
    robots: { index: true, follow: true },
  };
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}
