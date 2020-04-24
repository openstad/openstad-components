# Installatie

```git clone git@github.com:Amsterdam/openstad-component-ideas-on-map.git```

of

```npm i git+ssh://git@github.com:Amsterdam/openstad-component-ideas-on-map.git```

## Build

'npm run build' herschrijft de files in /dist

### Auto build

Maak een file `.git/hooks/pre-commit` met als inhoud

```
#!/bin/sh

npm run build
```

## Gebruik

ToDo