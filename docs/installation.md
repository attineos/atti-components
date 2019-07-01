### Normal installation

To use this library, simply add it as a dependency to your yarn or npm project by running the command:

```php
npm install --save atti-components
// Or
yarn add atti-components
```

This will install the latest atti-component version right away in your project

Then, you can start importing components:

```php
import { Button } from 'atti-components'
```

For a more detailed view of individual components and how to use them, please see the examples in this documentation.

### Unstable installation

Sometimes, we will provide a prerelease version to enable everyone to test upcoming features.

To use the lastest prerelease, simply run:

```php
npm install --save atti-components@next
// Or
yarn add atti-components@next
```

Please beware that `@next` tag is **unstable**, it may break at any time and be incompatible with your existing codebase.
We **strongly discourage you** to use that tag in a production environnement. However feel free to test it and report bugs and missing features before we roll the update out to everyone.
