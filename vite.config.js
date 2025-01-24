import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 8080
  }
}