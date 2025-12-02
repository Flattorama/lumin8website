import { useState } from "react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, ArrowRight } from "lucide-react";
import work1 from "@/assets/images/Work-002.jpeg";
import work2 from "@/assets/images/Spring-Academy-004.webp";
import work3 from "@/assets/images/Work-004.jpeg";

const categories = ["All", "Franchise", "Marketing", "Branding", "Digital"];

const posts = [
  {
    id: 1,
    title: "5 Key Strategies for Successful Franchise Expansion",
    excerpt: "Discover the proven strategies that help franchise brands scale effectively while maintaining quality and brand consistency.",
    category: "Franchise",
    image: work1,
    date: "Nov 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Future of Digital Marketing in 2025",
    excerpt: "Explore emerging trends and technologies that will shape digital marketing strategies in the coming year.",
    category: "Digital",
    image: work2,
    date: "Nov 10, 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Building a Brand Identity That Lasts",
    excerpt: "Learn how to create a timeless brand identity that resonates with your audience and stands the test of time.",
    category: "Branding",
    image: work3,
    date: "Nov 5, 2024",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Local SEO Tips for Multi-Location Businesses",
    excerpt: "Optimize your franchise locations for local search and drive more foot traffic to each store.",
    category: "Marketing",
    image: work1,
    date: "Oct 28, 2024",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-4" data-testid="text-blog-title">
                Blog & Insights
              </h1>
              <p className="text-lg text-[#616161] max-w-2xl mx-auto" data-testid="text-blog-subtitle">
                Industry insights, marketing tips, and franchise growth strategies from our expert team.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#616161]" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 border-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-blog-search"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                    className={activeCategory === cat 
                      ? "bg-[#1D1D1D] text-white rounded-full" 
                      : "border-[#1D1D1D]/20 text-[#1D1D1D] rounded-full"
                    }
                    data-testid={`button-blog-category-${cat.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group overflow-hidden border-gray-100 hover-elevate cursor-pointer h-full" data-testid={`card-blog-post-${post.id}`}>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="text-xs bg-[#78C8BF] text-[#1D1D1D]">{post.category}</Badge>
                        <span className="text-xs text-[#616161] flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-[#1D1D1D] mb-2 group-hover:text-[#78C8BF] transition-colors line-clamp-2" data-testid={`text-blog-post-title-${post.id}`}>
                        {post.title}
                      </h2>
                      <p className="text-[#616161] text-sm line-clamp-2 mb-4" data-testid={`text-blog-post-excerpt-${post.id}`}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#616161]">{post.date}</span>
                        <span className="text-[#78C8BF] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#616161]">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        <CTA
          title="Stay Updated"
          subtitle="Subscribe to our newsletter for the latest insights and industry news."
          ctaText="Subscribe Now"
        />
      </main>
      <Footer />
    </div>
  );
}
