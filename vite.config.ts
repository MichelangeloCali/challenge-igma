/// <Reference types="vitest" />
/// <Reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from '@rollup/plugin-alias'
import * as path from 'path'

export default () => {
  return defineConfig({
    plugins: [react(), alias()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  })
}
