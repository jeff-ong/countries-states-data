# countries-states-data
A light-weight library to get countries and states data.

Methods:
- getAllCountries
- getCountryByName
- getStatesByCountryName
- getStatesByCountryCode
- getAllStates

### [Demo](https://codesandbox.io/s/countries-states-data-12e1fk?file=/src/App.js)

## Examples
```
import { getStatesByCountryName } = "countries-states-data";

const US_STATES = getStatesByCountryName("United States");

/*
States
{
  id: 1456,
  name: "Alabama",
  country_id: 233,
  country_code: "US",
  country_name: "United States",
  state_code: "AL",
  type: "state",
  latitude: "32.31823140",
  longitude: "-86.90229800",
},
...*/

/*
Country
 {
    id: 233,
    name: "United States",
    iso3: "USA",
    iso2: "US",
    numeric_code: "840",
    phone_code: "1",
    capital: "Washington",
    currency: "USD",
    currency_name: "United States dollar",
    currency_symbol: "$",
    tld: ".us",
    native: "United States",
    region: "Americas",
    subregion: "Northern America",
    timezones: [
      {
        zoneName: "America/Adak",
        gmtOffset: -36000,
        gmtOffsetName: "UTC-10:00",
        abbreviation: "HST",
        tzName: "Hawaii–Aleutian Standard Time",
      },
      ...
    ],
    translations: {
      kr: "미국",
      br: "Estados Unidos",
      pt: "Estados Unidos",
      nl: "Verenigde Staten",
      hr: "Sjedinjene Američke Države",
      fa: "ایالات متحده آمریکا",
      de: "Vereinigte Staaten von Amerika",
      es: "Estados Unidos",
      fr: "États-Unis",
      ja: "アメリカ合衆国",
      it: "Stati Uniti D'America",
      cn: "美国",
      tr: "Amerika",
    },
    latitude: "38.00000000",
    longitude: "-97.00000000",
    emoji: "🇺🇸",
    emojiU: "U+1F1FA U+1F1F8",
  },
*/

```

