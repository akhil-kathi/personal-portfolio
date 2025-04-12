export interface MediumPost {
  title: string;
  description: string;
  date: string;
  link: string;
  categories: string[];
}

interface CacheItem {
  data: MediumPost[];
  timestamp: number;
}

const CACHE_KEY = 'medium_posts_cache';
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

function getCache(): CacheItem | null {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;
  return JSON.parse(cached);
}

function setCache(data: MediumPost[]): void {
  const cacheItem: CacheItem = {
    data,
    timestamp: Date.now()
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cacheItem));
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  // Check cache first
  const cached = getCache();
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    // Using a public API that handles CORS for Medium RSS feeds
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akhilkathi`);
    const data = await response.json();
    
    if (data.status === 'ok') {
      const posts = data.items.map((item: any) => ({
        title: item.title,
        description: item.description.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
        date: new Date(item.pubDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        link: item.link,
        categories: item.categories || []
      }));

      // Cache the results
      setCache(posts);
      return posts;
    }
    return [];
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // Return cached data if available, even if expired
    return cached?.data || [];
  }
} 