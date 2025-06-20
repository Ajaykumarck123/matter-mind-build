
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, X, CheckCircle, XCircle, Users, Wrench, Pencil, Rocket, Star } from "lucide-react";

const tangibleExamples = [
  {
    name: "Modular Desk Organizers",
    description: "3D-printed kits for messy study tables.",
    icon: "📦"
  },
  {
    name: "Ergonomic Bike Handle Add-ons",
    description: "Designed by real cyclists.",
    icon: "🚴"
  },
  {
    name: "Eco-Friendly Shampoo Dispenser",
    description: "Refill-based, zero-plastic model.",
    icon: "🌱"
  },
  {
    name: "Urban Planting Pots",
    description: "Designed for compact city balconies.",
    icon: "🪴"
  },
  {
    name: "Magnetic Cable Holders",
    description: "Simple desk hack that went viral.",
    icon: "🧲"
  },
  {
    name: "Sustainable Gift Packaging",
    description: "For handmade/artisan gifting brands.",
    icon: "🎁"
  }
];

const personas = [
  {
    emoji: "👩‍🔧",
    title: "Makers",
    description: "You tinker, test, break, and rebuild. You're our people."
  },
  {
    emoji: "🧑‍🎨",
    title: "Industrial Designers",
    description: "Your sketches become real-world aesthetics."
  },
  {
    emoji: "🧑‍🏫",
    title: "Students & Hobbyists",
    description: "Great ideas often start in garages or dorms."
  },
  {
    emoji: "🧑‍💼",
    title: "Entrepreneurs",
    description: "Have a product idea in mind? Let's bring it to market."
  }
];

const buildPrinciples = [
  {
    title: "Build > Brainstorm",
    description: "No long debates. Quick mockups speak louder.",
    icon: Wrench
  },
  {
    title: "Fail Fast, Fix Faster",
    description: "Rapid iteration is your best feedback loop.",
    icon: Rocket
  },
  {
    title: "Community-Powered Testing",
    description: "Share. Get feedback. Improve.",
    icon: Users
  },
  {
    title: "Document Everything",
    description: "Someone else might build on your idea.",
    icon: Pencil
  }
];

const journeySteps = [
  { step: "Submit Your Idea Brief", icon: "✏️" },
  { step: "Get Matched with Collaborators", icon: "🧩" },
  { step: "Prototype Using Our Build Library", icon: "🧪" },
  { step: "Use Execution Dashboard for Milestones", icon: "🧭" },
  { step: "Test, Share, Improve", icon: "🛠️" },
  { step: "Prepare for Launch / Crowdfunding", icon: "🛍️" }
];

interface TangibleIdeasExpanderProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TangibleIdeasExpander = ({ isOpen, onClose }: TangibleIdeasExpanderProps) => {
  const [expandedCriteria, setExpandedCriteria] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="container mx-auto px-6 py-8 h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8 animate-scale-in">
            {/* Header with close button */}
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric-blue to-electric-purple p-3">
                <Lightbulb className="w-full h-full text-white" />
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Section 1: Title and Hero Statement */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why We Focus Only on 
                <span className="text-gradient block">Tangible Ideas 🚀</span>
              </h1>
              <div className="glass-card p-6 rounded-2xl max-w-3xl mx-auto">
                <p className="text-xl text-muted-foreground">
                  "We believe the world doesn't need just more ideas. It needs products you can hold, build, test, and ship. We're here to make that happen."
                </p>
              </div>
            </div>

            {/* Section 2: Philosophy */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-3xl font-bold mb-6 text-center">From Thought to Thing</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  At the core of MatterMindBuild is a simple belief: ideas are only powerful when they can be made real. 
                  That's why we focus exclusively on tangible, physical products — tools, devices, packaging solutions, 
                  assistive tech, modular furniture, hobby gear, etc.
                </p>
                <p>
                  If it can be prototyped, built, tested, held in your hand, and ultimately sold or shared in the real world — it's our domain. 
                  In an age where digital startups dominate the landscape, we believe the physical product space still holds massive potential — 
                  especially when empowered by modern prototyping, maker tools, and open manufacturing.
                </p>
              </div>
            </div>

            {/* Section 3: Tangible Criteria */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-8 text-center">What Makes an Idea "Tangible"?</h2>
              <div className="grid gap-4">
                {[
                  "Can it be 3D printed?",
                  "Can it be tested for physical usability?",
                  "Can it be built using real materials?",
                  "Can it be used, held, or interacted with by users?",
                  "Can it eventually become a market-ready product?"
                ].map((criteria, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 glass-card rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => setExpandedCriteria(expandedCriteria === index ? null : index)}
                  >
                    <CheckCircle className="w-6 h-6 text-electric-green" />
                    <span className="text-lg">{criteria}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 p-4 glass-card rounded-xl border-red-500/20">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <span className="text-lg">If it's just an app, a service, or a digital-only tool — it doesn't fit here.</span>
                </div>
              </div>
            </div>

            {/* Section 4: Examples */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-3xl font-bold mb-8 text-center">Tangible Idea Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tangibleExamples.map((example, index) => (
                  <Card key={index} className="glass-card p-6 hover-glow group transition-all duration-300">
                    <div className="text-center space-y-4">
                      <div className="text-4xl">{example.icon}</div>
                      <h3 className="font-bold text-lg group-hover:text-electric-blue transition-colors">
                        {example.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{example.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section 5: Personas */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-3xl font-bold mb-8 text-center">Who This Is For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personas.map((persona, index) => (
                  <Card key={index} className="glass-card p-6 hover-glow transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{persona.emoji}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{persona.title}</h3>
                        <p className="text-muted-foreground">{persona.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section 6: Build Principles */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-3xl font-bold mb-8 text-center">Our Build Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {buildPrinciples.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <Card key={index} className="glass-card p-6 hover-glow transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-purple to-electric-pink p-3">
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{principle.title}</h3>
                          <p className="text-muted-foreground">{principle.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Section 7: Testimonial */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Card className="glass-card p-8 max-w-3xl mx-auto border-l-4 border-electric-blue">
                <div className="text-center">
                  <Star className="w-8 h-8 text-electric-blue mx-auto mb-4" />
                  <blockquote className="text-xl italic mb-4">
                    "I came with just a sketch and left with a working prototype I could pitch. 
                    This platform is like a launchpad for physical dreamers."
                  </blockquote>
                  <cite className="text-muted-foreground">
                    — Aakash R., Product Design Student, Pune
                  </cite>
                </div>
              </Card>
            </div>

            {/* Section 8: Journey Overview */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <h2 className="text-3xl font-bold mb-8 text-center">From Idea to Execution — Journey Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {journeySteps.map((step, index) => (
                  <Card key={index} className="glass-card p-6 hover-glow transition-all duration-300 cursor-pointer">
                    <div className="text-center space-y-3">
                      <div className="text-3xl">{step.icon}</div>
                      <p className="font-semibold">{step.step}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section 9: CTA */}
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <h2 className="text-3xl font-bold mb-6">
                Got a product idea brewing? 
                <span className="text-gradient block">Let's get it built.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-electric px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform">
                  🧠 Submit Idea Brief
                </Button>
                <Button variant="outline" className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-electric-blue/30 hover:border-electric-blue hover:bg-electric-blue/10 transition-all">
                  🛠️ Explore the Build Library
                </Button>
                <Button variant="outline" className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-electric-purple/30 hover:border-electric-purple hover:bg-electric-purple/10 transition-all">
                  🔎 See What Others Are Building
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
