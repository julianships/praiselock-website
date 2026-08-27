import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL("../app/christian-app-blocker/page.js", import.meta.url);
const stylesPath = new URL("../app/christian-app-blocker/page.module.css", import.meta.url);
const sitemapPath = new URL("../app/sitemap.js", import.meta.url);
const page = await readFile(pagePath, "utf8");
const styles = await readFile(stylesPath, "utf8");
const sitemap = await readFile(sitemapPath, "utf8");

const listing = "https://apps.apple.com/us/app/praise-lock-stop-focus-pray/id6759266143";

test("owned-search page preserves the exact iOS listing and campaign ID", () => {
  assert.match(page, new RegExp(listing.replaceAll("/", "\\/")));
  assert.match(page, /seo_christian_app_blocker/);
  assert.equal((page.match(/data-campaign-id=/g) || []).length, 3);
  assert.match(
    page,
    /canonical: "https:\/\/www\.praiselock\.com\/christian-app-blocker"/,
  );
});

test("page does not advertise unavailable Android distribution", () => {
  assert.doesNotMatch(page, /Google Play|play\.google\.com|available on iOS and Android/i);
  assert.match(page, /Currently available for iPhone/);
});

test("page describes the real mechanism without prohibited outcome claims", () => {
  for (const phrase of ["Choose the apps", "interrupt", "Pause and pray", "Unlock"]) {
    assert.match(page, new RegExp(phrase, "i"));
  }
  assert.doesNotMatch(page, /94%|tens of thousands|guarantee|clinically proven/i);
});

test("page keeps semantic structure, visible focus, and a narrow-screen layout", () => {
  assert.match(page, /<main/);
  assert.match(page, /<nav[^>]+aria-label=/);
  assert.match(page, /<ol/);
  assert.match(page, /aria-labelledby=/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /@media \(max-width: 760px\)/);
  assert.match(styles, /grid-template-columns: 1fr/);
});

test("sitemap exposes the owned-search route exactly once", () => {
  assert.equal((sitemap.match(/christian-app-blocker/g) || []).length, 1);
  assert.match(sitemap, /https:\/\/www\.praiselock\.com/);
});
