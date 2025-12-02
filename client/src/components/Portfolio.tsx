import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import work1 from "@/assets/images/Work-002.jpeg";
import work2 from "@/assets/images/Spring-Academy-004.webp";
import work3 from "@/assets/images/Work-004.jpeg";
import rect1 from "@/assets/images/Rectangle_19.jpeg";

const categories = ["All", "Branding", "Digital", "Franchise", "Web"];

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete brand refresh with new visual identity and guidelines",
    image: work1,
    featured: true,
  },
  {
    id: 2,
    title: "Spring Academy",
    category: "Digital",
    description: "Digital marketing campaign driving enrollment growth",
    image: work2,
    featured: true,
  },
  {
    id: 3,
    title: "Web Development Project",
    category: "Web",
    description: "Custom website development with modern design",
    image: work3,
    featured: false,
  },
  {
    id: 4,
    title: "Franchise Marketing",
    category: "Franchise",
    description: "Multi-location marketing strategy and execution",
    image: rect1,
    featured: false,
  },
];

interface PortfolioProps {
  showFilters?: boolean;
  limit?: number;
  showViewAll?: boolean;
}

export function Portfolio({ showFilters = true, limit, showViewAll = true }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .slice(0, limit);

  return (
    <section className="py-20 lg:py-32 bg-white" data-testid="section-portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h6 className="text-sm font-medium text-[#616161] uppercase tracking-wider mb-4">
              OUR WORK
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1D] mb-4" data-testid="text-portfolio-title">
              Featured Projects
            </h2>
            <p className="text-lg text-[#616161] max-w-xl" data-testid="text-portfolio-subtitle">
              See how we help brands achieve their goals through creative solutions.
            </p>
          </div>
          {showViewAll && (
            <Link href="/portfolio">
              <Button 
                variant="outline" 
                className="gap-2 border-[#1D1D1D] text-[#1D1D1D] hover:bg-[#1D1D1D] hover:text-white rounded-full px-6" 
                data-testid="link-view-all-work"
              >
                View All Work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat 
                  ? "bg-[#1D1D1D] text-white rounded-full" 
                  : "border-[#1D1D1D]/20 text-[#1D1D1D] rounded-full hover:bg-[#1D1D1D]/5"
                }
                data-testid={`button-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.id}`}>
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge variant="secondary" className="mb-3 bg-[#78C8BF] text-[#1D1D1D] border-0 font-medium">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-1" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3" data-testid={`text-project-desc-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
