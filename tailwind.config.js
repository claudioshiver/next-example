const palette = {
    'primary': '#6579d6'
};

module.exports = {
    purge: process.env.NODE_ENV === 'production' ? [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}'
    ] : [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                screen2x: '200vh'
            },
            scale: {
                '80': '.8',
                '120': '1.2'
            },
            color: palette,
            backgroundColor: palette,
            borderColor: palette,
            textColor: palette
        }
    },
    variants: {
        extend: {
            transform: ['hover', 'active', 'focus'],
            ringWidth: ['hover'],
            ringColor: ['hover']
        }
    },
    plugins: [],
}
