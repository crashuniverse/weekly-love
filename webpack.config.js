module.exports = (env) => {
  const activeEnv = env || 'dev';
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(`./webpack.${activeEnv}.js`);
};
