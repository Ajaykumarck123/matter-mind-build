
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";
import { UserMenu } from "@/components/auth/UserMenu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-electric-purple rounded"></div>
              <span className="text-xl font-bold text-gradient">Ideaboard</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#ideas" className="text-gray-700 hover:text-electric-blue transition-colors">
                Explore Ideas
              </a>
              <a href="#trending" className="text-gray-700 hover:text-electric-blue transition-colors">
                Trending
              </a>
              <a href="#categories" className="text-gray-700 hover:text-electric-blue transition-colors">
                Categories
              </a>
              
              {!loading && (
                user ? (
                  <div className="flex items-center space-x-4">
                    <Button className="btn-electric">
                      <Plus className="w-4 h-4 mr-2" />
                      Share Idea
                    </Button>
                    <UserMenu />
                  </div>
                ) : (
                  <Button 
                    onClick={() => setIsAuthModalOpen(true)}
                    className="btn-electric"
                  >
                    Get Started
                  </Button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#ideas" className="text-gray-700 hover:text-electric-blue transition-colors">
                  Explore Ideas
                </a>
                <a href="#trending" className="text-gray-700 hover:text-electric-blue transition-colors">
                  Trending
                </a>
                <a href="#categories" className="text-gray-700 hover:text-electric-blue transition-colors">
                  Categories
                </a>
                
                {!loading && (
                  user ? (
                    <div className="flex flex-col space-y-3">
                      <Button className="btn-electric">
                        <Plus className="w-4 h-4 mr-2" />
                        Share Idea
                      </Button>
                      <div className="flex items-center space-x-2">
                        <UserMenu />
                        <span className="text-sm text-gray-600">
                          {user.user_metadata?.full_name || user.email}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => setIsAuthModalOpen(true)}
                      className="btn-electric self-start"
                    >
                      Get Started
                    </Button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navigation;
