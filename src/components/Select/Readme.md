Select :

```js
<Select
  id="single"
  label="Experience"
  options={['< 1 year', 'Between 1 and 3 years', '> 3 years']}
/>
```

Select with alphabetical sort :

```js
initialState = { value: '' }
const onChangeSingleValue = e => {
  setState({ value: e.target.value })
}
;<div>
  <div> Selected value sorted : {state.value}</div>
  <Select
    sort="ASC"
    id="single"
    onChange={onChangeSingleValue}
    options={['allo', 'coco', 'bobo']}
  />
</div>
```

Select with alphabetical sort (desc.) :

```js
initialState = { value: '' }
const onChangeSingleValue = e => {
  setState({ value: e.target.value })
}
;<div>
  <div> Selected value sorted : {state.value}</div>
  <Select
    sort="DESC"
    id="single"
    onChange={onChangeSingleValue}
    options={['allo', 'coco', 'bobo']}
  />
</div>
```

Select multiple :

```js
const { reduce } = require('lodash')
initialState = { values: [] }
const onChangeMultipleValue = () => {
  const options = document.getElementById('multiple')
  setState({
    values: reduce(
      options,
      (acc, { selected, value }) => {
        if (selected) {
          acc.push(value)
        }
        return acc
      },
      [],
    ).join(', '),
  })
}
;<div>
  <div> Selected values : {state.values} (press ctrl to select multiple values)</div>
  <Select
    id="multiple"
    onChange={onChangeMultipleValue}
    options={['value 1', 'value 2', 'value 3', 'value4', 'value5']}
    isMulti
  />
</div>
```
