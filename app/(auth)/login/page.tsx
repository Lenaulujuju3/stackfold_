"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "../../../components/ui/shadcn";
import { setUser } from "../../../lib/auth";
import { Section, Card } from "../../(components)/components";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) { setErr("Enter an email"); return; }
    // Mock: if email contains "+admin" or ends with @stackfold.com => admin
    const role = /\+admin/.test(email) || /@stackfold\.com$/.test(email) ? "admin" : "user";
    setUser({ email, role });
    router.push("/dashboard");
  }

  return (
    <div className="py-16">
      <Section title="Login" subtitle="Mock authentication for demo. Use any email. Add +admin to get admin role.">
        <div className="mx-auto max-w-md">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="text-xs text-white/60">Email</div>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
              <div>
                <div className="text-xs text-white/60">Password</div>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
              </div>
              {err && <div className="text-sm text-amber-300">{err}</div>}
              <div className="flex items-center justify-between">
                <Button type="submit">Sign In</Button>
                <a className="text-sm text-white/60" href="#">Sign in with SSO (placeholder)</a>
              </div>
            </form>
            <div className="mt-4 text-sm text-white/60">
              Need access? <a className="text-sky-300" href="/pricing">Request Access Demo</a>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
