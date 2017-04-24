# foursquare-locales

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

Infers the best Foursquare URL for a given locale.

### Usage
Install the library with `npm install foursquare-locales`

```javascript
var FoursquareLocales = require('foursquare-locales').FoursquareLocales;

FoursquareLocales.bestDomainFor('en_US'); //-> 'foursquare.com'
FoursquareLocales.bestDomainFor("fr_FR"); //-> 'fr.foursquare.com'

FoursquareLocales.bestPageUrlFor({locale: 'en_US', venueId:'1234'}); //-> 'https://foursquare.com/v/1234'

FoursquareLocales.bestPageUrlFor({locale: 'en_US', venueId:'1234', tab:'menu'}); //-> 'https://foursquare.com/v/1234/menu'
```

[downloads-image]: https://img.shields.io/npm/dm/foursquare-locales.svg

[npm-url]: https://npmjs.org/package/foursquare-locales
[npm-image]: https://img.shields.io/npm/v/foursquare-locales.svg
