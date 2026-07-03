import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function VideoModal({ isOpen, setIsOpen }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none">
        <DialogTitle className="sr-only">Watch Our Story</DialogTitle>
        <DialogDescription className="sr-only">
          Video about the Translational Futures Foundation mission and impact.
        </DialogDescription>
        <div className="relative w-full aspect-video">
          {isOpen && (
            <iframe
              className="w-full h-full rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/_nWMP68DqHE?si=o3RBiJH747zRvicH"
              title="Watch Our Story — Translational Futures Foundation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
