# Ahacad's Personal Blog & Portfolio

This is my personal blog and portfolio website, built with modern web technologies.

## Technologies Used

- [Astro](https://astro.build) - Static site generator 
- [React](https://reactjs.org) - UI components
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [MDX](https://mdxjs.com) - Markdown with JSX for content

## Features

- Content-focused design with minimal JavaScript
- Responsive layouts that work on all devices
- Tag-based organization for articles and projects
- SEO optimized
- Fast performance

## Development

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ahacad/ahacad.github.io.git
cd ahacad.github.io
```

2. Install dependencies:

```bash
pnpm install

# If you encounter any issues with the above command, try:
pnpm install astro@latest
pnpm install @astrojs/mdx @astrojs/react @astrojs/tailwind
pnpm install react react-dom
pnpm install class-variance-authority clsx tailwind-merge tailwindcss
pnpm install gray-matter
pnpm install typescript @types/react @types/react-dom
```

3. Start the development server:

```bash
pnpm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
pnpm run build
```

This will generate a static site in the `dist` directory.

### Deployment

This site is deployed to GitHub Pages. Push to the main branch to trigger a deployment.

## Project Structure

```
├── public/            # Static assets
├── src/
│   ├── components/    # UI components
│   ├── content/       # Markdown content
│   │   ├── articles/  # Blog articles
│   │   └── projects/  # Project showcases
│   ├── layouts/       # Page layouts
│   ├── pages/         # File-based routes
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── astro.config.mjs   # Astro configuration
└── tailwind.config.js # Tailwind configuration
```

## Content Management

Content is managed through Markdown files with frontmatter for metadata:

```markdown
---
title: "Article Title"
date: "2025-01-01"
tags: ["tag1", "tag2"]
description: "Article description"
published: true
---

Content goes here...
```

## License

MIT
