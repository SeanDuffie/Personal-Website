import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // FIX: Initialize state by checking LocalStorage AND System Preference immediately
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Safety check for server-side rendering (if applicable)
    if (typeof window === 'undefined') return true;

    const savedTheme = localStorage.getItem('theme');
    
    // 1. Prioritize user's manual override
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;

    // 2. Fall back to Operating System preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply the class to the HTML element whenever the state changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      // Save manual preference to localStorage
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}