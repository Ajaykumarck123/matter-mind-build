import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { createIdea } from "@/api/ideas";
import { toast } from "@/components/ui/sonner";

interface IdeaSubmissionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormValues {
  title: string;
  description: string;
  category: string;
  tags: string;
}

export default function IdeaSubmissionModal({ open, onOpenChange }: IdeaSubmissionModalProps) {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    try {
      const idea = await createIdea({
        title: values.title,
        description: values.description,
        category: values.category,
        tags: values.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        file,
      });
      toast("Idea submitted!");
      onOpenChange(false);
      navigate(`/idea/${idea.id}`);
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? err.message : "Unknown error";
      toast(`Failed to submit: ${message}`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Share Your Idea</DialogTitle>
          <DialogDescription>
            Tell the community about what you want to build.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Idea Title</label>
            <Input {...register("title", { required: true })} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Short Description</label>
            <Textarea rows={3} {...register("description", { required: true })} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Select onValueChange={(v) => setValue("category", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Gadgets">Gadgets</SelectItem>
                <SelectItem value="Packaging">Packaging</SelectItem>
                <SelectItem value="Tools">Tools</SelectItem>
                <SelectItem value="Sustainability">Sustainability</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" {...register("category", { required: true })} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">File Upload (optional)</label>
            <Input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Tags (comma separated)</label>
            <Input {...register("tags")}
              placeholder="e.g. IoT, 3D Printing" />
          </div>
          <DialogFooter>
            <Button type="submit" className="btn-electric text-white">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
