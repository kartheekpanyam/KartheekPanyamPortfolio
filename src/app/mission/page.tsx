import Scene3D from '@/components/3d/Scene3D';
import { Target, Globe, Zap, Users, Heart, Rocket } from 'lucide-react';

export const metadata = {
  title: 'Mission | Portfolio',
  description: 'Making technology accessible to everyone, everywhere.',
};

export default function MissionPage() {
  return (
    <>
      <Scene3D />
      <main className="relative min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <Target size={16} />
              <span>Our Vision for the Future</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text">
              The Mission
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              To democratize technology and ensure that every person, regardless of their location or background,
              has access to the tools that can change their lives.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-900/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Making Technology Accessible to Everyone
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Technology should be a bridge, not a barrier. Growing up, we experienced firsthand the struggles
              of limited access to cutting-edge tools and resources. These challenges should not define anyone&apos;s
              future.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Our primary goal is to ensure that people in third-world countries and underserved communities
              have the same opportunities to innovate, create, and transform their lives through technology.
              No one should face the obstacles we encountered on our journey.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              This is more than a career objective—it&apos;s a commitment to creating a more equitable technological
              future where talent and ambition, not geography or economic status, determine success.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Globe,
                title: 'Global Accessibility',
                description: 'Breaking down geographical and economic barriers to technology access.',
              },
              {
                icon: Zap,
                title: 'Innovation for All',
                description: 'Empowering everyone with tools to create and innovate.',
              },
              {
                icon: Users,
                title: 'Community Building',
                description: 'Creating supportive networks for aspiring developers worldwide.',
              },
              {
                icon: Heart,
                title: 'Empathy-Driven',
                description: 'Understanding struggles and building solutions that matter.',
              },
              {
                icon: Rocket,
                title: 'Future-Focused',
                description: 'Investing in technologies that will define tomorrow.',
              },
              {
                icon: Target,
                title: 'Impact-Oriented',
                description: 'Measuring success by lives changed, not just code written.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            ))}
          </div>

          {/* The Journey */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Why This Matters</h2>
            <div className="space-y-4 text-lg text-white/80">
              <p>
                Every line of code we write, every solution we build, and every person we mentor brings us
                closer to a world where opportunity is universal.
              </p>
              <p>
                We believe in a future where a brilliant mind in a remote village has the same access to
                AI, cloud computing, and cutting-edge frameworks as someone in Silicon Valley.
              </p>
              <p>
                This portfolio isn&apos;t just a showcase of skills—it&apos;s a declaration of intent. A promise to
                use technology as a force for equality and empowerment.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
