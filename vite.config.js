import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),

    ],
    server: {
        cors: {
            origin: '*', // Ganti dengan asal yang diizinkan
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true,
        },
        // port: 3000, // Anda dapat menyesuaikan port jika diperlukan
    },
});
