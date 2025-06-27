import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import type { Tables } from "@/integrations/supabase/types";

interface Props {
  idea: Tables<"ideas">;
}

export default function IdeaCard({ idea }: Props) {
  return (
    <Card className="glass-card hover-glow overflow-hidden group">
      <Link to={`/idea/${idea.id}`} className="block">
        {idea.image_url && (
          <div className="h-40 overflow-hidden">
            <img
              src={idea.image_url}
              alt={idea.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-4 space-y-2">
          <h3 className="font-bold text-lg line-clamp-2">{idea.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {idea.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {idea.tags?.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}
