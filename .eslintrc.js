module.exports = {
  extends: 'airbnb',
  globals: {
    document: true,
    fetch: true,
    test: true,
    expect: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
    'jsx-a11y/img-has-alt': [0],
  }
};
