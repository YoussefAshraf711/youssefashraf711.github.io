/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#0b1120', // Deep sophisticated slate
                'background-light': '#1e293b', // Slate 800
                primary: '#38bdf8', // Softer, premium Sky Blue (was cyan)
                secondary: '#10b981', // Professional Emerald Green
                accent: '#8b5cf6', // Elegant Violet
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
            },
            animation: {
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
                'float': 'float 8s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                'glow-pulse': {
                    '0%': { boxShadow: '0 0 5px rgba(56, 189, 248, 0.1)' },
                    '100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.2), 0 0 40px rgba(56, 189, 248, 0.05)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-in-left': {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'slide-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
};
