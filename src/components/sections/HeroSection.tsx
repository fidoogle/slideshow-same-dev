import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden py-24 md:py-32 bg-[#0d0d13] dark:bg-[#0d0d13]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-brand-pink/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating slideshows is
            <span className="gradient-text"> better</span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            with <span className="gradient-text-green">monetization</span>
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            SlideShowBoss enables you to create beautiful slideshows and
            <span className="text-white"> sell advertisement space </span>
            directly to buyers with our simple management tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gradient-bg px-8 py-6 text-lg h-auto" asChild>
              <Link to="/signup">Create Free Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg h-auto" asChild>
              <Link to="/demo">See Demo</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span>Free Basic Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              <span>Custom Branding</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-500" />
              <span>Payment Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-pink-500" />
              <span>Analytics Included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
