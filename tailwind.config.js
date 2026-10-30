/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#03040B',
          900: '#070917',
          850: '#0B0E22',
          800: '#10142C',
          700: '#181D3A',
          600: '#252B4F',
          400: '#7C84AE',
          300: '#A4ABCF',
          200: '#CBD0E9',
          100: '#E8EAF6',
        },
        electric: {
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
        violet: {
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
        },
        emerald: {
          400: '#34D399',
        },
        rose: {
          400: '#FB7185',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'curtain-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-101%)' },
        },
        'gradient-drift': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(3%, -2%, 0) scale(1.05)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'modal-in': {
          from: { opacity: '0', transform: 'translateY(32px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        orbit: 'orbit 22s linear infinite',
        'orbit-reverse': 'orbit-reverse 30s linear infinite',
        blink: 'blink 1s step-end infinite',
        shimmer: 'shimmer 4s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2, 0.6, 0.4, 1) infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'curtain-up': 'curtain-up 0.9s cubic-bezier(0.76, 0, 0.24, 1) 0.2s forwards',
        'gradient-drift': 'gradient-drift 14s ease-in-out infinite',
        'fade-in': 'fade-in 0.4s ease-out both',
        'modal-in': 'modal-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(59, 130, 246, 0.45)',
        'glow-violet': '0 0 40px -8px rgba(139, 92, 246, 0.45)',
        'glow-cyan': '0 0 40px -8px rgba(34, 211, 238, 0.35)',
      },
    },
  },
  plugins: [],
};
