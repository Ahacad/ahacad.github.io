import React from 'react';
import { 
  Code, 
  PenLine, 
  BarChart, 
  Search, 
  BookOpen, 
  Briefcase, 
  HelpCircle, 
  MessageSquare 
} from 'lucide-react';

interface PromptIconProps {
  iconName: string;
  className?: string;
}

export function PromptIcon({ iconName, className = "h-5 w-5" }: PromptIconProps) {
  switch (iconName) {
    case 'Code':
      return <Code className={className} />;
    case 'PenLine':
      return <PenLine className={className} />;
    case 'BarChart':
      return <BarChart className={className} />;
    case 'Search':
      return <Search className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'HelpCircle':
      return <HelpCircle className={className} />;
    case 'MessageSquare':
    default:
      return <MessageSquare className={className} />;
  }
}
