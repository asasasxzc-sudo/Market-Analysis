/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}", // 强制扫描 app 根目录
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "page.tsx", // 暴力指定主页面
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
