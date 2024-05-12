/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", "./index.html",
    ],
    theme: {
        extend: {
            colors: {
                'rose-pine-base': '#191724',
                'rose-pine-surface': '#1f1d2e',
                'rose-pine-overlay': '#26233a',
                'rose-pine-muted': '#6e6a86',
                'rose-pine-subtle': '#908caa',
                'rose-pine-text': '#e0def4',
                'rose-pine-love': '#eb6f92',
                'rose-pine-gold': '#f6c177',
                'rose-pine-rose': '#ebbcba',
                'rose-pine-pine': '#31748f',
                'rose-pine-foam': '#9ccfd8',
                'rose-pine-iris': '#c4a7e7',

                'rose-pine-base-darker': '#14121d',
                'rose-pine-surface-darker': '#191725',
                'rose-pine-overlay-darker': '#1e1c2e',
                'rose-pine-muted-darker': '#58556b',
                'rose-pine-subtle-darker': '#6e698f',
                'rose-pine-text-darker': '#9e98dd',
                'rose-pine-love-darker': '#e33264',
                'rose-pine-gold-darker': '#f1a233',
                'rose-pine-rose-darker': '#d87d79',
                'rose-pine-pine-darker': '#275d72',
                'rose-pine-foam-darker': '#67b5c3',
                'rose-pine-iris-darker': '#9a68d6',

                'rose-pine-base-lighter': '#3f3a5b',
                'rose-pine-surface-lighter': '#433f63',
                'rose-pine-overlay-lighter': '#48426e',
                'rose-pine-muted-lighter': '#8a86a0',
                'rose-pine-subtle-lighter': '#a6a3bb',
                'rose-pine-text-lighter': '#e6e5f6',
                'rose-pine-love-lighter': '#ef8ca8',
                'rose-pine-gold-lighter': '#f8cd92',
                'rose-pine-rose-lighter': '#efc9c8',
                'rose-pine-pine-lighter': '#429abe',
                'rose-pine-foam-lighter': '#b0d9e0',
                'rose-pine-iris-lighter': '#d0b9ec',
            },
            fontFamily: {
                'prata': ['Prata', 'serif'],
                'work': ['Work Sans', 'sans-serif']
            },
            fontWeight: {
                'light': '300',
                'normal': '400',
                'medium': '500',
                'bold': '700'
            }
        },
    },
    plugins: [],
};
