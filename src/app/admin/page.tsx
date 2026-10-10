"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import {
  UploadCloud,
  Layers,
  ExternalLink,
  LogOut,
  FolderOpen,
  Database,
  Image as ImageIcon,
  CheckCircle2,
  ArrowRight,
  Shield,
  Activity,
  PlusCircle,
} from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [adminUser, setAdminUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/auth");
        const data = await res.json();
        if (!res.ok || !data.authenticated) {
          router.push("/admin/login");
        } else {
          setAdminUser(data.user);
        }
      } catch {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-off-white)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-3 border-[var(--color-primary-green)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm font-medium text-[var(--color-text-medium)]">
            Loading Atelier Dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-off-white)] text-[var(--color-text-dark)] flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <BrandLogo variant="light" size="sm" />
            <span className="hidden sm:inline-block h-6 w-px bg-gray-200" />
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-green-tint)] text-[var(--color-primary-green)] text-xs font-semibold">
              <Shield className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              <span>Studio Atelier Portal</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold text-[var(--color-text-dark)]">
                {adminUser?.email || "info.develiteinteriors@gmail.com"}
              </p>
              <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wider">
                Super Administrator
              </p>
            </div>

            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[var(--color-text-medium)] hover:text-[var(--color-primary-green)] px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <span>View Public Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 px-3.5 py-2 rounded-lg border border-red-200 transition-colors font-medium cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[var(--color-primary-green-dark)] to-[var(--color-primary-green)] text-white rounded-2xl p-8 sm:p-10 mb-10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[var(--color-gold)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[var(--color-gold-light)] font-semibold mb-2 block">
              Atelier Command Center
            </span>
            <h1
              className="text-3xl sm:text-4xl font-normal mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Manage Studio Operations
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              Upload high-resolution photography, organize catalog categories, and control the architectural portfolio displayed on the customer website.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/admin/products"
                className="inline-flex items-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-primary-green-dark)] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-sm transition-all"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Upload & Manage Products</span>
              </Link>
              <Link
                href="/portfolio"
                target="_blank"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-5 py-3 rounded-lg border border-white/20 transition-all"
              >
                <span>Live Gallery Preview</span>
                <ArrowRight className="w-4 h-4 text-[var(--color-gold-light)]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Studio System Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-light)]">
                Processed Assets
              </span>
              <div className="w-9 h-9 rounded-lg bg-[var(--color-green-tint)] flex items-center justify-center text-[var(--color-primary-green)]">
                <ImageIcon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-3xl font-bold text-[var(--color-primary-green)]">429</p>
            <p className="text-xs text-[var(--color-text-medium)] mt-1">
              Optimized WebP catalog images
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-light)]">
                Categories
              </span>
              <div className="w-9 h-9 rounded-lg bg-[var(--color-gold-tint)] flex items-center justify-center text-[var(--color-gold-dark)]">
                <FolderOpen className="w-5 h-5" />
              </div>
            </div>
            <p className="text-3xl font-bold text-[var(--color-text-dark)]">10</p>
            <p className="text-xs text-[var(--color-text-medium)] mt-1">
              Curated furniture disciplines
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-light)]">
                Cloud Sync
              </span>
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Database className="w-5 h-5" />
              </div>
            </div>
            <p className="text-lg font-bold text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Active</span>
            </p>
            <p className="text-xs text-[var(--color-text-medium)] mt-1">
              Supabase & Airtable connected
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-light)]">
                Access Security
              </span>
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <Shield className="w-5 h-5" />
              </div>
            </div>
            <p className="text-lg font-bold text-[var(--color-primary-green)]">Locked</p>
            <p className="text-xs text-[var(--color-text-medium)] mt-1">
              Session HttpOnly guarded
            </p>
          </div>
        </div>

        {/* Quick Management Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Product Management */}
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-8 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-green-tint)] flex items-center justify-center text-[var(--color-primary-green)] mb-6">
              <UploadCloud className="w-6 h-6" />
            </div>
            <h3
              className="text-xl font-normal text-[var(--color-primary-green)] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Furniture & Project Catalog
            </h3>
            <p className="text-sm text-[var(--color-text-medium)] leading-relaxed mb-6">
              Add new product lines, upload raw workshop photography, configure timber specs (Solid Teak, BWP Marine Ply), and update pricing estimates.
            </p>
            <Link
              href="/admin/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary-green)] hover:text-[var(--color-gold-dark)] transition-colors"
            >
              <span>Open Catalog Management</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Concierge & Leads */}
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-8 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-gold-tint)] flex items-center justify-center text-[var(--color-gold-dark)] mb-6">
              <Activity className="w-6 h-6" />
            </div>
            <h3
              className="text-xl font-normal text-[var(--color-primary-green)] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Direct Concierge Enquiries
            </h3>
            <p className="text-sm text-[var(--color-text-medium)] leading-relaxed mb-6">
              Customer enquiries route directly with instant 3D consultation prompts to WhatsApp phone <span className="font-mono font-semibold">+91 73680 32697</span> and official studio email <span className="font-mono font-semibold">info.develiteinteriors@gmail.com</span>.
            </p>
            <a
              href="https://wa.me/917368032697"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary-green)] hover:text-[var(--color-gold-dark)] transition-colors"
            >
              <span>Test Concierge Channel</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      {/* Admin Footer */}
      <footer className="bg-white border-t border-[var(--color-border)] py-6 text-center text-xs text-[var(--color-text-light)]">
        Dev Elite Interiors · Studio Administrative Environment · Protected by Multi-Factor Session Guard
      </footer>
    </div>
  );
}
