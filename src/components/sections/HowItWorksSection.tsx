import { ArrowRight } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      id: 'step-1',
      number: '01',
      title: 'Create Your Slideshow',
      description: 'Upload images and build your slideshow using our drag & drop editor. Add transitions, text, and effects to make it professional.',
      color: 'from-brand-purple to-brand-pink'
    },
    {
      id: 'step-2',
      number: '02',
      title: 'Set Up Ad Spaces',
      description: 'Define advertisement spaces within your slideshow. Choose size, duration, and placement for maximum visibility.',
      color: 'from-brand-pink to-brand-green'
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Publish & Share',
      description: 'Publish your slideshow and get a unique link to share. Embed it on your website or display it on screens at your venue.',
      color: 'from-brand-green to-brand-purple'
    },
    {
      id: 'step-4',
      number: '04',
      title: 'Sell Ad Spaces',
      description: 'Invite advertisers to purchase ad spots in your slideshow. They can upload their own creatives directly.',
      color: 'from-brand-purple to-brand-pink'
    },
    {
      id: 'step-5',
      number: '05',
      title: 'Receive Payments',
      description: 'Get paid automatically when advertisers book your ad spaces. Withdraw earnings anytime to your bank account.',
      color: 'from-brand-pink to-brand-green'
    }
  ];

  return (
    <section className="py-24 relative bg-[#0d0d13] dark:bg-[#0d0d13]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SlideShowBoss is the <span className="gradient-text">shortcut</span> to monetizing your content
          </h2>
          <p className="text-xl text-gray-400">
            With SlideShowBoss, you can create beautiful slideshows and earn money by selling advertisement spaces to local businesses.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-12 top-10 bottom-10 w-1 bg-gradient-to-b from-brand-purple via-brand-pink to-brand-green hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col md:flex-row items-start gap-6">
                <div className={`flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xl shadow-lg`}>
                  {step.number}
                </div>

                <div className="pt-3">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>

                  {index < steps.length - 1 && (
                    <div className="mt-4 flex items-center text-gray-500 md:hidden">
                      <ArrowRight size={16} />
                      <span className="ml-2 text-sm">Next Step</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
