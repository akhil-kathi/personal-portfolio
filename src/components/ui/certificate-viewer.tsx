import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CertificateViewerProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    imageUrl: string;
    verificationUrl: string;
  };
}

export function CertificateViewer({ isOpen, onClose, certificate }: CertificateViewerProps) {
  useEffect(() => {
    // Prevent right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Prevent keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'p' || e.key === 's' || e.key === 'c')) || // Prevent print, save, copy
        e.key === 'PrintScreen' ||
        (e.metaKey && (e.key === 'p' || e.key === 's' || e.key === 'c'))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{certificate.title}</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <div 
            className="select-none pointer-events-none"
            style={{
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              userSelect: 'none',
            }}
          >
            <img
              src={certificate.imageUrl}
              alt={certificate.title}
              className="w-full rounded-lg"
              style={{
                WebkitTouchCallout: 'none',
              }}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <a
            href={certificate.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-primary hover:underline"
          >
            Verify Certificate Authenticity
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}