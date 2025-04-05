"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Simple placeholder during initial client render
const CodeBlockPlaceholder = ({ language }: { language: string }) => (
  <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-md my-4 overflow-x-auto">
    <pre className="text-sm font-mono text-gray-300">
      <code>Loading {language} code...</code>
    </pre>
  </div>
);

// Dynamically import the CodeBlock component on the client side
const CodeBlock = dynamic(() => import('@/components/blog/code-block'), {
  ssr: false,
  loading: () => <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-md my-4">Loading code...</div>
});

interface CodeBlockProps {
  language: string;
  code: string;
  caption?: string;
}

export default function DynamicCodeBlock({ language, code, caption }: CodeBlockProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ensure consistent rendering during hydration by using the placeholder
  // until after client-side hydration is complete
  if (!isMounted) {
    return <CodeBlockPlaceholder language={language} />;
  }

  return <CodeBlock language={language} code={code} caption={caption} />;
} 