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
  if (error) {
    console.error("File upload failed", error);
    throw new Error(error.message);
  }
  return data.path;
}

export async function createIdea(form: NewIdea): Promise<Tables<"ideas">> {
  const { title, description, category, tags, file } = form;

  if (!title || !description || !category) {
    throw new Error("Missing required fields");
  }

  try {
    let image_url: string | null = null;
    if (file) {
      image_url = await uploadFile(file);
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const { data, error } = await supabase
      .from("ideas")
      .insert({
        title,
        description,
        category,
        tags,
        image_url,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating idea", error);
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error("createIdea failed", err);
    throw err;
  }
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
