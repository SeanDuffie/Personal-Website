import React, { useState } from 'react';
import { ExternalLink, Github, Search, Filter } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';

interface ProjectsPageProps {
  onProjectClick: (projectId: number) => void;
}

export function ProjectsPage({ onProjectClick }: ProjectsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'web-app', 'mobile', 'open-source', 'personal'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and admin dashboard. Built with Next.js and Stripe.',
      category: 'web-app',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/username/ecommerce',
      demo: 'https://demo.example.com',
      year: '2024',
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses using OpenAI API. Features include message history, user authentication, and theme customization.',
      category: 'web-app',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400',
      tags: ['React', 'WebSocket', 'OpenAI', 'Node.js', 'MongoDB'],
      github: 'https://github.com/username/ai-chat',
      demo: 'https://chat.example.com',
      year: '2024',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with interactive charts and real-time data visualization. Supports custom reports and data exports.',
      category: 'web-app',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      tags: ['React', 'D3.js', 'PostgreSQL', 'Express', 'Chart.js'],
      github: 'https://github.com/username/analytics',
      demo: 'https://analytics.example.com',
      year: '2023',
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and fitness goals. Includes social features and achievement system.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
      tags: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
      github: 'https://github.com/username/fitness-app',
      demo: null,
      year: '2023',
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'Open-source project management tool with kanban boards, time tracking, and team collaboration features.',
      category: 'open-source',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400',
      tags: ['Vue.js', 'Node.js', 'MySQL', 'Socket.io'],
      github: 'https://github.com/username/task-manager',
      demo: 'https://tasks.example.com',
      year: '2023',
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with 7-day forecasts, weather maps, and location-based alerts. Uses multiple weather APIs for accuracy.',
      category: 'personal',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400',
      tags: ['React', 'TypeScript', 'Weather API', 'Leaflet'],
      github: 'https://github.com/username/weather-app',
      demo: 'https://weather.example.com',
      year: '2022',
    },
    {
      id: 7,
      title: 'Recipe Sharing Platform',
      description: 'Social platform for sharing and discovering recipes. Features include user profiles, ratings, comments, and meal planning.',
      category: 'web-app',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
      github: 'https://github.com/username/recipes',
      demo: 'https://recipes.example.com',
      year: '2022',
    },
    {
      id: 8,
      title: 'Markdown Editor',
      description: 'Lightweight markdown editor with live preview, syntax highlighting, and export to PDF. Built as an open-source tool.',
      category: 'open-source',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
      tags: ['React', 'TypeScript', 'Monaco Editor', 'PDF.js'],
      github: 'https://github.com/username/md-editor',
      demo: 'https://editor.example.com',
      year: '2022',
    },
    {
      id: 9,
      title: 'Portfolio Generator',
      description: 'CLI tool and web interface for generating customizable portfolio websites from JSON configuration.',
      category: 'open-source',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400',
      tags: ['Node.js', 'React', 'CLI', 'Templates'],
      github: 'https://github.com/username/portfolio-gen',
      demo: null,
      year: '2021',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-foreground">Projects</h1>
          <p className="text-muted-foreground">
            A collection of my work spanning web applications, mobile apps, and open-source contributions
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-card dark:border-gray-700"
              onClick={() => onProjectClick(project.id)}
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="flex-1 text-foreground">{project.title}</h3>
                  <span className="text-xs text-muted-foreground ml-2">{project.year}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 gap-2" 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button 
                      size="sm" 
                      className="flex-1 gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}