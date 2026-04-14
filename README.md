# Research Portfolio with 3D Effects

A smooth, dynamic research portfolio showcasing projects and work experience with Three.js animations and scroll effects.

## Features

- Smooth scrolling animations with Framer Motion
- 3D background effects using Three.js and React Three Fiber
- Dynamic color transitions between projects
- Responsive design for all devices
- Project cards that transform as you scroll

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd my-portfolio-3d
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── assets/        # Store images and other static assets
├── components/
│   ├── layout/    # Layout components (Header, Footer)
│   ├── projects/  # Project-related components
│   └── three/     # Three.js components
├── data/          # Project data
├── hooks/         # Custom React hooks
└── styles/        # Additional styles
```

## Adding Your Projects

1. Add your project images to the `public/` directory

2. Update the project data in `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description goes here...",
    tags: ["React", "TypeScript", "Other Tech"],
    image: "/your-image.jpg",
    color: "#FF5F6D" // Color theme for the project
  },
  // Add more projects...
];
```

## Customization

- Update personal information in the `Header.tsx` component
- Modify colors and styles in `App.css`
- Adjust the 3D background effects in the `Background.tsx` component

## Deployment

Build your project for production:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to your hosting provider of choice (Netlify, Vercel, GitHub Pages, etc.).

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
