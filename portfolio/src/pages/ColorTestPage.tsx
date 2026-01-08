import React from 'react';
import { Card } from '../components/ui/card';

export function ColorTestPage() {
  // We map your semantic names to their Tailwind class counterparts
  const colorTokens = [
    { 
      name: 'Background', 
      bgClass: 'bg-background', 
      textClass: 'text-foreground',
      description: 'Main page background' 
    },
    { 
      name: 'Card', 
      bgClass: 'bg-card', 
      textClass: 'text-card-foreground',
      description: 'Cards, Modals, Popups' 
    },
    { 
      name: 'Popover', 
      bgClass: 'bg-popover', 
      textClass: 'text-popover-foreground',
      description: 'Dropdowns, Tooltips' 
    },
    { 
      name: 'Primary', 
      bgClass: 'bg-primary', 
      textClass: 'text-primary-foreground',
      description: 'Main Actions, Buttons' 
    },
    { 
      name: 'Secondary', 
      bgClass: 'bg-secondary', 
      textClass: 'text-secondary-foreground',
      description: 'Secondary Actions, Tags' 
    },
    { 
      name: 'Muted', 
      bgClass: 'bg-muted', 
      textClass: 'text-muted-foreground',
      description: 'Disabled states, subtitles' 
    },
    { 
      name: 'Accent', 
      bgClass: 'bg-accent', 
      textClass: 'text-accent-foreground',
      description: 'Hover effects, highlights' 
    },
    { 
      name: 'Destructive', 
      bgClass: 'bg-destructive', 
      textClass: 'text-destructive-foreground',
      description: 'Error messages, Delete buttons' 
    },
  ];

  const utilityTokens = [
    { name: 'Border', bgClass: 'bg-border', textClass: 'text-foreground' },
    { name: 'Input', bgClass: 'bg-input', textClass: 'text-foreground' },
    { name: 'Ring', bgClass: 'bg-ring', textClass: 'text-background' }, // Inverted for visibility
  ];

  return (
    <div className="min-h-screen w-full p-10 space-y-10 bg-background text-foreground transition-colors duration-300">
      
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Theme Color Audit</h1>
        <p className="text-muted-foreground max-w-xl">
          This grid displays all semantic color tokens. Toggle your theme (Sun/Moon) 
          to verify how they look in both Light (#604040) and Dark modes.
        </p>
      </div>

      {/* Main UI Colors */}
      <section>
        <h2 className="text-xl font-semibold mb-4">UI Surfaces</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colorTokens.map((token) => (
            <div 
              key={token.name}
              className={`${token.bgClass} ${token.textClass} p-6 rounded-lg shadow-sm border border-border flex flex-col justify-between h-32 transition-colors duration-200`}
            >
              <span className="font-bold text-lg">{token.name}</span>
              <div className="text-sm opacity-80">
                <div className="text-xs uppercase opacity-70 mb-1">Used For</div>
                {token.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Utility Colors (Borders, Rings, Inputs) */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Utility Colors</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          These are usually used for strokes/lines, but are displayed here as blocks for visibility.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {utilityTokens.map((token) => (
            <div 
              key={token.name}
              className={`${token.bgClass} ${token.textClass} p-4 rounded-md shadow-sm border border-foreground/10 flex items-center justify-center h-20 font-medium`}
            >
              {token.name}
            </div>
          ))}
        </div>
      </section>

      {/* Real World Component Test */}
      <section className="max-w-md">
        <h2 className="text-xl font-semibold mb-4">Component Simulation</h2>
        <Card className="p-6 bg-card text-card-foreground border-border">
          <h3 className="text-lg font-bold mb-2">Example Card Component</h3>
          <p className="text-muted-foreground mb-4">
            This is how a typical paragraph looks. It uses "muted-foreground" for softer contrast.
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded bg-primary text-primary-foreground font-medium hover:opacity-90">
              Primary Action
            </button>
            <button className="px-4 py-2 rounded bg-secondary text-secondary-foreground font-medium hover:opacity-90">
              Secondary
            </button>
          </div>
        </Card>
      </section>

    </div>
  );
}