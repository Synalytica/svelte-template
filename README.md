# Frontend - SvelteKit + shadcn-svelte

A modern frontend application built with SvelteKit, shadcn-svelte, and Tailwind CSS v4.

## Tech Stack

- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack framework for Svelte
- **[Svelte 5](https://svelte.dev/)** - Modern reactive framework with runes
- **[shadcn-svelte](https://www.shadcn-svelte.com/)** - High-quality component library
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Lucide Svelte](https://lucide.dev/)** - Icon library
- **[Vite](https://vitejs.dev/)** - Build tool and dev server

## Prerequisites

- **[Bun](https://bun.sh/)** (recommended) or Node.js 20+
- Docker and Docker Compose (for containerized deployment)

## Installation

1. **Install dependencies using Bun:**

```sh
bun install
```

Or if using npm:

```sh
npm install
```

2. **Sync SvelteKit types:**

```sh
bun run prepare
```

## Development

Start the development server:

```sh
bun run dev

# or with npm
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

To open the app automatically in your browser:

```sh
bun run dev -- --open
```

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run check` - Run type checking
- `bun run check:watch` - Run type checking in watch mode
- `bun run lint` - Lint code with ESLint and Prettier
- `bun run format` - Format code with Prettier

## Building for Production

Create an optimized production build:

```sh
bun run build
```

The build output will be in the `.svelte-kit` directory.

Preview the production build locally:

```sh
bun run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   └── ui/          # shadcn-svelte components
│   │   ├── assets/          # Static assets
│   │   └── utils.ts         # Utility functions
│   ├── routes/              # SvelteKit file-based routing
│   │   ├── +layout.svelte   # Root layout
│   │   ├── +page.svelte     # Home page
│   │   └── [routes]/        # Route pages
│   ├── app.html             # HTML template
│   └── App.scss             # Global styles
├── components.json           # shadcn-svelte configuration
├── svelte.config.js         # SvelteKit configuration
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

## Adding shadcn-svelte Components

To add new components from shadcn-svelte:

```sh
bunx shadcn-svelte@latest add [component-name]

# Example:
bunx shadcn-svelte@latest add card
bunx shadcn-svelte@latest add dialog
```

Components will be installed to `src/lib/components/ui/`.

## Deployment

This project uses Docker Compose for deployment. The `Dockerfile` and `entrypoint.sh` are configured for containerized builds.

### Docker Deployment

Build and run with Docker Compose:

```sh
docker compose up --build
```

The application will be served from the container.

### Adapter Configuration

The project uses `@sveltejs/adapter-auto` which automatically detects the deployment environment. For specific platforms, you may need to install and configure a different adapter:

- **Vercel**: `@sveltejs/adapter-vercel`
- **Netlify**: `@sveltejs/adapter-netlify`
- **Node.js**: `@sveltejs/adapter-node`
- **Static**: `@sveltejs/adapter-static`

See the [SvelteKit adapters documentation](https://svelte.dev/docs/kit/adapters) for more information.

## Styling

- **Tailwind CSS v4** - Configured in `src/routes/layout.css`
- **shadcn-svelte theme** - CSS variables defined in `src/routes/layout.css`
- **SCSS** - Global styles in `src/App.scss`

The theme uses the "slate" color scheme by default. You can customize colors by modifying the CSS variables in `src/routes/layout.css`.

## Type Checking

Run TypeScript type checking:

```sh
bun run check
```

Or in watch mode:

```sh
bun run check:watch
```

## Code Quality

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety

Format code:

```sh
bun run format
```

Lint code:

```sh
bun run lint
```

## License

[Add your license here]
