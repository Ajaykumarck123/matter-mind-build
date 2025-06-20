
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Map, BookOpen, Trophy, Zap } from "lucide-react";
import { TangibleIdeasExpander } from "./TangibleIdeasExpander";

const features = [
  {
    icon: Lightbulb,
    title: "Tangible Ideas Only",
    description: "Focus on physical products that can be built, tested, and brought to market - from gadgets to sustainable packaging.",
    gradient: "from-electric-blue to-electric-purple",
    expandable: true
  },
  {
    icon: Users,
    title: "Smart Collaboration",
    description: "AI-powered matching system connects you with makers, designers, and builders who complement your skills.",
    gradient: "from-electric-purple to-electric-pink"
  },
  {
    icon: BookOpen,
    title: "Free Build Library",
    description: "Access step-by-step guides, 3D models, vendor lists, and manufacturing resources crowdsourced by the community.",
    gradient: "from-electric-green to-electric-blue"
  },
  {
    icon: Map,
    title: "Local Maker Map",
    description: "Find nearby maker spaces, 3D printing hubs, suppliers, and mentors to bring your ideas to life offline.",
    gradient: "from-electric-pink to-electric-green"
  },
  {
    icon: Zap,
    title: "Execution Dashboard",
    description: "Track your progress from prototype to product with milestones, testing feedback, and collaboration tools.",
    gradient: "from-electric-blue to-electric-green"
  },
  {
    icon: Trophy,
    title: "Gamified Community",
    description: "Earn badges, build reputation, and showcase your expertise while helping others bring their ideas to life.",
    gradient: "from-electric-purple to-electric-blue"
  }
];

const Features = () => {
  const [expanderOpen, setExpanderOpen] = useState(false);

  const handleFeatureClick = (feature: typeof features[0]) => {
    if (feature.expandable) {
      setExpanderOpen(true);
    }
  };

  return (
    <section className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-electric-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="text-gradient block">Build Real Things</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From idea validation to manufacturing connections, Ideaboard provides the tools and community to turn your concepts into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`glass-card p-8 hover-glow group transition-all duration-300 animate-fade-in ${
                  feature.expandable ? 'cursor-pointer' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleFeatureClick(feature)}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-electric-blue transition-colors">
                      {feature.title}
                      {feature.expandable && (
                        <span className="ml-2 text-sm text-electric-blue opacity-70">
                          Click to explore →
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Building?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of creators turning ideas into reality.
            </p>
            <button className="btn-electric px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform">
              Join the Community
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Modal */}
      <TangibleIdeasExpander 
        isOpen={expanderOpen} 
        onClose={() => setExpanderOpen(false)} 
      />
    </section>
  );
};

export default Features;
