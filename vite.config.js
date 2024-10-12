import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/joy-typing_web_front_end/', // 替换为你的 GitHub 仓库名
})
