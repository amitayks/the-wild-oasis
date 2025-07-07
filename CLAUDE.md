# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run Biome linter checks
- `npm run lint:fix` - Run Biome linter with auto-fix
- `npm run format` - Check code formatting with Biome
- `npm run format:fix` - Format code with Biome
- `npm run typecheck` - Run TypeScript type checking

## Project Architecture

### Tech Stack
- **Frontend**: React 18 with Vite and TypeScript
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Styling**: Styled Components with CSS-in-JS
- **State Management**: React Query for server state, React Context for client state
- **Routing**: React Router DOM v6
- **Forms**: React Hook Form
- **Charts**: Recharts
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Type Safety**: TypeScript with comprehensive type definitions

### Application Structure

**Feature-Based Architecture**: The app is organized by business domains rather than technical concerns:

```
src/
├── features/           # Feature-specific code (authentication, bookings, cabins, etc.)
├── ui/                # Reusable UI components
├── services/          # API services (Supabase integration)
├── pages/             # Route components
├── context/           # React Context providers
└── styles/            # Global styles
```

### Feature Organization Pattern
Each feature follows this structure:
- **Components**: Individual folders with component logic, styled components, and barrel exports
- **Hooks**: Custom hooks for API calls and state management (e.g., `useLogin`, `useCreateCabin`)
- **API Integration**: Uses centralized services in `/src/services/`

### UI Component Pattern
All UI components follow this structure:
```
ComponentName/
├── index.jsx              # Barrel export
├── ComponentName.jsx      # Component logic
└── ComponentName.styled.js # Styled components
```

### Key Patterns
- **React Query**: All server state management uses @tanstack/react-query
- **Styled Components**: Component-specific styling with CSS custom properties for theming
- **Lazy Loading**: Route components are lazy-loaded for performance
- **Protected Routes**: Authentication wrapper for private routes
- **Dark Mode**: Context-based theme switching throughout the app

### Data Flow
1. **API Layer**: Supabase client in `/src/services/supabase.js`
2. **Service Layer**: Feature-specific API functions (e.g., `apiAuth.js`, `apiCabins.js`)
3. **Hook Layer**: Custom hooks wrap services with React Query
4. **Component Layer**: Components consume hooks for data and actions

### Authentication
- Uses Supabase Auth with JWT tokens
- Protected routes implemented via `ProtectedRoute` component
- User context available throughout the app

### Styling System
- Styled Components with CSS-in-JS
- CSS custom properties for theming (light/dark modes)
- Responsive design with media queries
- Component-specific styled files for organization