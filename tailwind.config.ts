import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 定义 SaaS 专属的深蓝色和 Slate 灰色
        brand: {
          50: '#f0f7ff',
          600: '#2563eb',
          950: '#020617',
        }
      }
    },
  },
  plugins: [],
};
export default config;
