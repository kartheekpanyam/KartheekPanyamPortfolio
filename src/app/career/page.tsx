import Scene3D from '@/components/3d/Scene3D';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Career Journey | Portfolio',
  description: 'My professional journey in software engineering - from Infosys to Accenture to Arizona State University.',
};

const careerJourney = [
  {
    id: 1,
    role: 'Master of Science in Information Technology',
    company: 'Arizona State University',
    duration: 'Jul 2024 – Present',
    location: 'Tempe, Arizona',
    type: 'education' as const,
    achievements: [
      'Deep-diving into distributed systems and cloud architecture while keeping my software engineering skills sharp—because the best learning happens when theory meets real-world practice',
      'Exploring cutting-edge technologies in system design and scalable architectures, turning academic insights into practical knowledge I can apply to complex engineering challenges',
      'Building expertise in microservices patterns and event-driven systems, preparing to tackle the next generation of cloud-native applications with confidence',
    ],
    awards: [],
    skills: ['Distributed Systems', 'Cloud Architecture', 'System Design', 'Advanced Algorithms', 'Software Architecture'],
  },
  {
    id: 2,
    role: 'Software Developer',
    company: 'Accenture',
    duration: 'May 2023 – Jul 2024',
    location: 'India',
    type: 'professional' as const,
    achievements: [
      'Spearheaded the re-architecture of a mission-critical service platform handling 100K+ daily API requests—tripling throughput while maintaining rock-solid 99.9% uptime that kept clients smiling and systems humming',
      'Transformed deployment chaos into orchestrated harmony by automating multi-cloud pipelines, shrinking release cycles from weekly nail-biters to daily confidence-builders, and slashing operational costs by 20% through smarter container management',
      'Collaborated with cross-functional teams to design resilient systems that balanced performance, reliability, and cost-efficiency—proving that great engineering is as much about people as it is about code',
    ],
    awards: [],
    skills: ['Cloud Infrastructure', 'API Development', 'Multi-Cloud', 'DevOps Automation', 'Container Orchestration'],
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'Infosys',
    duration: 'Nov 2019 – May 2023',
    location: 'India',
    type: 'professional' as const,
    achievements: [
      'Built high-availability microservices from the ground up, cutting deployment time in half and creating a scalable foundation that enterprise clients actually enjoyed working with—no small feat in the backend world',
      'Architected event-driven data pipelines that turbocharged system throughput by 3x while keeping API response times under 150ms, even when traffic decided to throw a party',
      'Championed CI/CD excellence by implementing automated pipelines and testing suites that slashed release failures by 70%, turning deployment day from a stress test into a non-event',
      'Engineered a fault-tolerant distributed system achieving 99.99% uptime through intelligent failover mechanisms and optimized database patterns—because downtime is not an option when you are handling millions of daily transactions',
      'Designed and launched a log-analytics platform processing 1M+ records daily, with query optimizations that delivered sub-second search results across massive datasets—making enterprise-scale data feel snappy and responsive',
    ],
    awards: ['INSTA Award for exceptional performance', 'SPOT Award for outstanding client readiness'],
    skills: ['Microservices', 'Event-Driven Architecture', 'CI/CD', 'Distributed Systems', 'Performance Optimization'],
  },
];

