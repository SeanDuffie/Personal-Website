import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: 'Leading development of enterprise-scale web applications using React, Next.js, and Node.js. Mentoring junior developers and conducting code reviews.',
      achievements: [
        'Reduced page load time by 40% through optimization',
        'Led migration from JavaScript to TypeScript',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS'],
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: 'Mar 2020 - Dec 2021',
      description: 'Developed and maintained multiple client projects, working with cross-functional teams to deliver high-quality web applications.',
      achievements: [
        'Built 15+ responsive web applications',
        'Improved API response time by 50%',
        'Established coding standards and best practices',
      ],
      skills: ['React', 'Vue.js', 'Express', 'MongoDB', 'Docker'],
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      location: 'New York, NY',
      period: 'Jun 2018 - Feb 2020',
      description: 'Created responsive and accessible user interfaces for various clients in e-commerce, healthcare, and finance sectors.',
      achievements: [
        'Developed component library used across 20+ projects',
        'Achieved 95+ Lighthouse scores on all projects',
        'Collaborated with UX team to improve user engagement by 35%',
      ],
      skills: ['JavaScript', 'React', 'SASS', 'Webpack', 'Git'],
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2016 - 2018',
      gpa: '3.9/4.0',
      highlights: [
        'Thesis: "Optimizing Web Application Performance Using Machine Learning"',
        'Teaching Assistant for Web Development course',
        'Member of ACM and Computer Science Honor Society',
      ],
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2012 - 2016',
      gpa: '3.8/4.0',
      highlights: [
        'Dean\'s List all semesters',
        'Led university hackathon team to 1st place',
        'President of Computer Science Student Association',
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'May 2023',
      credentialId: 'AWS-CSA-12345',
    },
    {
      id: 2,
      name: 'Professional Scrum Master (PSM I)',
      issuer: 'Scrum.org',
      date: 'March 2022',
      credentialId: 'PSM-67890',
    },
    {
      id: 3,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'January 2021',
      credentialId: 'MDB-54321',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4">Experience & Education</h1>
          <p className="text-gray-600">
            My professional journey and academic background
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1">{exp.title}</h3>
                        <div className="text-gray-600">{exp.company} • {exp.location}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm mb-2">Key Achievements:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1">{edu.degree}</h3>
                        <div className="text-gray-600">{edu.institution} • {edu.location}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline">GPA: {edu.gpa}</Badge>
                    </div>
                    
                    <div>
                      <div className="text-sm mb-2">Highlights:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1">{cert.name}</h3>
                        <div className="text-gray-600">{cert.issuer}</div>
                      </div>
                      <div className="text-sm text-gray-500">{cert.date}</div>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      Credential ID: {cert.credentialId}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
