export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(124, 58, 237, 0.18)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(139,92,246,0.22), transparent 38%)',
        'soft-radial': 'radial-gradient(circle at 20% 10%, rgba(14,165,233,0.14), transparent 30%)',
      },
      colors: {
        surface: '#0A1126',
        panel: '#0F172A',
        accent: '#8B5CF6',
        accentSoft: '#7C3AED',
        text: '#E2E8F0',
      },
    },
  },
  plugins: [],
}
