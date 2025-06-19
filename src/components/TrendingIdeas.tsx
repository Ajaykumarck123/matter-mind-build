
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, MessageCircle, Eye } from "lucide-react";

interface IdeaCard {
  id: number;
  title: string;
  description: string;
  image: string;
  stage: "Just a Thought" | "Validated" | "Building" | "Testing";
  tags: string[];
  upvotes: number;
  comments: number;
  views: number;
}

const mockIdeas: IdeaCard[] = [
  {
    id: 1,
    title: "Smart Water Bottle with Hydration Tracking",
    description: "IoT-enabled bottle that tracks your daily water intake and sends reminders",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
    stage: "Building",
    tags: ["IoT", "Health Tech", "Lifestyle"],
    upvotes: 247,
    comments: 43,
    views: 1200
  },
  {
    id: 2,
    title: "Modular Phone Case System",
    description: "Customizable phone protection with swappable components for different activities",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    stage: "Validated",
    tags: ["Mobile Tech", "Design", "Modularity"],
    upvotes: 189,
    comments: 32,
    views: 890
  },
  {
    id: 3,
    title: "Eco-Friendly Packaging Alternative",
    description: "Biodegradable packaging made from mushroom mycelium for e-commerce",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    stage: "Just a Thought",
    tags: ["Sustainability", "Packaging", "Bio-materials"],
    upvotes: 156,
    comments: 28,
    views: 670
  },
  {
    id: 4,
    title: "AR Workout Mirror",
    description: "Smart mirror with AR personal trainer for home fitness routines",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    stage: "Testing",
    tags: ["AR/VR", "Fitness", "Hardware"],
    upvotes: 312,
    comments: 67,
    views: 1500
  },
  {
    id: 5,
    title: "Solar-Powered Study Lamp",
    description: "Portable LED lamp with solar charging for students in developing regions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    stage: "Building",
    tags: ["Solar Tech", "Education", "Social Impact"],
    upvotes: 203,
    comments: 41,
    views: 920
  }
];

const getStageColor = (stage: string) => {
  switch (stage) {
    case "Just a Thought":
      return "bg-gray-100 text-gray-800 border-gray-200";
    case "Validated":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Building":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Testing":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const TrendingIdeas = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trending <span className="text-gradient">Ideas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what the community is building right now
          </p>
        </div>
        
        {/* Horizontal scrolling container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 w-max animate-slide-in-right">
            {mockIdeas.map((idea, index) => (
              <Card 
                key={idea.id} 
                className="glass-card hover-glow w-80 flex-shrink-0 p-0 overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={idea.image} 
                    alt={idea.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStageColor(idea.stage)} font-medium`}>
                      {idea.stage}
                    </Badge>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold line-clamp-2 group-hover:text-electric-blue transition-colors">
                    {idea.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {idea.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs bg-white/20 hover:bg-electric-blue/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <ArrowUp className="w-4 h-4" />
                        <span>{idea.upvotes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{idea.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{idea.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* View all button */}
        <div className="text-center mt-12">
          <button className="btn-electric px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform">
            View All Ideas
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingIdeas;
