import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['twin', {
            "exclude": [
              "\x00commonjsHelpers.js" // Avoid build error
            ]
          }],
          'macros',
          '@emotion/babel-plugin'
        ]
      }
    }),
    tsconfigPaths(),
  ],
  define: {
    'process.env': {},
  },
  build: {
    rollupOptions: {
      input: {
        'app-as-inquiry': fileURLToPath(new URL('./src/views/AsInquiry.html', import.meta.url)),
        'app-purchase-inquiry': fileURLToPath(new URL('./src/views/PurchaseInquiry.html', import.meta.url)),
      },
      output: {
        entryFileNames: `forms/[name].js`,
        chunkFileNames: `forms/chunk-[name].js`,
        assetFileNames: `forms/[name].[ext]`
      }
    }
  }
})
