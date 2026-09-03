# Energy Transport Company

Marketing site for Energy Transport Company, built with Astro and CloudCannon.

## Local development

```bash
cp .env.example .env
npm install
npm run dev
```

`SITE_URL` is the canonical public URL. Set it to the final HTTPS domain in the CloudCannon build environment before deploying. The same value powers canonical links, Open Graph URLs, the RSS feed, `robots.txt`, and `sitemap.xml`.

## SEO and AEO

- Every page emits canonical, description, Open Graph, Twitter, Organization, WebSite, and WebPage metadata.
- The services and products pages also emit FAQ schema for visible FAQs.
- `/robots.txt` and `/sitemap.xml` are generated during the Astro build. Only the six public marketing pages are included in the sitemap; the legacy blog, tag archives, pagination, and 404 page are `noindex`.
- Legacy starter blog content is retained for editorial reference but is not indexed or included in the RSS feed or sitemap.

## CloudCannon deployment

CloudCannon builds this repository with `npm run build`. Confirm that the CloudCannon site is connected to the repository's `main` branch and configure `SITE_URL` in its build environment. A successful build alone does not publish changes; deploy the latest main commit after merging.
