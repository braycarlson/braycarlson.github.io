import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    repo: 'https://github.com/braycarlson/braycarlson.github.io/',
    plugins: [react()],
})
