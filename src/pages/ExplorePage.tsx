import Navigation from "@/components/Navigation";
import IdeaCard from "@/components/IdeaCard";
import { useQuery } from "@tanstack/react-query";
import { fetchIdeas } from "@/api/ideas";

const ExplorePage = () => {
  const { data: ideas, isLoading } = useQuery({
    queryKey: ["ideas"],
    queryFn: fetchIdeas,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      <main className="container mx-auto px-6 py-12 space-y-8">
        <h1 className="text-3xl font-bold">Explore Ideas</h1>
        {isLoading && <p>Loading...</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ideas?.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;
