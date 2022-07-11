# countries-states-data
A light-weight library to get countries and states data.

Methods:
- getAllCountries
- getCountryByName
- getStatesByCountryName
- getStatesByCountryCode
- getAllStates

## Examples
```
import { getStatesByCountryName } = "countries-states-data";

const US_STATES = getStatesByCountryName("United States");

/*{
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
{
  id: 1400,
  name: "Alaska",
  country_id: 233,
  country_code: "US",
  country_name: "United States",
  state_code: "AK",
  type: "state",
  latitude: "64.20084130",
  longitude: "-149.49367330",
},...*/

```

### [Demo](https://codesandbox.io/s/flamboyant-sky-12e1fk?file=/src/App.js)
