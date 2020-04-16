# Wat is het

Dit is de OpenStad Keuzewijzer.

In essentie is het een stemwijzer, een hulp die de bezoeker helpt een keuze te maken tussen verschillende opties/oplossingen/antwoorden/politieke partijen.

Een bezoeker beantwoord een reeks van vragen. Die worden vergeleken met de antwoorden die gegeven zijn door de optiess. En dan wordt weergegeven in hoeverre jouw antwoorden overeen komen met die van de verschillende opties.

Voor de omgevingsvisie is een alternatieve versie opgezet waarin de opties worden weergegevebn in een 2D vlak. Daarover [later meer](#Plane).

# Installatie

De keuzewijzer maakt deel uit van het OpenStad EcoSysteem en voronderstelt dat andere elementen daarvan ook zijn geinstalleerd. Voor de keuzewijzer is dat nu alleen de API server.

```git clone git@github.com:Amsterdam/openstad-component-choices-guide.git```

of

```npm i git+ssh://git@github.com:Amsterdam/openstad-component-choices-guide.git```

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

Gebruik de functie `OpenStadComponentChoicesGuide.renderElement` om van de div een keuzewijer te maken.

```
window.addEventListener('load', function(e) {
  let config = {
    api: {
      'url': 'http://openstad-api.ergens.nl'
    },
    siteId: 15,
    choicesGuideId: 4,
  };
  let element = document.querySelector('.openstad-component-choices-guide');
  OpenStadComponentChoicesGuide.renderElement(element, config);
})
```

Dat is alles.

In de dist directory staat ook een file `/dist/css/default.css`. Daarin de vormgeving zoals die door de gemeente Amsterdam wordt gebruikt. Die kun je al dan niet toepassen en/of uitbreiden met een eigen css.

## Configuratie

```
api: {
  'url': 'http://openstad-api.ergens.nl',
  'headers': { 'X-Authorization': '000' }
}
```

OpenStad API url, en eventuele headers. Zie ook onder [CMS](#gebruik-in-cms).

```
siteId: 1
```

OpenStad API id van de site waronder deze gids valt

```
choicesGuideId: 1
```

OpenStad API id van deze gids

---

De rest van de configuratie is optioneel

```
divId: 'choices-guide'
```

HTML id van het choices-guide element dat wordt aangemaakt.

```
noOfQuestionsToShow: 1
```

Aantal vragen per pagina; na dit aantal vragen komt er (zonodig) een 'Volgende' knop.

```
beforeUrl: '/openstad/choices-guide/example.html?before',
afterUrl: '/openstad/choices-guide/example.html?after'
```

Urls voor de Vorige en Volgende knop aan het begin en einde van de keuzewijzer.

```
user: {
  role: 'admin'
}
```

De rol van de ingelogde gebruiker. Wordt alleen gebruikt om te zien of er een Bewerkknop moet worden getoond. Zie ook onder [CMS](#gebruik-in-cms).

```
choices: {
  type: 'plane',
  sticky: {
    offsetTop: 10,
  },
}
```

Configuratie van de keuzes weergave. Dit moet nog helemaal anders: sticky hoort niet in deze module thuis, en `type: 'plane'` is een nog niet uitgewerkt oplossing; zie onder (Plane)[#plane];

## Gebruik in een CMS

Implementatie in een CMS is zo eenvoudig als het bovenstaande.

Daarnaast zul je binnen de context van een CMS waarschijnlijk een ingelogde gebruiker hebben. Die wil je dan meesturen naar deze module, en dat doe je met twee config opties:

```
{
  api: {
    headers: { 'X-Authorization': '000' }
  },
  user: {
    role: 'admin'
  },
};
```

Opgegeven API headers worden meegestuurd waarmee de API dus een gebruiker herkent.

config.user.role wordt gebruikt om te beslissen welke interface elementen al dan niet getoond worden, en hoe. In deze module is dat alleen de knop 'Bewerk keuzewijzer'.

# Werking en techniek

## Datamodel

In pseude-json:

```
choices-guide: {
  title,
  decription,
  images,
  questionGroups: {
    title,
    decription,
    images,
    seqnr,
    answerDimensions,
    questions: {
      title,
      decription,
      images,
      seqnr,
      type,
      values,
    },
    choices: {
      title,
      decription,
      images,
      seqnr,
      answers,
    },
  },
}
```

Vragen (questions) maken deel uit van een groep van vragen (questionGroup).

De mogelijke keuzes (choices) vallen ook onder een questionGroup. Er wordt dus per questionGroup een reeks vragen gesteld en vergeleken; een choice-guide is zo eigenlijk een verzameling van stemwijzers.
Deze optie gaat gebruikt worden voor de Marnixstraat.

*Noot:* de API kent ook choices die direct onder een choices-guide vallen, zodat je dus de vragen wel groepeerd, maar de keuzes over die verschillende groepen lopen. Dat wwerkt aan de PAI kanit maar is nog niet uitgewerkt in deze module.

answerDimensions wordt momenteel alleen gebruikt voor Plane; zie (aldaar)[#plane]

question.type is een enum, en kan de volgende waarden hebben: `continuous`, `a-to-b`, `enum-radio`, `enum-button`.
Voor de enum varianten wordt uit het `values` veld gehaald wat de keuzes zijn en welke waarde die hebben.
`a-to-b` is een variant op continuous, waarbij ook extra gegevens uit values worden gelezen.

choices geven op elke vraag een antoord om te kunnen verkelijken:

```
{
  2: 37, // antoord op vraag met id 2 is 37
  3:  5,
  7: 82
}

```

## Werking

Het principe is eenvoudig: elk antwoord leidt tot een score tussen 0 en 100. Elke keuze heeft op elke vraag ook een antwoord gegeven, ook tussen 0 en 100. De antwoorden van de bezoeker worden vergeleken met het antwoord van alle keuzes om te bepalen hoe goed die keuze overeenkomen met de antwoorden van de bezoeker.

## Results

### Opslaan

Hierboven niet genoemd is het opslaan van resultaten.

Na het afronden van de keuzewijzer wordt het resultaat getoond in een resultaat pagina. Op dat moment worden de gegeven antwoorden opgelsagen in de API.
Dat gebeurd telkens weer: als je terug gaat om je antwoorden te wijzigen dan worden die opnieuw opgelagen als je weer op de resultaten pagina komt. Zo kunnen we zien in hoeverre bezoekers hun antwoorden later nog eens anpassen.
Om te zien welke antwoorden bij elkaar horen wordt een fngerprint meegestuurd.

Voor de huidige versie wilde men de antwoorden opslaan zonder extra tussenstap. Het API endpoint staat dan ook helemaal open; gebruikers worden niet langs MijnOpenStad geleid. Er is natuurlijk wel een brute-force restrictie.

### Weergave

Voor het weergeven van de resultaten op een min of meer generieke manier heb ik nog geen oplossing ontwikkeld. De huidige pagian is hardcoded voor de Omgevingsvisie en moet dus aangepast voor een volgende implementatie.

## Plane

Voor de omgevingsvisie heeft men bedacht dat de reultaten moeten worden weergegeven in een 2D vlak. Dat heeft wat rare consequenties. Hieronder beschrijf ik de oplossing die ik hiervoor heb bedacht; ik ben er niet van overtuigd het laaste woord hiermee gezegd is...

Om een en ander te laten werken heb ik de antwoorden 2 dimensionaal gemaakt (eigenlijk: omdat ik toch bezig was heb ik de antwoorden 3 dimensionaal gemaakt).

Questions die worden beantwoord met een slider, dus 1 dimensionaal, worden vertaald. Als je een 2D antwoord wilt dan zijn de waarden gelijk: `{ x: 23, y: 23 }`.

Bij choices wordt het raar: je kunt 4 choices niet in een vastgelegd vlak presenteren. Anders gezegd: door de keuzes in een vastgelegd vlak te presenteren voeg je informatie toe en zijn het niet meer 4 onafhankelijke keuzes.

Ik heb het opgelost door het samen te voegen in 1 choice element. Dat element heeft een wat complexere antwoord structuur om te bepalen hoe de gegeven antwoorden passen op het vlak.

Omdat dit volkomen losstaat van de 'gewone' keuzewijzer heb ik deze weergave in een eigen React component gestopt. Kiezen tussen het een of het ander gebeurd met een config paramater:

```
choices: {
  type: 'default|plane'
}
```

# ToDo
- optie 'Maak een nieuwe choices-guide' is er nog niet. Je kunt de hele keuzewijzer bewerken in deze component maar moet de keuzewijzer zelf met de hand in de database stoppen.
- generieke results pagina
- results deelknoppen wil je laten verwijzen naar de results pagina. Ik denk met een hashtag.
- results doorsturen is nu een zooitje en moet opnieuw uitgewerkt. Bijhouden in het overkoeplende ding en dat dan meesturen, denk ik.
- hoe om te gaan met results als je meerdere questiongroups hebt
- uitwerken edit forms en dat grotendeels in een eigen module stoppen
- de voorkeur berekening is momenteel erg recht toe rechtaan. Ik denk dat dat in een echte stemwijzer wat complexer is. Zoek dat uit en pas het aan.
- sticky moet uit de module gehaald
- voor results wordt de size meegestuurd naar de plane, dat slaat natuurlijk helemaal nergens op
