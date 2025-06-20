import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
}

export const FeatureModal = ({ isOpen, onClose, title, content }: FeatureModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="container mx-auto px-6 py-8 h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8 animate-scale-in relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              {content}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" onClick={onClose} className="px-6 py-2 rounded-full">
                Close
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;
