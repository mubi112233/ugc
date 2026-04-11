import type { Metadata } from "next";
import { BlogListingClient } from "./BlogListingClient";
import { absoluteUrl, hreflangAlternates, publicLocalePathSegment } from "@/lib/site-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const seg = publicLocalePathSegment(raw);
  const { languages } = hreflangAlternates("blog");
  const canonical = absoluteUrl(`/${seg}/blog`);

  const isDe = seg === "de";
  const title = isDe
    ? "Blog — UGC Tipps & Content Creation | UGC Studio"
    : "Blog — UGC Tips & Content Creation | UGC Studio";
  const description = isDe
    ? "Einblicke, Tipps und Best Practices zu User Generated Content, Creator Casting und TikTok/Reels Marketing."
    : "Insights, tips, and best practices for user generated content, creator casting, and TikTok/Reels marketing.";

  return {
    title,
    description,
    keywords: isDe
      ? [
          "ugc blog",
          "content creation tipps",
          "tiktok marketing deutsch",
          "creator casting",
          "UGC Studio",
        ]
      : [
          "ugc blog",
          "content creation tips",
          "tiktok marketing",
          "creator casting",
          "UGC Studio",
        ],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: isDe ? "de_DE" : "en_US",
      alternateLocale: isDe ? "en_US" : "de_DE",
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

export default function BlogPage() {
  return <BlogListingClient />;
}
