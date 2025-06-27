import Navigation from "@/components/Navigation";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchIdea } from "@/api/ideas";

const IdeaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: idea, isLoading } = useQuery({
    queryKey: ["idea", id],
    queryFn: () => fetchIdea(id || ""),
    enabled: !!id,
  });

  if (isLoading) {
    return <p className="p-8">Loading...</p>;
  }

  if (!idea) {
    return <p className="p-8">Idea not found</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      <main className="container mx-auto px-6 py-12 space-y-4">
        <h1 className="text-3xl font-bold">{idea.title}</h1>
        {idea.image_url && (
          <img src={idea.image_url} alt={idea.title} className="rounded-lg" />
        )}
        <p>{idea.description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          {idea.tags?.map((t) => (
            <span key={t} className="bg-muted px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default IdeaDetail;
