import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { CTASection } from '@/components/sections/CTASection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
}
