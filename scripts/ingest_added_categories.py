import os
import json
from pathlib import Path
from PIL import Image

SRC_BASE = Path(r"F:\raushan sharma\Added catorgy")
DEST_BASE = Path(r"d:\Dev Elite interiors\public\products")
DATA_FILE = Path(r"d:\Dev Elite interiors\src\data\products.json")

CATEGORIES_TO_INGEST = [
    {
        "folder": "dining table",
        "slug": "dining-table",
        "code": "DT",
        "category": "dining",
        "categoryLabel": "Dining Tables",
        "room": "dining",
        "roomLabel": "Dining Room",
        "title_prefix": "Solid Teak Dining Table",
        "woodOptions": [
            "Single-Slab Solid Teak",
            "Italian Marble Inlay",
            "American Walnut Polish",
            "BWR Marine Substrate"
        ],
        "features": [
            "100% Solid Seasoned Teak & BWP substrate",
            "Single-slab timber with zero-wobble mortise joinery",
            "Food-grade heat and stain-resistant PU finish",
            "5-Year comprehensive studio warranty"
        ],
        "badges": ["Single Slab Teak", "Best Seller", "Heirloom Grade", "Exclusive"]
    },
    {
        "folder": "executive desks",
        "slug": "executive-desks",
        "code": "ED",
        "category": "office",
        "categoryLabel": "Executive Desks",
        "room": "office",
        "roomLabel": "Home Office",
        "title_prefix": "Executive Timber Desk",
        "woodOptions": [
            "Teakwood Polish & Solid Edge",
            "Acoustic Wood Paneling",
            "Matte PU Architectural Finish",
            "High-Grade BWP Ply"
        ],
        "features": [
            "Teakwood veneer with solid timber chamfered edging",
            "Concealed wire management and power docks",
            "German soft-close Blum/Hafele drawer runners",
            "Built-in lockable document compartments"
        ],
        "badges": ["Executive Suite", "Ergonomic Joinery", "Wire-Dock Integrated", "Best Seller"]
    },
    {
        "folder": "balcony&patio",
        "slug": "balcony-patio",
        "code": "BP",
        "category": "outdoor",
        "categoryLabel": "Balcony & Patio",
        "room": "outdoor",
        "roomLabel": "Outdoor & Patio",
        "title_prefix": "All-Weather Patio Lounger",
        "woodOptions": [
            "Weather-Treated Plantation Teak",
            "100% BWP Marine Substrate",
            "304 Stainless Steel Hardware",
            "UV-Resistant Outdoor Fabric"
        ],
        "features": [
            "Weather-treated seasoned teak framing",
            "100% boiling-water-proof exterior marine core",
            "Rust-proof 304-grade stainless steel fittings",
            "Water-repellent and UV-resistant outdoor cushions"
        ],
        "badges": ["All-Weather Teak", "UV & Rain Resistant", "Exclusive", "Best Seller"]
    }
]

def main():
    print("--- Starting Added Categories Ingestion ---")
    
    # 1. Read existing products
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        existing_products = json.load(f)
    print(f"Loaded {len(existing_products)} existing products from {DATA_FILE}")

    # Remove any previously ingested products of these categories if re-running
    new_categories = {c["category"] for c in CATEGORIES_TO_INGEST}
    cleaned_products = [p for p in existing_products if p.get("category") not in new_categories]
    print(f"Base products count (preserving original catalog): {len(cleaned_products)}")

    added_items = []

    for cat_cfg in CATEGORIES_TO_INGEST:
        src_folder = SRC_BASE / cat_cfg["folder"]
        dest_folder = DEST_BASE / cat_cfg["slug"]
        os.makedirs(dest_folder, exist_ok=True)

        # Get direct files only, sorted numerically (1.jpg to 20.jpg)
        direct_files = [
            f for f in src_folder.iterdir()
            if f.is_file() and f.suffix.lower() in [".jpg", ".jpeg", ".png", ".webp"]
        ]
        direct_files.sort(key=lambda x: int(x.stem) if x.stem.isdigit() else 999)

        print(f"Processing {cat_cfg['categoryLabel']} ({len(direct_files)} files) from {src_folder}...")

        for i, src_file in enumerate(direct_files, start=1):
            product_id = f"{cat_cfg['code']}-{i:03d}"
            dest_filename = f"{product_id}.webp"
            dest_file = dest_folder / dest_filename
            relative_url = f"/products/{cat_cfg['slug']}/{dest_filename}"

            # Convert to WebP (max 1600px Lanczos, quality 82)
            with Image.open(src_file) as img:
                img = img.convert("RGB")
                orig_w, orig_h = img.size
                max_dim = 1600
                if max(orig_w, orig_h) > max_dim:
                    img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                w, h = img.size
                img.save(dest_file, "WEBP", quality=82, method=4)

            file_size_kb = round(os.path.getsize(dest_file) / 1024, 1)

            # Assign badges
            badge = None
            if i == 1:
                badge = cat_cfg["badges"][0]
            elif i == 2:
                badge = cat_cfg["badges"][1]
            elif i == 3:
                badge = cat_cfg["badges"][2]
            elif i % 5 == 0:
                badge = cat_cfg["badges"][3]

            item = {
                "id": product_id,
                "title": f"{cat_cfg['title_prefix']} #{i:02d}",
                "slug": f"{cat_cfg['slug']}-{i:02d}",
                "category": cat_cfg["category"],
                "categoryLabel": cat_cfg["categoryLabel"],
                "categorySlug": cat_cfg["slug"],
                "room": cat_cfg["room"],
                "roomLabel": cat_cfg["roomLabel"],
                "price": "Custom Quote (Factory Direct)",
                "badge": badge,
                "woodOptions": cat_cfg["woodOptions"],
                "dimensions": "Customized to Site Measurements",
                "image": relative_url,
                "images": [relative_url],
                "width": w,
                "height": h,
                "sizeKb": file_size_kb,
                "description": f"Custom {cat_cfg['categoryLabel']} handcrafted by Dev Elite Interiors. Precision joinery, premium seasoned substrates, and architectural European fittings.",
                "features": cat_cfg["features"],
                "featured": (i <= 3),
                "isFeatured": (i <= 3),
                "createdAt": "2026-10-12"
            }
            added_items.append(item)

    print(f"Total new products created: {len(added_items)}")
    final_manifest = cleaned_products + added_items
    print(f"Total products in new manifest: {len(final_manifest)}")

    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(final_manifest, f, indent=2, ensure_ascii=False)

    print(f"Successfully saved updated catalog ({len(final_manifest)} items) to {DATA_FILE}")

if __name__ == "__main__":
    main()
