To use this library, simply add it as a dependency to your yarn or npm project by running the command:

```php
npm install --save atti-components
// Or
yarn add atti-components
```

This will install the latest atti-component version right away in your project

Then, add the right import depending if you want to use Native or Web components:

```php
// Import Web components
import { Button } from 'atti-components'

// Import Native components
import { Button } from 'atti-components/native'
```

The goal of this library is to abstract native and web differencies and expose a common interface. However some inconsistencies may still exist and you will have to thoroughly test your application on all devices you intend to distribute it on.

For a more detailed view of individual components and how to use them, please see the examples in this documentation.
