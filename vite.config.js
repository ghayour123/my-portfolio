import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// --- Vite Configuration ---
// This config sets up Vite with React and Tailwind CSS plugins
// The React plugin is required for JSX transformation and HMR
export default defineConfig({
  plugins: [
    react(), // React plugin for JSX support and Fast Refresh
    tailwindcss(), // Tailwind CSS plugin for styling
  ],
})