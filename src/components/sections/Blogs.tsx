import { useEffect, useState } from 'react';
import { Newspaper } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SiMedium } from 'react-icons/si';
import { getMediumPosts } from '@/api/mediumFeed';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  link: string;
  categories: string[];
}

export function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchPosts() {
      try {
        const mediumPosts = await getMediumPosts();
        if (mounted) {
          setPosts(mediumPosts);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load blog posts');
          console.error('Error loading blog posts:', err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    // Use requestIdleCallback for non-critical data fetching
    if ('requestIdleCallback' in window) {
      requestIdleCallback(fetchPosts);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const timeoutId = setTimeout(fetchPosts, 0);
      return () => {
        mounted = false;
        clearTimeout(timeoutId);
      };
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="blogs" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <Newspaper className="h-6 sm:h-8 w-6 sm:w-8" />
          <h2 className="text-2xl sm:text-3xl font-bold">Blogs</h2>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading posts...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {posts.slice(0, 2).map((post, index) => (
                <Card key={index} className="p-4 sm:p-6 overflow-hidden hover:shadow-lg transition-shadow">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <h3 className="text-lg sm:text-xl font-semibold hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base line-clamp-3 break-words">
                        {post.description}
                      </p>
                      
                      {post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.categories.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </a>

                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://medium.com/@akhilkathi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="View all blog posts on Medium (opens in new tab)"
              >
                <span>Read more on Medium</span>
                <SiMedium className="h-5 w-5" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
} 