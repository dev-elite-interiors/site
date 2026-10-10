"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, ProductCategory, RoomCategory } from "@/types/product";
import BrandLogo from "@/components/BrandLogo";
import {
  UploadCloud,
  Plus,
  Trash2,
  CheckCircle,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowLeft,
  X,
  Eye,
} from "lucide-react";

const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: "sofa", label: "Sofas & Loungers" },
  { id: "bed", label: "Luxury Beds" },
  { id: "wardrobe", label: "Modular Wardrobes" },
  { id: "kitchen", label: "Modular Kitchens" },
  { id: "tv-unit", label: "TV Units & Consoles" },
  { id: "dining", label: "Dining Tables & Sets" },
  { id: "office", label: "Home Office & Desks" },
  { id: "outdoor", label: "Outdoor & Balcony" },
  { id: "custom", label: "Bespoke Joinery" },
];

const ROOMS: { id: RoomCategory; label: string }[] = [
  { id: "living", label: "Living Room" },
  { id: "bedroom", label: "Master Bedroom" },
  { id: "dining", label: "Dining Room" },
  { id: "kitchen", label: "Kitchen" },
  { id: "office", label: "Home Office" },
  { id: "outdoor", label: "Outdoor & Patio" },
];

const BADGES = [
  "Best Seller",
  "Handcrafted",
  "Trending",
  "New Launch",
  "Exclusive",
];

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ProductCategory>("sofa");
  const [room, setRoom] = useState<RoomCategory>("living");
  const [price, setPrice] = useState("");
  const [badge, setBadge] = useState("");
  const [woodOptionsInput, setWoodOptionsInput] = useState("Solid Teak, BWP Marine Ply, Italian PU");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");
  const [featuresInput, setFeaturesInput] = useState(
    "10-Year Structural Warranty\nTermite-Proof Seasoned Hardwood\nCustom Tailored Dimensions"
  );
  const [isFeatured, setIsFeatured] = useState(true);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.products) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error("Failed to load products", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setErrorMessage("");

    try {
      const newUrls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/upload", forwardPayload(formData));
        const data = await res.json();

        if (res.ok && data.url) {
          newUrls.push(data.url);
        } else {
          throw new Error(data.error || "File upload failed");
        }
      }

      setUploadedImages((prev) => [...prev, ...newUrls]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to upload image";
      setErrorMessage(msg);
    } finally {
      setUploading(false);
    }
  };

  function forwardPayload(formData: FormData) {
    return {
      method: "POST",
      body: formData,
    };
  }

  const removeUploadedImage = (indexToRemove: number) => {
    setUploadedImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMessage("Please enter a product title.");
      return;
    }
    if (uploadedImages.length === 0) {
      setErrorMessage("Please upload at least one product photo.");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    const selectedCat = CATEGORIES.find((c) => c.id === category);
    const selectedRoom = ROOMS.find((r) => r.id === room);

    const woodOptions = woodOptionsInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const features = featuresInput
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          category,
          categoryLabel: selectedCat?.label || category,
          room,
          roomLabel: selectedRoom?.label || room,
          price: price.trim() || "Starting on Request",
          badge: badge || undefined,
          woodOptions,
          dimensions: dimensions.trim() || "Custom Tailored to Room",
          images: uploadedImages,
          description: description.trim() || "Handcrafted luxury furniture by Dev Elite Interiors.",
          features,
          isFeatured,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMessage("Product added successfully! It is now live in the catalog.");
        // Reset form
        setTitle("");
        setPrice("");
        setDimensions("");
        setDescription("");
        setUploadedImages([]);
        setBadge("");
        fetchProducts();
      } else {
        throw new Error(data.error || "Failed to add product");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error saving product";
      setErrorMessage(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, productTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${productTitle}"?`)) return;

    try {
      const res = await fetch(`/api/products?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setProducts((prev) => prev.filter((p) => p.id !== id));
        setSuccessMessage(`Product "${productTitle}" was removed.`);
      } else {
        alert(data.error || "Failed to delete product");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete product");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[var(--color-text-dark)] font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-[var(--color-border)] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <BrandLogo size="sm" />
            <div className="hidden sm:block h-6 w-px bg-[var(--color-border)]" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-green-tint)] text-[var(--color-primary-green)] border border-[var(--color-primary-green)]/20">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                Product Studio & Catalog Manager
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-text-medium)] hover:text-[var(--color-primary-green)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/products"
              className="btn-primary !py-2 !px-4 !text-xs sm:!text-sm inline-flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>View Live Catalog</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Product Upload Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[var(--color-border-subtle)]">
                <div>
                  <h1
                    className="text-2xl sm:text-3xl font-normal text-[var(--color-primary-green)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Upload New Product
                  </h1>
                  <p className="text-xs sm:text-sm text-[var(--color-text-medium)] mt-1">
                    Upload your high-res product photos and configure catalog details.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[var(--color-green-tint)] border border-[var(--color-primary-green)]/20 flex items-center justify-center text-[var(--color-primary-green)]">
                  <Plus className="w-5 h-5" />
                </div>
              </div>

              {/* Feedback Alerts */}
              {successMessage && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                  <button
                    onClick={() => setSuccessMessage("")}
                    className="text-emerald-700 hover:text-emerald-900"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                  <button
                    onClick={() => setErrorMessage("")}
                    className="text-red-700 hover:text-red-900"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Photo Upload Zone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                    Product Photos <span className="text-red-500">*</span>
                  </label>

                  <div className="border-2 border-dashed border-[var(--color-border)] hover:border-[var(--color-primary-green)] transition-colors rounded-xl p-6 sm:p-8 text-center bg-[var(--color-off-white)]">
                    <input
                      type="file"
                      id="product-photo-upload"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                    <label
                      htmlFor="product-photo-upload"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-white border border-[var(--color-border)] shadow-xs flex items-center justify-center text-[var(--color-primary-green)] mb-3 group-hover:scale-105 transition-transform">
                        <UploadCloud className="w-7 h-7 text-[var(--color-gold)]" />
                      </div>
                      <span className="text-sm font-semibold text-[var(--color-primary-green)]">
                        {uploading ? "Uploading images..." : "Click or drag & drop product photos"}
                      </span>
                      <span className="text-xs text-[var(--color-text-light)] mt-1">
                        JPEG, PNG, WebP up to 10MB each. Multiple files supported.
                      </span>
                    </label>
                  </div>

                  {/* Uploaded Images Thumbnails */}
                  {uploadedImages.length > 0 && (
                    <div className="mt-4">
                      <span className="text-xs font-semibold text-[var(--color-text-medium)]">
                        Uploaded Photos ({uploadedImages.length}):
                      </span>
                      <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {uploadedImages.map((url, idx) => (
                          <div
                            key={idx}
                            className="relative group aspect-square rounded-lg overflow-hidden border border-[var(--color-border)] bg-white"
                          >
                            <Image
                              src={url}
                              alt={`Upload preview ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeUploadedImage(idx)}
                              className="absolute top-1 right-1 p-1 rounded-full bg-red-600/80 text-white hover:bg-red-700 transition-colors"
                              title="Remove photo"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                            {idx === 0 && (
                              <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[10px] bg-black/60 text-white font-mono">
                                Primary
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Product Title & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                      Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Royal Imperial Teak Bed"
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as ProductCategory)}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-white"
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 3. Room & Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                      Room Placement
                    </label>
                    <select
                      value={room}
                      onChange={(e) => setRoom(e.target.value as RoomCategory)}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-white"
                    >
                      {ROOMS.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                      Price / Estimate
                    </label>
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="e.g. Starting ₹65,000 or Custom Quote"
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-white"
                    />
                  </div>
                </div>

                {/* 4. Badge & Dimensions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                      Marketing Badge (Optional)
                    </label>
                    <select
                      value={badge}
                      onChange={(e) => setBadge(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-white"
                    >
                      <option value="">No Badge</option>
                      {BADGES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                      Dimensions / Sizing
                    </label>
                    <input
                      type="text"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      placeholder="e.g. 78&quot; W x 84&quot; L x 42&quot; H (Customizable)"
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-white"
                    />
                  </div>
                </div>

                {/* 5. Wood & Materials */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                    Wood & Material Options (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={woodOptionsInput}
                    onChange={(e) => setWoodOptionsInput(e.target.value)}
                    placeholder="e.g. Solid Burma Teak, Natural Walnut, BWP Marine Ply"
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-white"
                  />
                </div>

                {/* 6. Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                    Detailed Description
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the craftsmanship, comfort, styling, and joinery details..."
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-white resize-none"
                  />
                </div>

                {/* 7. Features (Bullet points) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text-dark)] mb-2">
                    Key Features (1 per line)
                  </label>
                  <textarea
                    rows={3}
                    value={featuresInput}
                    onChange={(e) => setFeaturesInput(e.target.value)}
                    placeholder="10-Year Warranty&#10;German Soft-Close Fittings&#10;Custom Tailored Sizing"
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary-green)] text-sm bg-white font-mono text-xs"
                  />
                </div>

                {/* 8. Featured Checkbox */}
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="isFeaturedCheck"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="w-4 h-4 text-[var(--color-primary-green)] rounded border-[var(--color-border)] focus:ring-[var(--color-primary-green)]"
                  />
                  <label htmlFor="isFeaturedCheck" className="text-xs sm:text-sm font-medium text-[var(--color-text-dark)] cursor-pointer">
                    Show as Featured Collection on Homepage
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                  <button
                    type="submit"
                    disabled={submitting || uploading}
                    className="btn-primary w-full justify-center !py-3.5 text-sm sm:text-base flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{submitting ? "Publishing Product..." : "Publish Product to Catalog"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Existing Products Table (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 sm:p-7 shadow-sm sticky top-28">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--color-border-subtle)]">
                <div>
                  <h2
                    className="text-xl font-normal text-[var(--color-primary-green)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Active Catalog
                  </h2>
                  <p className="text-xs text-[var(--color-text-light)]">
                    {products.length} Products currently live
                  </p>
                </div>
                <button
                  onClick={fetchProducts}
                  className="text-xs font-semibold text-[var(--color-luxury-green)] hover:underline"
                >
                  Refresh
                </button>
              </div>

              {loading ? (
                <div className="py-12 text-center text-xs text-[var(--color-text-light)]">
                  Loading catalog products...
                </div>
              ) : products.length === 0 ? (
                <div className="py-12 text-center text-xs text-[var(--color-text-light)]">
                  No products uploaded yet. Use the form on the left to add your first product.
                </div>
              ) : (
                <div className="space-y-3.5 max-h-[700px] overflow-y-auto pr-1">
                  {products.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-primary-green)]/30 transition-colors flex items-center gap-3.5 bg-[var(--color-off-white)] group"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white border border-[var(--color-border-subtle)]">
                        <Image
                          src={item.images[0] || "/logo.png"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-gold)] font-bold">
                            {item.categoryLabel}
                          </span>
                          {item.badge && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[var(--color-green-tint)] text-[var(--color-primary-green)] font-semibold">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[var(--color-primary-green)] truncate mt-0.5">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[var(--color-text-medium)] mt-0.5 font-medium">
                          {item.price || "Custom Quote"}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id, item.title)}
                          className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Instructions footer */}
              <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)] text-[11px] text-[var(--color-text-light)] space-y-1">
                <p className="font-semibold text-[var(--color-text-dark)]">💡 Tip for Product Photos:</p>
                <p>
                  You can upload photos directly through this page or drop files in{" "}
                  <code className="text-[var(--color-primary-green)] font-mono">public/uploads/products/</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
