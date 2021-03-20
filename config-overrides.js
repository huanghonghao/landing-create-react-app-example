const { override, fixBabelImports, addLessLoader, overrideDevServer } = require('customize-cra');
const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    '/public': {
      target: 'http://mgmt-dev.quadtalent.com:8087/',
      changeOrigin: true,
      pathRewrite: { '^/public': '/' },
    },
  };

  return configFunction;
};

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true,
    }),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    })
  ),
  devServer: overrideDevServer(
    addProxy()
  )
};