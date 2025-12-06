"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/shadcn";

export default function IndicesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Indices</h1>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Market Indices</h2>
        </CardHeader>
        <CardContent>
          <p className="text-white/80">View and manage your market indices here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
