"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("from") || "/admin";

  const [email, setEmail] = useState("info.develiteinteriors@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push(redirectUrl);
        router.refresh();
      } else {
        setError(data.error || "Authentication failed. Invalid email or password.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10 text-[var(--color-text-dark)] border border-[var(--color-border)]">
      <div className="text-center mb-8">
        <div className="mb-4 flex justify-center">
          <BrandLogo variant="light" size="md" layout="stacked" />
        </div>
        <h1
          className="text-2xl sm:text-3xl font-normal text-[var(--color-primary-green)] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Atelier Management
        </h1>
        <p className="text-xs sm:text-sm text-[var(--color-text-medium)]">
          Restricted portal for Dev Elite Interiors studio administrators.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-medium)] mb-2">
            Authorized Studio Email
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="info.develiteinteriors@gmail.com"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] text-sm transition-all text-[var(--color-text-dark)]"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-medium)]">
              Master Password
            </label>
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter administrator password"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--color-primary-green)] focus:ring-1 focus:ring-[var(--color-primary-green)] text-sm transition-all text-[var(--color-text-dark)]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 py-3.5 px-6 rounded-lg bg-[var(--color-primary-green)] hover:bg-[var(--color-primary-green-dark)] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <span>Authenticating Atelier...</span>
          ) : (
            <>
              <span>Access Studio Portal</span>
              <ArrowRight className="w-4 h-4 text-[var(--color-gold)]" />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-[11px] text-[var(--color-text-light)]">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>256-Bit SSL Encrypted Administrative Session</span>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[var(--color-primary-green-dark)] flex flex-col justify-between text-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary-green)]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <header className="px-6 py-6 border-b border-white/10 flex items-center justify-between z-10">
        <BrandLogo variant="dark" size="md" />
        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-white/70 hover:text-[var(--color-gold-light)] transition-colors"
        >
          ← Return to Public Site
        </Link>
      </header>

      {/* Login Card Container wrapped in Suspense */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 z-10">
        <Suspense
          fallback={
            <div className="text-white text-sm">Loading security verification...</div>
          }
        >
          <LoginForm />
        </Suspense>
      </main>

      {/* Sub Footer */}
      <footer className="px-6 py-4 border-t border-white/10 text-center text-xs text-white/50 z-10">
        Dev Elite Interiors · Protected System · Unauthorized Access Strictly Prohibited
      </footer>
    </div>
  );
}
