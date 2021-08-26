module.exports = function (api) {
  api.cache(true);

  const presets = [
		"@babel/preset-env",
		"@babel/preset-react",
	];

  const plugins = [
 		[
			"react-css-modules",
			{
				"generateScopedName": "[name]__[local]___[hash:base64:5]",
			}
		],
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
      }
    ],
		"transform-postcss",
	];

  return {
    presets,
    plugins
  };
}
