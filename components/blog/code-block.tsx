"use client";

import React, { useEffect, useState, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-yaml';
// Theme is now imported via global CSS

interface CodeBlockProps {
  language: string;
  code: string;
  caption?: string;
}

const languageMap: Record<string, string> = {
  javascript: 'js',
  js: 'js',
  typescript: 'typescript',
  ts: 'typescript',
  tsx: 'tsx',
  jsx: 'jsx',
  bash: 'bash',
  shell: 'bash',
  json: 'json',
  css: 'css',
  scss: 'scss',
  python: 'python',
  py: 'python',
  java: 'java',
  c: 'c',
  cpp: 'cpp',
  'c++': 'cpp',
  csharp: 'csharp',
  'c#': 'csharp',
  md: 'markdown',
  markdown: 'markdown',
  yaml: 'yaml',
  yml: 'yaml',
};

export default function CodeBlock({ language, code, caption }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const codeRef = useRef<HTMLElement>(null);
  
  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Apply syntax highlighting after component mounts
  useEffect(() => {
    if (isMounted && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [isMounted, code, language]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const mappedLanguage = languageMap[language?.toLowerCase()] || 'text';

  // Provide a stable server/client render
  return (
    <figure className="my-6 code-toolbar">
      <div className="relative">
        {isMounted && (
          <button 
            onClick={copyToClipboard}
            className="absolute right-2 top-2 px-2 py-1 rounded text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
            aria-label="Copy code to clipboard"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
        <pre className="bg-gray-800 dark:bg-gray-900 p-4 rounded-md my-4 overflow-x-auto">
          <code ref={codeRef} className={`language-${mappedLanguage} text-sm font-mono`}>
            {code}
          </code>
        </pre>
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
} 