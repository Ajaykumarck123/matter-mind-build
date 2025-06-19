
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrendingIdeas from "@/components/TrendingIdeas";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      <main>
        <Hero />
        <TrendingIdeas />
        <Features />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-electric-blue to-electric-purple rounded"></div>
              <span className="text-lg font-bold text-gradient">Ideaboard</span>
            </div>
            <p className="text-muted-foreground">
              From Mind to Matter — Build Real Things That Matter
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-electric-blue transition-colors">About</a>
              <a href="#" className="hover:text-electric-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-electric-blue transition-colors">Terms</a>
              <a href="#" className="hover:text-electric-blue transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
