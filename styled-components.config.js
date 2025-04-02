module.exports = {
  test: /\\.(js|jsx|ts|tsx)$/, // Match the file type
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: ['styled-components'],
      },
    },
  ],
}
