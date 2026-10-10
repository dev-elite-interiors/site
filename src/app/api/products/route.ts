import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { Product } from "@/types/product";

const DATA_PATH = path.join(process.cwd(), "src", "data", "products.json");

async function getStoredProducts(): Promise<Product[]> {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading products data:", err);
    return [];
  }
}

async function saveStoredProducts(products: Product[]): Promise<void> {
  await writeFile(DATA_PATH, JSON.stringify(products, null, 2), "utf-8");
}

export async function GET() {
  try {
    const products = await getStoredProducts();
    return NextResponse.json({ success: true, products });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to load products list" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      category,
      categoryLabel,
      room,
      roomLabel,
      price,
      badge,
      woodOptions,
      dimensions,
      images,
      description,
      features,
      isFeatured,
    } = body;

    if (!title || !category || !images || images.length === 0) {
      return NextResponse.json(
        { error: "Title, category, and at least one image are required." },
        { status: 400 }
      );
    }

    const products = await getStoredProducts();

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      title,
      slug: `${slug}-${Math.floor(Math.random() * 1000)}`,
      category,
      categoryLabel: categoryLabel || category.toUpperCase(),
      room: room || "living",
      roomLabel: roomLabel || "Living Room",
      price: price || "Starting on Request",
      badge: badge || undefined,
      woodOptions: woodOptions && woodOptions.length ? woodOptions : ["Solid Teak", "Marine Ply"],
      dimensions: dimensions || "Custom Made to Measure",
      images,
      description: description || "Custom handcrafted piece by Dev Elite Interiors.",
      features: features && features.length ? features : ["10-Year Warranty", "Master Joinery"],
      isFeatured: !!isFeatured,
      createdAt: new Date().toISOString(),
    };

    products.unshift(newProduct);
    await saveStoredProducts(products);

    return NextResponse.json({
      success: true,
      product: newProduct,
      message: "Product created successfully!",
    });
  } catch (err) {
    console.error("Error saving product:", err);
    return NextResponse.json(
      { error: "Failed to save product" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Product ID required." },
        { status: 400 }
      );
    }

    let products = await getStoredProducts();
    const initialLength = products.length;
    products = products.filter((p) => p.id !== id);

    if (products.length === initialLength) {
      return NextResponse.json(
        { error: "Product not found." },
        { status: 404 }
      );
    }

    await saveStoredProducts(products);

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully.",
    });
  } catch (err) {
    console.error("Error deleting product:", err);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
