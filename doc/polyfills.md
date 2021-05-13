# About polyfills

A simpeler, more straightforward way of polyfilling would be to use babel polyfill.

In webpack.js:
```
entry: {
	"all": ['babel-polyfill', 'whatwg-fetch', './src/index.jsx'],
	"base-map": ['babel-polyfill', 'whatwg-fetch', './src/base-map/index.jsx'],
	...etc.
}
```

In babel.config.js:
```
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
  ...etc.
 ]
```

But adding babel-polyfill and then adding mutiple libraries errors with on multiple babel-polyfills on a page, and is therefore not used.

Also, the current implementation gives us libraries that are a little bit smaller.

