import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
    },
    repo: 'https://github.com/braycarlson/braycarlson.github.io/',
    plugins: [react()],
})
