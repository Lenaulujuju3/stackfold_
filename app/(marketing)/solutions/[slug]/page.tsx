import { notFound } from "next/navigation";
import type { Metadata } from "next";
import VerticalTemplate from "../../solutions/VerticalTemplate";
import { VERTICALS } from "../../../../lib/mock/data";

export async function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const vert = VERTICALS.find((v) => v.slug === params.slug);
  return {
    title: vert ? `${vert.name} – Solutions – StackFold` : "Solutions – StackFold",
    description: vert?.outcome ?? "Vertical solutions powered by indices.",
  };
}

export default function VerticalPage({ params }: { params: { slug: string } }) {
  const vert = VERTICALS.find((v) => v.slug === params.slug);
  if (!vert) return notFound();
  return <VerticalTemplate vertical={vert} />;
}
