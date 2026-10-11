import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 600: '#1d4ed8', 700: '#1e40af', 900: '#172554' },
        ink: { DEFAULT: '#0f172a', soft: '#475569', line: '#e2e8f0' },
      },
      fontFamily: { sans: ['var(--font-figtree)', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
export default config;
