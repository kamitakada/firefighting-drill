import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        standpipe: resolve(__dirname, 'standpipe.html'),
        bucketRelay: resolve(__dirname, 'bucket-relay.html'),
      },
    },
  },
});
