import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export interface NewIdea {
  title: string;
  description: string;
  category: string;
  tags: string[];
  file?: File | null;
}

export async function uploadFile(file: File): Promise<string> {
  const filePath = `ideas/${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from("idea-files")
    .upload(filePath, file);
  if (error) throw error;
  return data.path;
}

export async function createIdea(form: NewIdea): Promise<Tables<"ideas">> {
  let image_url: string | null = null;
  if (form.file) {
    image_url = await uploadFile(form.file);
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("ideas")
    .insert({
      title: form.title,
      description: form.description,
      category: form.category,
      tags: form.tags,
      image_url,
      user_id: user?.id ?? "",
    })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function fetchIdeas() {
  const { data, error } = await supabase
    .from("ideas")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data as Tables<"ideas">[];
}

export async function fetchIdea(id: string) {
  const { data, error } = await supabase
    .from("ideas")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as Tables<"ideas">;
}
