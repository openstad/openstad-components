# openstad-components

Dit wordt de nieuwe gecombineerde repo voor openstad (react) componenten. Alle openstad-component-xxx repos worden hiermee depricated.

## ToDo

Er wordt een JS per module gemaakt, plus een js voor alle modules.
Alles wordt exposed via window.OpenstadCompnents.xxx. Dat gaat prima, totdat je twee losse modules via twee losee js files laadt. Dan overschrijft de ene window.OpenstadCompnents de andere. Dat kan dus alleen via all.js