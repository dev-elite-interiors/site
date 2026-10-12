const fs = require('fs');
const path = require('path');

function runTests() {
  console.log('--- Dev Elite Interiors: Catalog & Categories Integrity Test ---');
  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`  [PASS] ${testName}`);
      passed++;
    } else {
      console.error(`  [FAIL] ${testName}`);
      failed++;
    }
  }

  const productsPath = path.join(__dirname, '..', 'src', 'data', 'products.json');
  assert(fs.existsSync(productsPath), 'products.json file exists');

  const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  console.log(`  Total products found: ${products.length}`);

  // Test 1: Total count must be 489 (429 original + 60 new)
  assert(products.length === 489, `Total product count is 489 (found: ${products.length})`);

  // Test 2: Category breakdown
  const categoryCounts = {};
  products.forEach(p => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });

  console.log('  Category distribution:', categoryCounts);

  assert(categoryCounts['dining'] === 20, `Dining category has exactly 20 products (found: ${categoryCounts['dining']})`);
  assert(categoryCounts['office'] === 20, `Office category has exactly 20 products (found: ${categoryCounts['office']})`);
  assert(categoryCounts['outdoor'] === 20, `Outdoor category has exactly 20 products (found: ${categoryCounts['outdoor']})`);

  // Test 3: Asset existence check
  let missingImages = 0;
  let emptyImages = 0;

  products.forEach(p => {
    const relPath = p.image.replace(/^\//, '');
    const fullPath = path.join(__dirname, '..', 'public', relPath);
    if (!fs.existsSync(fullPath)) {
      missingImages++;
      console.error(`    Missing asset: ${fullPath} for product ${p.id}`);
    } else {
      const stats = fs.statSync(fullPath);
      if (stats.size < 1000) {
        emptyImages++;
        console.error(`    Corrupt/tiny asset: ${fullPath} (${stats.size} bytes)`);
      }
    }
  });

  assert(missingImages === 0, `All product images exist on disk (missing: ${missingImages})`);
  assert(emptyImages === 0, `All product images have valid file sizes (empty/corrupt: ${emptyImages})`);

  // Test 4: Pricing & Required fields
  let missingRequiredFields = 0;
  products.forEach(p => {
    if (!p.id || !p.title || !p.category || !p.room || !p.image || !p.price) {
      missingRequiredFields++;
    }
  });

  assert(missingRequiredFields === 0, `All products have required fields (invalid: ${missingRequiredFields})`);

  console.log(`\nTest Summary: ${passed} passed, ${failed} failed.`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
