import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack application with Next.js and Stripe integration',
      tags: ['Next.js', 'TypeScript', 'Stripe'],
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat with AI-powered responses',
      tags: ['React', 'WebSocket', 'OpenAI'],
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Data visualization platform for business metrics',
      tags: ['React', 'D3.js', 'PostgreSQL'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1728631191055-aa24c9eff7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NTg1MTg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hero background"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.5, window.innerHeight * 0.9)}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white mb-4">
            Hi, I'm John Doe
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex gap-3 justify-center">
            <Button size="lg" onClick={() => onNavigate('projects')}>
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                I'm a passionate full-stack developer with 5+ years of experience building web applications. 
                I specialize in creating scalable, user-friendly solutions using modern technologies.
              </p>
              <p className="mb-4">
                My expertise lies in React, Next.js, TypeScript, and Node.js. I'm constantly learning 
                and staying up-to-date with the latest trends in web development.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, writing 
                technical blog posts, or exploring new technologies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl mb-2">10+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl mb-2">3</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-gray-600">
              Here are some of my recent works that showcase my skills and experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" onClick={() => onNavigate('projects')}>
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Email
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>
          
          <Button onClick={() => onNavigate('schedule')}>
            Schedule a Meeting
            <Calendar className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}