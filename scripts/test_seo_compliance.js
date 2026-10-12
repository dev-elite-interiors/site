const fs = require('fs');
const path = require('path');

function runSeoTests() {
  console.log('=== Dev Elite Interiors: Comprehensive SEO Compliance Test ===\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, testName, details = '') {
    if (condition) {
      console.log(`  [PASS] ${testName}`);
      passed++;
    } else {
      console.error(`  [FAIL] ${testName} ${details ? '(' + details + ')' : ''}`);
      failed++;
    }
  }

  // 1. Robots.txt / robots.ts check
  const robotsTsPath = path.join(__dirname, '..', 'src', 'app', 'robots.ts');
  const robotsTxtPath = path.join(__dirname, '..', 'public', 'robots.txt');
  const hasRobots = fs.existsSync(robotsTsPath) || fs.existsSync(robotsTxtPath);
  assert(hasRobots, 'Robots configuration exists (robots.ts or robots.txt)');

  if (fs.existsSync(robotsTsPath)) {
    const robotsContent = fs.readFileSync(robotsTsPath, 'utf8');
    assert(robotsContent.includes('/admin'), 'Robots config disallows /admin route');
    assert(robotsContent.includes('sitemap.xml'), 'Robots config references sitemap.xml');
  }

  // 2. Sitemap.xml / sitemap.ts check
  const sitemapTsPath = path.join(__dirname, '..', 'src', 'app', 'sitemap.ts');
  const sitemapXmlPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const hasSitemap = fs.existsSync(sitemapTsPath) || fs.existsSync(sitemapXmlPath);
  assert(hasSitemap, 'Sitemap configuration exists (sitemap.ts or sitemap.xml)');

  if (fs.existsSync(sitemapTsPath)) {
    const sitemapContent = fs.readFileSync(sitemapTsPath, 'utf8');
    assert(sitemapContent.includes('/about') && sitemapContent.includes('/products') && sitemapContent.includes('/services'), 'Sitemap includes primary routes (/about, /products, /services)');
  }

  // 3. AI SEO (llms.txt) check
  const llmsTxtPath = path.join(__dirname, '..', 'public', 'llms.txt');
  assert(fs.existsSync(llmsTxtPath), 'AI Discovery file (public/llms.txt) exists');
  if (fs.existsSync(llmsTxtPath)) {
    const llmsContent = fs.readFileSync(llmsTxtPath, 'utf8');
    assert(llmsContent.includes('Dev Elite Interiors'), 'llms.txt contains brand name');
    assert(llmsContent.length > 500, `llms.txt contains substantial content (${llmsContent.length} bytes)`);
  }

  // 4. Root Layout Metadata check
  const layoutPath = path.join(__dirname, '..', 'src', 'app', 'layout.tsx');
  assert(fs.existsSync(layoutPath), 'Root layout exists');
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  assert(layoutContent.includes('metadataBase'), 'layout.tsx sets metadataBase for canonical resolution');
  assert(layoutContent.includes('openGraph'), 'layout.tsx sets Open Graph tags');
  assert(layoutContent.includes('twitter:'), 'layout.tsx sets Twitter Card tags');
  assert(layoutContent.includes('application/ld+json'), 'layout.tsx injects Schema.org JSON-LD structured data');
  assert(layoutContent.includes('G-SCRG1VN15V'), 'layout.tsx configures Google Analytics tag (G-SCRG1VN15V)');

  // 5. Schema Component & Definitions check
  const schemaComponentPath = path.join(__dirname, '..', 'src', 'components', 'StructuredData.tsx');
  assert(fs.existsSync(schemaComponentPath), 'StructuredData.tsx component exists');
  if (fs.existsSync(schemaComponentPath)) {
    const schemaContent = fs.readFileSync(schemaComponentPath, 'utf8');
    assert(schemaContent.includes('"Organization"'), 'Schema includes Organization definition');
    assert(schemaContent.includes('"HomeAndConstructionBusiness"') || schemaContent.includes('"LocalBusiness"'), 'Schema includes LocalBusiness definition');
    assert(schemaContent.includes('"FAQPage"'), 'Schema includes FAQPage definition');
    assert(schemaContent.includes('"WebSite"'), 'Schema includes WebSite definition');
  }

  // 6. NAP & Contact consistency
  const contactPagePath = path.join(__dirname, '..', 'src', 'app', 'contact', 'page.tsx');
  if (fs.existsSync(contactPagePath)) {
    const contactContent = fs.readFileSync(contactPagePath, 'utf8');
    assert(contactContent.includes('7368032697') || contactContent.includes('73680 32697'), 'Contact page uses verified official phone (+91 73680 32697) without dummy numbers');
  }

  console.log(`\nTest Summary: ${passed} passed, ${failed} failed.`);
  if (failed > 0) {
    process.exit(1);
  }
}

runSeoTests();
