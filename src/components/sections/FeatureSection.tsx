import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Image,
  LayoutPanelTop,
  DollarSign,
  BarChart4,
  PaintBucket,
  Upload
} from 'lucide-react';

export function FeatureSection() {
  const features = [
    {
      id: 'drag-drop',
      icon: <LayoutPanelTop className="h-10 w-10 text-brand-purple" />,
      title: 'Drag & Drop Editor',
      description: 'Create professional slideshows with our intuitive drag and drop editor. No design skills needed.'
    },
    {
      id: 'image-upload',
      icon: <Upload className="h-10 w-10 text-brand-purple" />,
      title: 'Easy Image Upload',
      description: 'Upload and manage your images with a simple interface. Support for all popular image formats.'
    },
    {
      id: 'branding',
      icon: <PaintBucket className="h-10 w-10 text-brand-pink" />,
      title: 'Custom Branding',
      description: 'Add your logo, customize colors, and make the slideshow match your brand identity.'
    },
    {
      id: 'ad-space',
      icon: <DollarSign className="h-10 w-10 text-brand-pink" />,
      title: 'Ad Space Management',
      description: 'Sell ad space on your slideshows and manage your clients all in one place.'
    },
    {
      id: 'gallery',
      icon: <Image className="h-10 w-10 text-brand-green" />,
      title: 'Gallery Management',
      description: 'Organize, tag, and categorize your images for efficient slideshow creation.'
    },
    {
      id: 'analytics',
      icon: <BarChart4 className="h-10 w-10 text-brand-green" />,
      title: 'Analytics Dashboard',
      description: 'Track views, engagement, and revenue with our comprehensive analytics dashboard.'
    }
  ];

  return (
    <section className="py-24 relative bg-[#0d0d13] dark:bg-[#0d0d13]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Take a look at the <span className="gradient-text">"magic"</span> that SlideShowBoss delivers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Create beautiful slideshows, sell ad spaces, and manage everything from one intuitive dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="bg-gray-900 border-gray-800 hover:shadow-md hover:shadow-brand-purple/5 transition-all dark:bg-gray-900">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
