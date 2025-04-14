import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-24 relative bg-[#0d0d13] dark:bg-[#0d0d13]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brand-pink/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-800 relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-pink/5" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get started with SlideShowBoss today
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Create your first slideshow for free and start monetizing your content in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg px-8 py-6 text-lg h-auto" asChild>
                <Link to="/signup">Start For Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg h-auto" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
