import React from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle, Circle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface ProjectDetailPageProps {
  projectId: number;
  onBack: () => void;
}

interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  youtubeVideoId: string;
  externalLink?: string;
  githubLink: string;
  technologies: {
    category: string;
    tools: string[];
  }[];
  timeline: {
    phase: string;
    date: string;
    description: string;
    status: 'completed' | 'in-progress' | 'planned';
  }[];
  challenges: string[];
  outcomes: string[];
  team: string[];
}

export function ProjectDetailPage({ projectId, onBack }: ProjectDetailPageProps) {
  // This would normally fetch project data based on projectId
  const projectsData: Record<number, ProjectData> = {
    1: {
      id: 1,
      title: 'E-Commerce Platform',
      subtitle: 'Full-stack online shopping experience with modern payment integration',
      heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200',
      description: 'A comprehensive e-commerce platform built with Next.js and TypeScript, featuring real-time inventory management, secure payment processing through Stripe, and an intuitive admin dashboard. The platform handles thousands of products across multiple categories with advanced search and filtering capabilities.',
      youtubeVideoId: 'dQw4w9WgXcQ',
      externalLink: 'https://demo.example.com',
      githubLink: 'https://github.com/username/ecommerce',
      technologies: [
        {
          category: 'Frontend',
          tools: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand'],
        },
        {
          category: 'Backend',
          tools: ['Next.js API Routes', 'Prisma ORM', 'PostgreSQL', 'Redis'],
        },
        {
          category: 'Payment & Services',
          tools: ['Stripe', 'SendGrid', 'AWS S3', 'Vercel'],
        },
        {
          category: 'Testing & DevOps',
          tools: ['Jest', 'Playwright', 'GitHub Actions', 'Docker'],
        },
      ],
      timeline: [
        {
          phase: 'Planning & Design',
          date: 'Jan 2024',
          description: 'Requirements gathering, wireframing, and system architecture design',
          status: 'completed',
        },
        {
          phase: 'MVP Development',
          date: 'Feb 2024',
          description: 'Core features including product catalog, cart, and basic checkout',
          status: 'completed',
        },
        {
          phase: 'Payment Integration',
          date: 'Mar 2024',
          description: 'Stripe payment gateway integration and order processing',
          status: 'completed',
        },
        {
          phase: 'Admin Dashboard',
          date: 'Apr 2024',
          description: 'Built comprehensive admin panel for inventory and order management',
          status: 'completed',
        },
        {
          phase: 'Testing & Optimization',
          date: 'May 2024',
          description: 'Performance optimization and comprehensive testing',
          status: 'completed',
        },
        {
          phase: 'Launch & Monitoring',
          date: 'Jun 2024',
          description: 'Production deployment and ongoing maintenance',
          status: 'completed',
        },
      ],
      challenges: [
        'Implementing real-time inventory synchronization across multiple warehouse locations',
        'Optimizing database queries for product search with complex filtering requirements',
        'Ensuring PCI compliance and secure payment processing',
        'Building a responsive admin dashboard that works seamlessly on mobile devices',
      ],
      outcomes: [
        'Successfully processed over 10,000 orders in the first month',
        'Achieved 99.9% uptime with average page load time under 1 second',
        'Reduced cart abandonment rate by 35% through optimized checkout flow',
        'Generated $500K+ in revenue within the first quarter',
      ],
      team: ['Lead Developer', '2 Frontend Developers', '1 Backend Developer', 'UI/UX Designer', 'Product Manager'],
    },
    2: {
      id: 2,
      title: 'AI Chat Application',
      subtitle: 'Real-time conversational AI powered by OpenAI',
      heroImage: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200',
      description: 'An intelligent chat application that leverages OpenAI\'s GPT models to provide context-aware responses. Features include real-time messaging, conversation history, user authentication, and customizable AI personalities.',
      youtubeVideoId: 'dQw4w9WgXcQ',
      externalLink: 'https://chat.example.com',
      githubLink: 'https://github.com/username/ai-chat',
      technologies: [
        {
          category: 'Frontend',
          tools: ['React 18', 'TypeScript', 'Socket.io Client', 'TailwindCSS', 'Framer Motion'],
        },
        {
          category: 'Backend',
          tools: ['Node.js', 'Express', 'Socket.io', 'MongoDB', 'Redis'],
        },
        {
          category: 'AI & Services',
          tools: ['OpenAI API', 'JWT Auth', 'AWS Lambda', 'CloudFront'],
        },
      ],
      timeline: [
        {
          phase: 'Prototype',
          date: 'Mar 2024',
          description: 'Initial concept and basic chat interface',
          status: 'completed',
        },
        {
          phase: 'AI Integration',
          date: 'Apr 2024',
          description: 'OpenAI API integration and response optimization',
          status: 'completed',
        },
        {
          phase: 'Real-time Features',
          date: 'May 2024',
          description: 'WebSocket implementation for real-time messaging',
          status: 'completed',
        },
        {
          phase: 'Beta Release',
          date: 'Jun 2024',
          description: 'Limited beta testing with early users',
          status: 'completed',
        },
      ],
      challenges: [
        'Managing API costs while maintaining responsive user experience',
        'Implementing context retention for longer conversations',
        'Handling rate limiting and graceful degradation',
      ],
      outcomes: [
        '5,000+ active users in the first month',
        'Average session duration of 15 minutes',
        '95% user satisfaction rating',
      ],
      team: ['Solo Project', 'Consulting UI/UX Designer'],
    },
    3: {
      id: 3,
      title: 'Analytics Dashboard',
      subtitle: 'Business intelligence platform with interactive data visualization',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
      description: 'A comprehensive analytics dashboard that helps businesses visualize and understand their data. Features include customizable charts, real-time updates, data export capabilities, and role-based access control.',
      youtubeVideoId: 'dQw4w9WgXcQ',
      githubLink: 'https://github.com/username/analytics',
      technologies: [
        {
          category: 'Frontend',
          tools: ['React', 'D3.js', 'Recharts', 'TypeScript', 'Redux Toolkit'],
        },
        {
          category: 'Backend',
          tools: ['Express', 'PostgreSQL', 'TimescaleDB', 'Node.js'],
        },
        {
          category: 'Infrastructure',
          tools: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
        },
      ],
      timeline: [
        {
          phase: 'Research & Planning',
          date: 'Sep 2023',
          description: 'User research and feature prioritization',
          status: 'completed',
        },
        {
          phase: 'Core Dashboard',
          date: 'Oct 2023',
          description: 'Base dashboard with essential charts and metrics',
          status: 'completed',
        },
        {
          phase: 'Advanced Features',
          date: 'Nov 2023',
          description: 'Custom reports, filters, and data export',
          status: 'completed',
        },
        {
          phase: 'Enterprise Features',
          date: 'Dec 2023',
          description: 'Role-based access, API access, white-labeling',
          status: 'completed',
        },
      ],
      challenges: [
        'Optimizing render performance for large datasets',
        'Creating an intuitive interface for complex data operations',
        'Implementing efficient data aggregation for real-time updates',
      ],
      outcomes: [
        'Deployed to 50+ enterprise clients',
        'Handles 10M+ data points daily',
        'Reduced reporting time by 70%',
      ],
      team: ['Tech Lead', '3 Developers', 'Data Analyst', 'DevOps Engineer'],
    },
  };

  const project = projectsData[projectId] || projectsData[1];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-white mb-2">{project.title}</h1>
            <p className="text-xl text-white/90">{project.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Overview & Links */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {project.externalLink && (
                  <Button asChild>
                    <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github className="w-4 h-4" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6">
              <h3 className="mb-4">Team</h3>
              <div className="space-y-2">
                {project.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    {member}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Video Demo */}
        <Card className="p-6 mb-12">
          <h2 className="mb-4">Demo Video</h2>
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
              title="Project Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Card>

        {/* Technologies */}
        <Card className="p-6 mb-12">
          <h2 className="mb-6">Technologies & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.technologies.map((tech, index) => (
              <div key={index}>
                <h3 className="mb-3">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="mr-2 mb-2">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Timeline */}
        <Card className="p-6 mb-12">
          <h2 className="mb-6">Project Timeline</h2>
          <div className="space-y-6">
            {project.timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  {item.status === 'completed' ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                  {index < project.timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <h3>{item.phase}</h3>
                    <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Challenges & Outcomes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h2 className="mb-4">Key Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex gap-3 text-gray-600">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4">Outcomes & Impact</h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
