# Wat is het

Dit is de OpenStad Gebiedstool.

Het is een alternatieve weergave van bestaande functionaliteit: toon ideas op een kaart, in een Airbnb-achtige interface.

# Installatie

De gebiedstool maakt deel uit van het OpenStad EcoSysteem en voronderstelt dat andere elementen daarvan ook zijn geinstalleerd. Voor de gebiedstool zijn dat nu de API server en mijnopenstad.

```git clone git@github.com:Amsterdam/openstad-component-ideas-on-map.git```

of

```npm i git+ssh://git@github.com:Amsterdam/openstad-component-ideas-on-map.git```

## Build

'npm run build' herschrijft de files in /dist

### Devel: watch

'npm run watch' houdt de files in de gaten en herschrijft de files in /dist bij elke aanpassing

### Auto build on commit

Maak een file `.git/hooks/pre-commit` met als inhoud

```
#!/bin/sh

npm run build
```

# Gebruik

Zie ook example.html.

Maak een div in een HTML file.

Laad de file `/dist/index.js`.

De module vervangt automatisch de div met id openstad-component-ideas-on-map door de tool. Dit is een oudere manier van werken die nog vervangen moet worden door de methode in openstad-component-choices-guide.

Dat is alles.

In de dist directory staat ook een file `/dist/css/default.css`. Daarin de vormgeving zoals die door de gemeente Amsterdam wordt gebruikt. Die kun je al dan niet toepassen en/of uitbreiden met een eigen css.

## Configuratie

```
api: {
  'url': 'http://openstad-api.ergens.nl',
  'headers': { 'X-Authorization': '000' },
  isUserLoggedIn: true
}
```

OpenStad API url, en eventuele headers. Zie ook onder [CMS](#gebruik-in-cms).

```
siteId: 1
```

---

De rest van de configuratie is optioneel
```
divId: 'ideas-on-map'
```

HTML id van het ideas-on-map element dat wordt aangemaakt.

```
  "idea": {
    "titleMinLength": 5,
    "titleMaxLength": 140
  },
  "map": {
    "variant": "amaps",
    "zoom": 16,
    "clustering": {
      "isActive": true
    }
  },
  "argument": {
    "descriptionMinLength": 5,
    "descriptionMaxLength": 50
  }
```

Configuratie van de onderdelen van de tool; spreekt voor zich denk ik.

```
user: {
  fullName: "Gekke Henkie",
  role: 'member'
}
```

De de ingelogde gebruiker. Wordt gebruikt om te zien welke knoppen er getoond moeten worden, en welke naam er getoond moet worden in formulieren. Zie ook onder [CMS](#gebruik-in-cms).

## Gebruik in een CMS

Implementatie in een CMS is zo eenvoudig als het bovenstaande.

Daarnaast zul je binnen de context van een CMS waarschijnlijk een ingelogde gebruiker hebben. Die wil je dan meesturen naar deze module, en dat doe je met twee config opties:

```
{
  api: {
    headers: { 'X-Authorization': '000' }
    isUserLoggedIn: true
  },
  user: {
    fullName: "Gekke Henkie",
    role: 'member'
  },
};
```

Opgegeven API headers worden meegestuurd waarmee de API dus een gebruiker herkent.

config.user wordt gebruikt om te beslissen welke interface elementen al dan niet getoond worden, en hoe. In deze module is dat alleen de knop 'Bewerk keuzewijzer'.

# ToDo
- De naam is ongelukkig, omdat er in het CMS nog een widget is met bijna dezelfde naam. Wie weet er iets beters...
- het hele ding is maar zeer beperkt configureerbaar; het idee is om eerst ervaring op te doen met 1 implementatie en dan toe te werken naar een generiekere versie
- lostrekken forms en reactions modules; ik denk ook idea-details en misschien zelfs de lists en zoekmodules
- gebruik gelijk trekken met choices-guide
