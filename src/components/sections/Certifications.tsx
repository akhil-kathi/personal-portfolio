import { Award, ExternalLink, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl?: string;
  verificationUrl: string;
}

// Certificate data
const certificates: Certificate[] = [
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
    title: "Solutions Architect Knowledge Badge",
    issuer: "AWS",
    date: "March, 2024",
    description: "AWS Knowledge: Architecting",
    imageUrl: "",
    verificationUrl: "https://www.credly.com/badges/7c9dc4c8-3fab-434d-8ec9-683739fb2faf/public_url"
  },
  {
    id: 3,
    title: "Generative AI Green Belt",
    issuer: "Cisco",
    date: "March, 2024",
    description: "Overview on prompt engineering, responsible AI principles and how to get your project started, and conversation design.",
    verificationUrl: "https://www.credly.com/badges/f7904bba-a50b-47e4-b4db-0aa3f1659db0"
  },
  {
    id: 4,
    title: "Generative AI Blue Belt",
    issuer: "Cisco",
    date: "April, 2024",
    description: "Overview of AI, ML, DL, Artificial Neural Networks (ANN), prompt engineering, transformer architecture, where to get data and responsibly work with data, attention mechanism.",
    imageUrl: "",
    verificationUrl: "https://www.credly.com/badges/7ce5a651-7016-46ec-952c-81b367f606ec/"
  }
];

export function Certifications() {
  return (
<section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
  <div className="max-w-4xl mx-auto">
    <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
      <Award className="h-6 sm:h-8 w-6 sm:w-8" />
      <h2 className="text-2xl sm:text-3xl font-bold">Certifications</h2>
    </div>
    <div className="space-y-4">
      {certificates.map((cert) => (
      <Card key={cert.id} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-2">
        {/* Top Row: Title & Buttons */}
        <div className="flex items-start justify-between flex-wrap gap-2">
          {/* Title and Meta Info */}
          <div>
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-muted-foreground text-sm">
              {cert.issuer} • {cert.date}
            </p>
          </div>
    
          {/* Buttons aligned to top-right */}
          <div className="flex gap-2">
            {cert.imageUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.open(cert.imageUrl, '_blank')}
              >
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">View Certificate</span>
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => window.open(cert.verificationUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">Verify</span>
            </Button>
          </div>
        </div>
    
        {/* Description */}
        <p className="text-sm">{cert.description}</p>
      </div>
    </Card>
    
    
      
      ))}
    </div>
  </div>
</section>

  );
}