export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    autoprefixer: {
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
};
