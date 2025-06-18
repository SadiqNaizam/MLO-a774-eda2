import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout is the primary layout structure for the application.
 * It orchestrates the Sidebar, Header, and the main content area.
 * The Sidebar and Header are fixed, and the main content area is scrollable.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('bg-background', className)}>
      <Sidebar />
      <Header />
      {/* 
        Main content area.
        'ml-64' accounts for the fixed sidebar's width (w-64).
        'pt-20' accounts for the fixed header's height (h-20).
        'h-screen' makes the main area viewport height.
        'overflow-y-auto' enables scrolling for content that exceeds viewport height.
      */}
      <main className="ml-64 pt-20 h-screen overflow-y-auto">
        {/* 
          Inner container for content padding and spacing as per layout requirements.
          'p-6' for padding around the content.
          'space-y-6' for vertical spacing between direct children elements.
        */}
        <div className="p-6 space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
