import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import type { ArticleFrontmatter } from '../utils/content';

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

export function ArticleCard({ title, description, date, tags, slug }: ArticleCardProps) {
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <a href={`/articles/${slug}`} className="block no-underline">
      <Card className="h-full hover:border-primary/50">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{formattedDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </a>
  );
}
