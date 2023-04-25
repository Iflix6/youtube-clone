module.exports = {
    build: {
      outDir: 'src',
      assetsDir: 'assets',
      sourcemap: true,
    },
    server: {
      port: 3000,
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  };
  