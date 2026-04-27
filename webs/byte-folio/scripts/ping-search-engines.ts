/**
 * Post-deploy script: pings IndexNow (Bing/Yandex/DuckDuckGo) with all site
 * URLs so search engines re-crawl promptly.
 *
 * Google is intentionally excluded — their sitemap ping endpoint was deprecated
 * in 2023. Google discovers content via the Sitemap directive in robots.txt.
 *
 * Usage:
 *   npx tsx scripts/ping-search-engines.ts
 *
 * Environment:
 *   NEXT_PUBLIC_SITE_URL  — base URL (default: https://nkmnhan.com)
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nkmnhan.com";
const INDEXNOW_KEY = "cdf7474a913f4686a3dbceaa4de544c5";

const URLS = [
  SITE_URL,
  `${SITE_URL}/projects/meditrack`,
  `${SITE_URL}/projects/aspire-nexus`,
  `${SITE_URL}/projects/e-portfolio`,
  `${SITE_URL}/projects/vue-identityserver4`,
  `${SITE_URL}/projects/maui-mediatr`,
  `${SITE_URL}/projects/elasticsearch-nest`,
  `${SITE_URL}/projects/vuejs-hot-reload-docker`,
  `${SITE_URL}/projects/resource-manager`,
  `${SITE_URL}/projects/e-shop`,
  `${SITE_URL}/projects/sql-converter`,
  `${SITE_URL}/projects/push-notification`,
  `${SITE_URL}/projects/hybrid-webview`,
  `${SITE_URL}/projects/calendar-demo`,
  `${SITE_URL}/projects/identityserver4-study`,
];

async function pingIndexNow(): Promise<void> {
  const host = new URL(SITE_URL).host;
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: URLS,
  };

  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  for (const engine of engines) {
    try {
      const res = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });
      console.log(`IndexNow ${engine}: ${res.status} ${res.statusText}`);
    } catch (err) {
      console.error(`IndexNow ${engine}: FAILED`, err);
    }
  }
}

async function main(): Promise<void> {
  console.log(`Pinging search engines for ${SITE_URL}...`);
  console.log(`Submitting ${URLS.length} URLs\n`);

  await pingIndexNow();

  console.log("\nDone. URLs submitted for crawling.");
}

main();
