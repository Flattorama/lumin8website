import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/images/Lumin8-Logo-Redesign-2024_White.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  {
    label: "Franchise",
    children: [
      { href: "/franchise", label: "Franchise Development" },
      { href: "/franchise-marketing", label: "Franchise Marketing" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1D1D1D]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" data-testid="link-logo">
          <img 
            src={logo} 
            alt="Lumin8" 
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-1 text-white/80 hover:text-white hover:bg-white/10"
                    data-testid={`button-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-[#1D1D1D] border-white/10">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild className="text-white/80 hover:text-white focus:text-white focus:bg-white/10">
                      <Link
                        href={child.href}
                        data-testid={`link-nav-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.href} href={item.href!}>
                <Button
                  variant="ghost"
                  className={`text-white/80 hover:text-white hover:bg-white/10 ${
                    location === item.href ? "text-white font-medium" : ""
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden sm:block">
            <Button 
              className="bg-[#78C8BF] hover:bg-[#6bb8af] text-[#1D1D1D] font-semibold rounded-full px-6"
              data-testid="button-book-call"
            >
              Book a Discovery Call
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#1D1D1D] border-t border-white/10">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="px-4 py-2 text-sm font-medium text-white">
                    {item.label}
                  </span>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start pl-8 text-white/80 hover:text-white hover:bg-white/10"
                        onClick={() => setMobileOpen(false)}
                        data-testid={`link-mobile-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        {child.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={item.href} href={item.href!}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              )
            )}
            <Link href="/contact" className="mt-2">
              <Button 
                className="w-full bg-[#78C8BF] hover:bg-[#6bb8af] text-[#1D1D1D] font-semibold rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                Book a Discovery Call
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
