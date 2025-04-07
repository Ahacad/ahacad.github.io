---
title: "Getting Started with Astro: Building Modern Websites"
date: "2025-04-01"
tags: ["astro", "web-development", "javascript", "tutorial"]
description: "Learn how to build fast, content-focused websites with Astro, the new static site generator that lets you use your favorite UI components."
published: true
---

# Getting Started with Astro: Building Modern Websites

Astro is a modern static site generator that allows you to build fast, content-focused websites with your favorite UI components. In this article, we'll explore how to get started with Astro and why it might be the perfect tool for your next project.

## What is Astro?

Astro is a web framework that allows you to build fast websites with less client-side JavaScript. It enables you to build websites using components from your favorite UI frameworks (React, Vue, Svelte, etc.) but then renders them to static HTML at build time, sending zero JavaScript to the client by default.

This "islands architecture" approach means that you can use rich, interactive components where needed, while maintaining the performance benefits of static HTML for the majority of your content.

## Why Choose Astro?

There are several compelling reasons to consider Astro for your next project:

1. **Performance by default** - Astro websites are designed to be lightning-fast out of the box by shipping less JavaScript and leveraging modern browser features.

2. **Framework-agnostic** - Use components from React, Preact, Svelte, Vue, Solid, Alpine, Lit, and others in the same project.

3. **Content-focused** - Built-in support for Markdown, MDX, and content collections makes it perfect for content-rich websites.

4. **Full-featured** - Includes everything you need: routing, asset handling, build process, bundling, optimizations, data fetching, and more.

5. **Flexible deployment** - Build for static hosting or add SSR to handle dynamic content.

## Setting Up Your First Astro Project

Here's how to create a basic Astro project:

```bash
# Create a new project with npm
npm create astro@latest my-astro-project

# Navigate to your new project directory
cd my-astro-project

# Start the development server
npm run dev
```

This will create a new Astro project and start a development server at `http://localhost:4321`.

## Project Structure

A typical Astro project looks like this:

```
├── public/
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── ...
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

- `public/`: Static assets that don't need processing
- `src/components/`: UI components (Astro, React, Vue, etc.)
- `src/layouts/`: Layout components for page structure
- `src/pages/`: File-based routing system
- `astro.config.mjs`: Configuration file

## Creating Pages

In Astro, pages can be written in `.astro` format or as Markdown/MDX files. Here's a simple example of an Astro page:

```astro
---
// src/pages/index.astro
import MainLayout from '../layouts/MainLayout.astro';
---

<MainLayout title="Home">
  <h1>Welcome to my website!</h1>
  <p>This is built with Astro.</p>
</MainLayout>
```

## Using Components

Astro components use a template syntax that's similar to HTML, with support for JavaScript expressions:

```astro
---
// src/components/Card.astro
const { title, description, url } = Astro.props;
---

<div class="card">
  <h2>{title}</h2>
  <p>{description}</p>
  <a href={url}>Learn more</a>
</div>

<style>
  .card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
  }
</style>
```

## Integrating React, Vue, or Other Frameworks

Astro allows you to use components from various UI frameworks. To use React components, for instance:

1. First, add the React integration:

```bash
npx astro add react
```

2. Then create a React component:

```jsx
// src/components/Counter.jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

3. Use it in an Astro component or page:

```astro
---
import Counter from '../components/Counter.jsx';
---

<div>
  <h1>React Counter</h1>
  <Counter client:load />
</div>
```

The `client:load` directive tells Astro to hydrate this component on page load, making it interactive.

## Conclusion

Astro provides a modern approach to building websites that prioritizes content and performance while giving you the flexibility to use the tools and frameworks you love. Its unique island architecture makes it particularly well-suited for content-focused websites like blogs, documentation sites, marketing sites, and portfolios.

As you explore Astro further, you'll discover more powerful features like:

- Content collections for organizing and validating Markdown/MDX content
- Dynamic routes for creating pages from external data
- Image optimization tools
- Server-side rendering options
- Middleware for handling requests
- And much more

I hope this introduction helps you get started with Astro. Happy coding!
