# openstad-components

These are components used in the OpenStad Ecosystem.

## Use

Easiest is using the built version from a CDN:

```
<!-- load react -->
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<!-- load openstad component -->
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/openstad-components@latest/dist/css/choices-guide.css"/>
<script src="https://cdn.jsdelivr.net/npm/openstad-components@latest/dist/choices-guide.js"></script>

<script>
 window.addEventListener('load', function(e) {

   // configure
   var config = {
     siteId: 1,
     choicesGuideId: 1,
   }
   
   // load in page
   var element = document.querySelector('.openstad-component-choices-guide');
   OpenStadComponents['choices-guide'].ChoicesGuide.renderElement(element, config);

 });

</script>

<div class="openstad-component-choices-guide"></div>
```

## Documentation

More information can be found at https://docs.openstad.amsterdam/technical/components
