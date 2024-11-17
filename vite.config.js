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
       https:true,
        cors: {
            origin: '*', // Ganti '*' dengan asal frontend Anda jika ada domain tertentu
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true, // Set ke true hanya jika server mendukung pengiriman cookie
        },
    },
    build: {
        rollupOptions: {
            output: {
                publicPath: 'https://senja-kita.vercel.app/build/', // Pastikan path ini benar sesuai struktur file Laravel
            },
        },
    },
});
