import os
import json
from pathlib import Path
from PIL import Image

SRC_DIR = Path(r"F:\raushan sharma\dev elite intorios")
DEST_DIR = Path(r"d:\Dev Elite interiors\public\products")
DATA_DIR = Path(r"d:\Dev Elite interiors\src\data")

CATEGORY_CONFIG = {
    "modular-kitchen": {
        "title": "Modular Kitchen",
        "typeKey": "kitchen",
        "roomKey": "kitchen",
        "roomLabel": "Modular Kitchen",
        "code": "MK",
        "desc": "Bespoke modular kitchens with waterproof marine ply and German hardware.",
    },
    "living-room": {
        "title": "Living Room & Sofa",
        "typeKey": "sofa",
        "roomKey": "living",
        "roomLabel": "Living Room",
        "code": "LR",
        "desc": "Curated living spaces, custom upholstery sofas, and ambient lounge designs.",
    },
    "bedroom": {
        "title": "Luxury Bedroom",
        "typeKey": "bed",
        "roomKey": "bedroom",
        "roomLabel": "Master Bedroom",
        "code": "BR",
        "desc": "Master suites with acoustic headboards, warm cove lighting, and tailored comfort.",
    },
    "wardrobe": {
        "title": "Custom Wardrobe",
        "typeKey": "wardrobe",
        "roomKey": "bedroom",
        "roomLabel": "Master Bedroom",
        "code": "WD",
        "desc": "Walk-in and sliding wardrobes with soft-close Blum fittings and organizers.",
    },
    "tv-unit": {
        "title": "TV Unit & Console",
        "typeKey": "tv-unit",
        "roomKey": "living",
        "roomLabel": "Living Room",
        "code": "TV",
        "desc": "Architectural entertainment consoles, fluted paneling, and cable concealment.",
    },
    "false-ceiling": {
        "title": "False Ceiling & Lighting",
        "typeKey": "custom",
        "roomKey": "living",
        "roomLabel": "Living & Dining",
        "code": "FC",
        "desc": "Designer gypsum and PVC false ceilings with magnetic track illumination.",
    },
    "signature-showcase": {
        "title": "Signature Showcase",
        "typeKey": "custom",
        "roomKey": "living",
        "roomLabel": "Full Residence",
        "code": "SIG",
        "desc": "Flagship residential projects and bespoke interior architecture highlights.",
    },
}

def get_category_slug(file_path: Path) -> str:
    path_str = str(file_path).lower()
    if "final image" in path_str:
        return "signature-showcase"
    elif "pvc siling" in path_str or "siling" in path_str:
        return "false-ceiling"
    elif "tv unit" in path_str or "tv-unit" in path_str:
        return "tv-unit"
    elif "kitchen" in path_str or "kichen" in path_str:
        return "modular-kitchen"
    elif "bedroom" in path_str:
        return "bedroom"
    elif "wardrobe" in path_str:
        return "wardrobe"
    elif "living room" in path_str or "final sofa" in path_str:
        return "living-room"
    return "living-room"

def main():
    os.makedirs(DEST_DIR, exist_ok=True)
    os.makedirs(DATA_DIR, exist_ok=True)

    all_files = sorted([
        f for f in SRC_DIR.rglob("*")
        if f.is_file() and f.suffix.lower() in [".jpg", ".jpeg", ".png", ".webp"]
    ])

    print(f"Generating manifest for {len(all_files)} total items...")

    grouped = {}
    for f in all_files:
        cat = get_category_slug(f)
        grouped.setdefault(cat, []).append(f)

    manifest = []

    for cat_slug, files in grouped.items():
        cat_meta = CATEGORY_CONFIG[cat_slug]
        cat_dest = DEST_DIR / cat_slug
        os.makedirs(cat_dest, exist_ok=True)

        for i, src_file in enumerate(files, start=1):
            product_id = f"{cat_meta['code']}-{i:03d}"
            dest_filename = f"{product_id}.webp"
            dest_file = cat_dest / dest_filename
            relative_url = f"/products/{cat_slug}/{dest_filename}"

            # If webp already exists, just get its size
            if dest_file.exists():
                with Image.open(dest_file) as img:
                    w, h = img.size
                file_size_kb = round(os.path.getsize(dest_file) / 1024, 1)
            else:
                with Image.open(src_file) as img:
                    img = img.convert("RGB")
                    orig_w, orig_h = img.size
                    max_dim = 1600
                    if max(orig_w, orig_h) > max_dim:
                        img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                    w, h = img.size
                    img.save(dest_file, "WEBP", quality=82, method=4)
                file_size_kb = round(os.path.getsize(dest_file) / 1024, 1)

            badge = None
            if i % 7 == 1:
                badge = "Handcrafted"
            elif i % 7 == 3:
                badge = "Best Seller"
            elif i % 7 == 5:
                badge = "Exclusive"

            item = {
                "id": product_id,
                "title": f"{cat_meta['title']} #{i:02d}",
                "slug": f"{cat_slug}-{i:02d}",
                "category": cat_meta["typeKey"],
                "categoryLabel": cat_meta["title"],
                "categorySlug": cat_slug,
                "room": cat_meta["roomKey"],
                "roomLabel": cat_meta["roomLabel"],
                "price": "Custom Quote (Factory Direct)",
                "badge": badge,
                "woodOptions": [
                    "BWR Marine Ply",
                    "Teakwood Polish",
                    "Acrylic Gloss",
                    "Matte Anti-Scratch"
                ],
                "dimensions": "Customized to Site Measurements",
                "image": relative_url,
                "images": [relative_url],
                "width": w,
                "height": h,
                "sizeKb": file_size_kb,
                "description": f"Custom {cat_meta['title']} manufactured by Dev Elite Interiors. Handcrafted joinery, precision edge-banding, and European architectural fittings.",
                "features": [
                    "100% ISI-certified BWR marine substrate",
                    "European soft-close hinges & channels",
                    "Scratch & moisture-resistant laminate surface",
                    "5-Year comprehensive studio warranty"
                ],
                "featured": (i <= 3),
                "isFeatured": (i <= 3),
                "createdAt": "2026-10-10"
            }
            manifest.append(item)

    manifest_path = DATA_DIR / "products.json"
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print(f"Successfully generated {len(manifest)} items in {manifest_path}")

if __name__ == "__main__":
    main()
