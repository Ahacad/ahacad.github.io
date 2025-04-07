import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export type ArticleFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  description: string;
  published: boolean;
};

export type ProjectFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  description: string;
  link?: string;
  published: boolean;
};

export async function getAllArticles() {
  const articlesDirectory = path.join(contentDirectory, 'articles');
  const filenames = fs.readdirSync(articlesDirectory);
  
  const articles = filenames.map((filename) => {
    // Get file contents
    const filePath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    
    // Ensure the file name is used as the slug
    const slug = filename.replace(/\.mdx?$/, '');
    
    return {
      slug,
      frontmatter: data as ArticleFrontmatter,
      content,
    };
  });
  
  // Sort articles by date
  return articles
    .filter(article => article.frontmatter.published)
    .sort((a, b) => {
      if (new Date(a.frontmatter.date) > new Date(b.frontmatter.date)) {
        return -1;
      }
      return 1;
    });
}

export async function getAllProjects() {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const filenames = fs.readdirSync(projectsDirectory);
  
  const projects = filenames.map((filename) => {
    // Get file contents
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    
    // Ensure the file name is used as the slug
    const slug = filename.replace(/\.mdx?$/, '');
    
    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  });
  
  // Sort projects by date
  return projects
    .filter(project => project.frontmatter.published)
    .sort((a, b) => {
      if (new Date(a.frontmatter.date) > new Date(b.frontmatter.date)) {
        return -1;
      }
      return 1;
    });
}

export async function getAllTags() {
  const articles = await getAllArticles();
  const projects = await getAllProjects();
  
  const allTags = [
    ...articles.flatMap(article => article.frontmatter.tags),
    ...projects.flatMap(project => project.frontmatter.tags)
  ];
  
  // Count occurrences of each tag
  const tagCount = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Create array of tags with count
  return Object.entries(tagCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
