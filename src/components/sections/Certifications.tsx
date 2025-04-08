import { Award, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CertificateViewer } from '@/components/ui/certificate-viewer';
import { useState } from 'react';

// Certificate data
const certificates = [
  {
    id: 1,
    title: "Applied Machine Learning",
    issuer: "Applied AI Course",
    date: "2022",
    description: "Professional level hands on certification on Machine Learning",
    imageUrl: "https://www.appliedaicourse.com/certificate/ad330bb788",
    verificationUrl: "https://www.appliedaicourse.com/certificate/ad330bb788"
  },
  {
    id: 2,
    title: "AWS Solutions Architect Knowledge Badge",
    issuer: "AWS",
    date: "March 2024",
    description: "AWS Knowledge: Architecting",
    imageUrl: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200&auto=format&fit=crop&q=80",
    verificationUrl: "https://www.credly.com/badges/7c9dc4c8-3fab-434d-8ec9-683739fb2faf/public_url"
  }
];

export function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <Award className="h-6 sm:h-8 w-6 sm:w-8" />
          <h2 className="text-2xl sm:text-3xl font-bold">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {certificates.map((cert) => (
            <Card key={cert.id} className="p-4 sm:p-6 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedCertificate(cert)}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base">{cert.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Certificate Viewer */}
      {selectedCertificate && (
        <CertificateViewer
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          certificate={selectedCertificate}
        />
      )}
    </section>
  );
}