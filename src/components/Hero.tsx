
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IdeaSubmissionModal from "./IdeaSubmissionModal";

const Hero = () => {
  const [shareOpen, setShareOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-electric-blue/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-electric-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-electric-green/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            <span className="block">From Mind to</span>
            <span className="text-gradient block">Matter</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Build Real Things That Matter
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-80">
            The digital launchpad where Gen Z creators discuss, develop, and build tangible product ideas through collaboration and innovation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="btn-electric text-white px-8 py-4 text-lg font-semibold rounded-full group"
              onClick={() => setShareOpen(true)}
            >
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Share Your Idea
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full glass-card hover-glow group border-white/20"
              onClick={() => navigate('/explore')}
            >
              Explore Ideas
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          
          {/* Workspace Scene */}
          <div className="mt-16 relative">
            <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Creator avatars and activities */}
                <div className="text-center space-y-3 hover-glow rounded-2xl p-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-electric-purple rounded-full mx-auto animate-float"></div>
                  <p className="text-sm font-medium">3D Modeling</p>
                </div>
                
                <div className="text-center space-y-3 hover-glow rounded-2xl p-4" style={{ animationDelay: '0.5s' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-purple to-electric-pink rounded-full mx-auto animate-float"></div>
                  <p className="text-sm font-medium">Prototyping</p>
                </div>
                
                <div className="text-center space-y-3 hover-glow rounded-2xl p-4" style={{ animationDelay: '1s' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-green to-electric-blue rounded-full mx-auto animate-float"></div>
                  <p className="text-sm font-medium">AR Testing</p>
                </div>
                
                <div className="text-center space-y-3 hover-glow rounded-2xl p-4" style={{ animationDelay: '1.5s' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-pink to-electric-green rounded-full mx-auto animate-float"></div>
                  <p className="text-sm font-medium">Manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IdeaSubmissionModal open={shareOpen} onOpenChange={setShareOpen} />
    </section>
  );
};

export default Hero;
