import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
title: "Data | StackFold",
description: "Explore our data coverage.",
};
export default function DataPage() {
return (
<div className="container mx-auto px-6 py-12"><h1 className="text-4xl font-bold mb-8">
<Image src="/og/default.png" alt="Data" width={1200} height={630} className="rounded-xl" />
</h1></div>
);
}
