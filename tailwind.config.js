/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4fb',
          100: '#d6e5f4',
          200: '#adc9e9',
          300: '#7ea9db',
          400: '#4d84c8',
          500: '#2e64ac',
          600: '#1f4c8a',
          700: '#1a3d6f',
          800: '#152f56',
          900: '#0d1e38',
          950: '#081527',
        },
        accent: {
          50: '#eafaf0',
          100: '#cdf2db',
          200: '#9be5b8',
          300: '#63d191',
          400: '#34b96f',
          500: '#1a9d57',
          600: '#127d45',
          700: '#10633a',
          800: '#0f4f30',
          900: '#0d4129',
          950: '#062418',
        },
        ink: '#0c1930',
        mist: '#f5f8fc',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(13, 30, 56, 0.18)',
        card: '0 8px 30px -10px rgba(13, 30, 56, 0.15)',
        glow: '0 0 0 1px rgba(255,255,255,0.4), 0 20px 60px -15px rgba(26, 157, 87, 0.35)',
      },
      backgroundImage: {
        'hero-blob': "radial-gradient(60% 60% at 30% 20%, rgba(31,76,138,0.15) 0%, rgba(31,76,138,0) 70%), radial-gradient(50% 50% at 80% 80%, rgba(26,157,87,0.18) 0%, rgba(26,157,87,0) 70%)",
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        float: 'float 6s ease-in-out infinite',
        ripple: 'ripple 0.6s linear',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.97)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 0.5 },
          '100%': { transform: 'scale(2.5)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
