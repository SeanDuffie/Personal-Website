import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      title: 'Research Engineer I',
      company: 'Georgia Tech Research Institute',
      location: 'Smyrna, GA',
      period: 'Jan 2024 - Nov 2025',
      description: 'TODO',
      achievements: [
        'TODO 1',
        'TODO 2',
      ],
      skills: ['Assembly', 'Next.js', 'TypeScript', 'Node.js', 'AWS'],
    },
    {
      id: 2,
      title: 'Embedded Software Engineer',
      company: 'Lynntech Inc.',
      location: 'College Station, TX',
      period: 'Sep 2021 - Jan 2024',
      description: 'TODO',
      achievements: [
        'TODO 1',
        'TODO 2',
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
      institution: 'Georgia Institute of Technology',
      location: 'Atlanta, GA',
      period: '2025 - 2027',
      gpa: '4.0/4.0',
      highlights: [
        'Thesis: "Optimizing Web Application Performance Using Machine Learning"',
        'Teaching Assistant for Web Development course',
        'Member of ACM and Computer Science Honor Society',
      ],
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Electronic Systems',
      institution: 'Texas A&M University',
      location: 'College Station, TX',
      period: '2018 - 2023',
    //   gpa: '3.8/4.0',
      highlights: [
        'TODO',
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
      name: 'Microsoft Certified: Azure Solutions Architect Expert',
      issuer: 'TODO',
      date: 'TODO',
      credentialId: 'TODO',
    },
    // {
    //   id: 3,
    //   name: 'MongoDB Certified Developer',
    //   issuer: 'MongoDB University',
    //   date: 'January 2021',
    //   credentialId: 'MDB-54321',
    // },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 dark:text-white">Experience & Education</h1>
          <p className="text-gray-600 dark:text-gray-400">
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
              <Card key={exp.id} className="p-6 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1 dark:text-white">{exp.title}</h3>
                        <div className="text-gray-600 dark:text-gray-400">{exp.company} • {exp.location}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm mb-2 dark:text-gray-300">Key Achievements:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
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
              <Card key={edu.id} className="p-6 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1 dark:text-white">{edu.degree}</h3>
                        <div className="text-gray-600 dark:text-gray-400">{edu.institution} • {edu.location}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline">GPA: {edu.gpa}</Badge>
                    </div>
                    
                    <div>
                      <div className="text-sm mb-2 dark:text-gray-300">Highlights:</div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
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
              <Card key={cert.id} className="p-6 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1 dark:text-white">{cert.name}</h3>
                        <div className="text-gray-600 dark:text-gray-400">{cert.issuer}</div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</div>
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
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
