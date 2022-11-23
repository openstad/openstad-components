module.exports = function (api) {
  api.cache(true);

  const presets = [
		"@babel/preset-env",
		"@babel/preset-react",
	];

  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
      }
    ],
	];

  return {
    presets,
    plugins
  };
}
