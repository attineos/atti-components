AdvancedSelect :

The Advanced Select feature more functionnality than it's basic counterpart.
However, it is based on `react-select` which will need to be added as part of your application's dependencies to work.

Please also beware that `react-select` will add more than 160Kb to your final bundle.
If bundle size is an issue for you, you should maybe consider using the barebone functionnality of the BasicSelect.

```js
<AdvancedSelect id="single" options={['< 1 year', 'Between 1 and 3 years', '> 3 years']} />
```
