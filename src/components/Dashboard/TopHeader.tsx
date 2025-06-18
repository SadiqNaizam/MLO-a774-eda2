import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'h-20 px-6 bg-background border-b border-border flex items-center justify-between',
        'fixed top-0 left-64 right-0 z-10', // Assuming sidebar is w-64 and fixed
        className
      )}
    >
      <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>New Lead</DropdownMenuItem>
          <DropdownMenuItem>New Contact</DropdownMenuItem>
          <DropdownMenuItem>New Company</DropdownMenuItem>
          <DropdownMenuItem>New Deal</DropdownMenuItem>
          <DropdownMenuItem>New Task</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;
