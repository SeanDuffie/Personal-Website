/** FIXME: Remove after testing finished */
import { DiagnosticTest } from './components/DiagnosticTest';

import React, { useState } from 'react';
import { Navigation } from './pages/Navigation';
import { LandingPage } from './pages/LandingPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SchedulePage } from './pages/SchedulePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ThemeProvider } from './components/ThemeContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
    setCurrentPage('projects');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'experience':
        /** FIXME: Remove after testing finished */
        // return <DiagnosticTest />;
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage onProjectClick={handleProjectClick} />;
      case 'project-detail':
        return selectedProjectId ? (
          <ProjectDetailPage projectId={selectedProjectId} onBack={handleBackToProjects} />
        ) : (
          <ProjectsPage onProjectClick={handleProjectClick} />
        );
      case 'schedule':
        return <SchedulePage />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        {currentPage !== 'project-detail' && (
          <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        )}
        <main>
          {renderPage()}
        </main>
        
        {/* Footer */}
        <footer>
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mx-auto mb-2" />
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Sean Duffie. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}