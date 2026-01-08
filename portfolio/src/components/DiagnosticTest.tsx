import React from 'react';

// Simple diagnostic component to test styling
export function DiagnosticTest() {
  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Styling Diagnostic Test</h1>
      
      {/* Test 1: Basic Tailwind Classes */}
      <div className="bg-blue-500 text-primary-foreground p-4 rounded">
        ✓ Test 1: If this is BLUE, Tailwind is working
      </div>
      
      {/* Test 2: Flex and Gap */}
      <div className="flex gap-4">
        <div className="bg-red-500 text-primary-foreground p-4 rounded flex-1">Box 1</div>
        <div className="bg-green-500 text-primary-foreground p-4 rounded flex-1">Box 2</div>
        <div className="bg-purple-500 text-primary-foreground p-4 rounded flex-1">Box 3</div>
      </div>
      <div className="text-sm text-muted-foreground">
        ✓ Test 2: If these 3 boxes are side-by-side with gaps, flex is working
      </div>
      
      {/* Test 3: Grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-yellow-500 p-4 rounded">Grid 1</div>
        <div className="bg-yellow-500 p-4 rounded">Grid 2</div>
        <div className="bg-yellow-500 p-4 rounded">Grid 3</div>
      </div>
      <div className="text-sm text-muted-foreground">
        ✓ Test 3: If these are in a 3-column grid, grid is working
      </div>
      
      {/* Test 4: Shadow and Border */}
      <div className="bg-white p-6 rounded-lg shadow-lg border">
        ✓ Test 4: If this card has shadow and border, those utilities work
      </div>
      
      {/* Test 5: Custom Colors (from your theme) */}
      <div className="bg-primary text-primary-foreground p-4 rounded">
        ✓ Test 5: If this uses your custom primary color, theme variables work
      </div>
      
      <div className="bg-card text-card-foreground p-4 rounded border">
        ✓ Test 6: If this uses your card background color, card theme works
      </div>
      
      {/* Test 7: Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-indigo-500 text-primary-foreground p-4 rounded">Responsive 1</div>
        <div className="bg-indigo-500 text-primary-foreground p-4 rounded">Responsive 2</div>
        <div className="bg-indigo-500 text-primary-foreground p-4 rounded">Responsive 3</div>
      </div>
      <div className="text-sm text-muted-foreground">
        ✓ Test 7: Resize window - should be 1 col (small), 2 cols (medium), 3 cols (large)
      </div>
      
      {/* Test 8: Hover Effects */}
      <button className="bg-blue-600 text-primary-foreground px-6 py-3 rounded hover:bg-blue-700 transition-colors">
        ✓ Test 8: Hover over me - color should change
      </button>
      
      <div className="mt-8 p-4 bg-green-100 border border-green-400 rounded">
        <strong>If all tests pass:</strong> Your Tailwind setup is working correctly!
        The issue is likely with specific component logic or data.
      </div>
      
      <div className="mt-4 p-4 bg-red-100 border border-red-400 rounded">
        <strong>If some tests fail:</strong> Note which ones and we can diagnose the specific issue.
      </div>
    </div>
  );
}