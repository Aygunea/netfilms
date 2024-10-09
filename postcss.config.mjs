module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Page Router için
    './components/**/*.{js,ts,jsx,tsx}', // Bileşen dosyaları
    './app/**/*.{js,ts,jsx,tsx}', // App Router kullanıyorsanız (Next.js 13 ve sonrası)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
