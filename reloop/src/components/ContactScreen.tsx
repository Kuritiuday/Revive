import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Mail, Phone, Linkedin, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContactScreenProps {
  onBack: () => void;
}

const team = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Passionate about sustainability and creating a circular economy. 10+ years in eco-business.',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MDUxOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'sarah@reloop.eco',
    phone: '+1 (555) 123-4567'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Product Designer',
    bio: 'Specializing in eco-friendly product design and sustainable materials innovation.',
    image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjA1NjM5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'marcus@reloop.eco',
    phone: '+1 (555) 234-5678'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Sustainability Director',
    bio: 'Expert in environmental science, ensuring all our products meet the highest eco-standards.',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MDUxOTcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'emma@reloop.eco',
    phone: '+1 (555) 345-6789'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Community Manager',
    bio: 'Building a community of eco-conscious consumers making a difference, one choice at a time.',
    image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjA1NjM5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'david@reloop.eco',
    phone: '+1 (555) 456-7890'
  }
];

export function ContactScreen({ onBack }: ContactScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="hover:bg-green-50"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              <h1 className="text-green-600 text-2xl">Meet the Makers</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="mb-3">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're a passionate group of individuals committed to making sustainable living accessible and affordable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{member.name}</h3>
                    <p className="text-green-600 mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-green-600" />
                        <a href={`mailto:${member.email}`} className="hover:text-green-600">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-green-600" />
                        <a href={`tel:${member.phone}`} className="hover:text-green-600">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-green-600 to-emerald-700 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-white mb-3">Have Questions?</h3>
              <p className="mb-6 text-white/90">
                We'd love to hear from you! Reach out to learn more about our products or sustainability practices.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  onClick={() => window.location.href = 'mailto:hello@reloop.eco'}
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                <Button
                  onClick={() => window.open('https://wa.me/', '_blank')}
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