export default function CareerPage() {
  return (
    <>
      <Scene3D />
      <main className="relative min-h-screen">
        {/* Header Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-cyan-300/10 border border-cyan-300/30 rounded-full mb-6">
              <span className="text-cyan-300 font-semibold text-sm">Professional Journey</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text">
              Career Path
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              From crafting enterprise-grade microservices to architecting cloud-native platforms—my journey through software engineering
              has been driven by a passion for building systems that scale, perform, and make a real impact
            </p>

            {/* Resume Download Button */}
            <div className="mt-8">
              <a
                href="/assets/resume.pdf"
                download="Kartheek_Panyam_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 text-sm text-white"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </section>

        {/* Professional Bio Section */}
        <section className="relative py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
              Building the Future, One System at a Time
            </h3>
            <div className="space-y-8 text-gray-100 leading-loose text-lg">
              <p className="text-justify">
                I&apos;m a software engineer with <span className="text-cyan-300 font-semibold">5+ years of experience</span> building
                scalable, high-performance distributed systems that power critical business operations. My journey began at{' '}
                <span className="text-cyan-300 font-semibold">Infosys</span>, where I architected microservices handling millions
                of daily transactions with <span className="text-primary font-semibold">99.99% uptime</span>. There, I developed a
                passion for event-driven architectures and the art of designing systems that gracefully handle massive scale.
              </p>
              <p className="text-justify">
                At <span className="text-cyan-300 font-semibold">Accenture</span>, I elevated my expertise by re-architecting
                mission-critical service platforms that processed <span className="text-primary font-semibold">100K+ daily API requests</span>.
                I led the charge in automating multi-cloud deployment pipelines, transforming weeks-long release cycles into daily deployments
                while maintaining rock-solid reliability. My work consistently focused on the intersection of performance, resilience, and
                cost-efficiency, proving that great engineering isn&apos;t about choosing between these priorities, but harmonizing them.
              </p>
              <p className="text-justify">
                Currently pursuing my <span className="text-cyan-300 font-semibold">Master&apos;s in Information Technology at Arizona State University</span>,
                I&apos;m deepening my expertise in distributed systems and cloud architecture while keeping my hands firmly in real-world engineering.
                I&apos;m driven by a belief that the best technology empowers people, whether that&apos;s through ultra-low-latency APIs that enhance user
                experiences, resilient systems that businesses can depend on, or elegant architectures that make future innovation easier.
              </p>
              <p className="text-justify">
                What excites me most? Tackling complex distributed systems challenges where milliseconds matter, designing fault-tolerant
                architectures that gracefully handle failures, and building platforms that scale effortlessly as demand grows. I thrive in
                environments where technical excellence meets meaningful impact, and where every optimization potentially touches thousands of users.
              </p>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="relative py-16 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Timeline Container */}
            <div className="relative space-y-16 pl-8 md:pl-12">
              {/* Vertical Timeline Line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-300/50 via-purple-300/50 to-pink-300/50" />

              {careerJourney.map((item, index) => {
                const Icon = item.type === 'education' ? GraduationCap : Briefcase

                return (
                  <div
                    key={item.id}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[1.65rem] md:-left-[2.15rem] top-8 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-300 to-purple-300 shadow-lg shadow-cyan-300/30 z-10">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 to-purple-300 animate-pulse" />
                    </div>

                    {/* Timeline Content Card */}
                    <div className="w-full">
                      <div
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-cyan-400/10"
                        style={{
                          animation: `slideInLeft 0.6s ease-out ${index * 0.2}s both`,
                        }}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-300 to-purple-300">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="px-3 py-1 bg-cyan-300/10 border border-cyan-300/30 rounded-full text-xs font-semibold text-cyan-300">
                                {item.type === 'education' ? 'EDUCATION' : 'PROFESSIONAL'}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                            <p className="text-lg text-cyan-300 font-semibold mb-1">{item.company}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                              <span>{item.duration}</span>
                              <span>•</span>
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-8">
                          <h4 className="text-base font-semibold text-purple-300 mb-4">Key Achievements</h4>
                          <ul className="space-y-3">
                            {item.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-base text-gray-100 leading-relaxed"
                              >
                                <span className="w-2 h-2 bg-cyan-300 rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Awards */}
                        {item.awards.length > 0 && (
                          <div className="mb-8">
                            <h4 className="text-base font-semibold text-purple-300 mb-4 flex items-center gap-2">
                              <Award className="w-5 h-5" />
                              <span>Awards & Recognition</span>
                            </h4>
                            <ul className="space-y-3">
                              {item.awards.map((award, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-base text-gray-100"
                                >
                                  <span className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0" />
                                  <span>{award}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Skills/Technologies */}
                        <div>
                          <h4 className="text-base font-semibold text-purple-300 mb-4">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-3">
                            {item.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-gray-100 hover:bg-cyan-300/20 hover:border-cyan-300/40 hover:text-white transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-300/0 via-purple-300/5 to-pink-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 hover:border-cyan-300/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-300/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 holographic-text">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                Open to full-time software engineering roles focused on distributed systems, cloud infrastructure, and backend development
              </p>
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-300 to-purple-300 hover:from-cyan-200 hover:to-purple-200 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-300/30 text-sm"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
