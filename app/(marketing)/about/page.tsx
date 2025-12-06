import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
title: "About Us | StackFold",
description: "Meet the team and mission behind StackFold.",
};
export default function AboutPage() {
return (
<div className="container mx-auto px-6 py-12"><h1 className="text-4xl font-bold mb-8">
<Image src="/og/default.png" alt="About" width={1200} height={630} className="rounded-xl" />
</h1></div>
);
}
