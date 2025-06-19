
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Plus, User } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg"></div>
            <span className="text-xl font-bold text-gradient">Ideaboard</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-electric-blue transition-colors">
              Explore
            </a>
            <a href="#" className="text-sm font-medium hover:text-electric-blue transition-colors">
              Build Library
            </a>
            <a href="#" className="text-sm font-medium hover:text-electric-blue transition-colors">
              Maker Map
            </a>
            <a href="#" className="text-sm font-medium hover:text-electric-blue transition-colors">
              Community
            </a>
          </div>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search ideas..."
                className="pl-10 pr-4 py-2 glass-card border border-white/20 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
              />
            </div>
            
            <Button size="sm" className="btn-electric rounded-full">
              <Plus className="w-4 h-4 mr-1" />
              Post Idea
            </Button>
            
            <Button variant="ghost" size="sm" className="rounded-full">
              <User className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full glass-card hover-glow"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 glass-card rounded-2xl p-4 animate-fade-in">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search ideas..."
                className="pl-10 pr-4 py-2 glass-card border border-white/20 rounded-full text-sm w-full focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
              />
            </div>
            
            <div className="space-y-2">
              <a href="#" className="block py-2 text-sm font-medium hover:text-electric-blue transition-colors">
                Explore
              </a>
              <a href="#" className="block py-2 text-sm font-medium hover:text-electric-blue transition-colors">
                Build Library
              </a>
              <a href="#" className="block py-2 text-sm font-medium hover:text-electric-blue transition-colors">
                Maker Map
              </a>
              <a href="#" className="block py-2 text-sm font-medium hover:text-electric-blue transition-colors">
                Community
              </a>
            </div>
            
            <div className="flex space-x-2 pt-2">
              <Button className="btn-electric rounded-full flex-1">
                <Plus className="w-4 h-4 mr-1" />
                Post Idea
              </Button>
              <Button variant="outline" className="rounded-full glass-card border-white/20">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
