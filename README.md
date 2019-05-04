# vuetify-simple-typeahead

![npm](https://img.shields.io/npm/v/vuetify-simple-typeahead.svg?style=plastic)
![NpmLicense](https://img.shields.io/npm/l/vuetify-simple-typeahead.svg?style=plastic)
![npm](https://img.shields.io/npm/dt/vuetify-simple-typeahead.svg?style=plastic)


A simple typeahead component that uses Vue2+Vuetify to get you going quickly

## Getting Started

### Installing

Install with npm:
```bash
npm install --save vuetify-simple-typeahead
```

import into project:
```js
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VuetifySimpleWizard from 'vuetify-simple-typeahead';

Vue.use(Vuetify)
Vue.use(VuetifySimpleTypeahead);
```

**or**

import into component: 

```js
// within your component script tag
import { SimpleTypeahead } from 'vuetify-simple-typeahead';

// in your components
components: {
  'vuetify-simple-typeahead': SimpleTypeahead,
}
```

### API

[Wiki/API](https://github.com/jasonwilczak/vuetify-simple-typeahead/wiki/API)

### Examples

[Wiki/Examples](https://github.com/jasonwilczak/vuetify-simple-typeahead/wiki/Examples)

## Contributing
