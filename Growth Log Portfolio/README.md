# Growth Log Portfolio

A personal portfolio website showcasing my projects, learning journey, and live coding streams.

## Features

- **Live Streaming Integration**: YouTube live stream embed with status display
- **Learning Log**: MDX-based blog system for sharing learning experiences
- **Project Showcase**: Display of completed and ongoing projects
- **Responsive Design**: Works well on both desktop and mobile devices
- **Modern Tech Stack**: Built with Next.js, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/growth-log-portfolio.git
   cd growth-log-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   # Add any environment variables here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
growth-log-portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects page
│   ├── components/        # Reusable components
│   └── page.tsx           # Home page
├── content/               # MDX content
│   └── posts/            # Blog posts
├── public/               # Static assets
└── ...config files
```

## Customization

### Adding Blog Posts

1. Create a new `.mdx` file in the `content/posts` directory
2. Add frontmatter at the top of the file:
   ```mdx
   ---
   title: 'Your Post Title'
   date: 'YYYY-MM-DD'
   ---
   ```
3. Write your content using MDX syntax

### Updating Projects

Edit the `projects` array in `app/projects/page.tsx` to add or modify your projects.

### Customizing Styles

The project uses Tailwind CSS for styling. You can modify the theme in `tailwind.config.js`.

## Deployment

This project is configured for deployment on Vercel. Simply push your changes to GitHub and Vercel will automatically deploy them.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 