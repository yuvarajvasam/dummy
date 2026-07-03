---
title: "Getting Started with Astro"
description: "Learn how to build fast, modern websites with Astro."
pubDate: 2024-01-15
heroImage: "/blog/astro-intro.jpg"
tags: ["astro", "web development", "tutorial"]
draft: false
---

# Getting Started with Astro

Astro is a modern web framework that allows you to build faster websites by shipping less JavaScript. In this tutorial, we'll explore the basics of Astro and how you can get started building your own projects.

## Why Astro?

Astro offers several advantages over traditional frameworks:

- **Zero JavaScript by default**: Only ship what you need
- **Partial hydration**: Load components interactively when needed
- **Framework agnostic**: Use React, Vue, Svelte, or plain HTML
- **Content collections**: Organize your markdown content easily

## Installation

To create a new Astro project, run:

```bash
npm create astro@latest
```

Follow the prompts to set up your project structure.

## Project Structure

Astro projects follow a simple convention:

```
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/
└── package.json
```

## Creating Your First Page

Create a file at `src/pages/index.astro`:

```astro
---
const name = "World";
---

<html>
  <body>
    <h1>Hello, {name}!</h1>
  </body>
</html>
```

That's it! You've created your first Astro page.

## Conclusion

Astro makes it easy to build fast, content-focused websites. Start exploring and building your next project today!
