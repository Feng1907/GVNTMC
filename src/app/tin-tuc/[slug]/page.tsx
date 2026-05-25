import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";
import NewsDetailClient from "./NewsDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return newsArticles.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = newsArticles.find((n) => n.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} – GVN CNTT`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, width: 800, height: 450, alt: article.title }],
      type: "article",
    },
  };
}

export default function NewsDetailPage({ params }: Props) {
  const article = newsArticles.find((n) => n.slug === params.slug);
  if (!article) notFound();
  return <NewsDetailClient article={article} />;
}
