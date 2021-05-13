module.exports = function (api) {
  api.cache(true);

  const presets = [
		["@babel/preset-env", {
			targets: {
				edge: "17",
				ie: '11',
				firefox: "60",
				chrome: "67",
				safari: "11.1",
			},
    }],
		"@babel/preset-react",
	];

  const plugins = [
 		[
			"react-css-modules",
			{
				"generateScopedName": "[name]__[local]___[hash:base64:5]",
			}
		],
		"transform-postcss",
	];

  return {
    presets,
    plugins
  };
}
