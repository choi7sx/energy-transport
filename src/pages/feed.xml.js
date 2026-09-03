import site from '../../data/site.json';
import { getCollection } from 'astro:content';

import rss from '@astrojs/rss';
import { siteUrl } from '../lib/site';
const posts = await getCollection('blog');

export async function GET() {
  return rss({
    title: site.site_title,
    description: site.description,
    site: siteUrl,
    items: posts.filter((post) => !post.data.seo?.no_index).map((post) => ({
      link: `/blog/${post.id}`,
      title: post.data.title,
      pubDate: post.data.post_hero.date,
    })),
    customData: `<language>en-us</language>`,
  });
}
