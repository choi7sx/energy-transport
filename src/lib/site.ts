const fallbackSiteUrl = "https://tiny-jackal.cloudvent.net/";

export const siteUrl = new URL(import.meta.env.SITE_URL ?? fallbackSiteUrl).toString();
