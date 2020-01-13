Input Calendar:

Uncontrolled component:

```js
<InputCalendar onChange={date => console.log(date)} />
```

Controlled component:

```js
initialState = { date: new Date() }
;<InputCalendar value={state.date} onChange={date => setState({ date })} />
```

Change locale and year range:

```js
var locale = require('date-fns/locale/fr')
;<InputCalendar onChange={date => console.log(date)} locale={locale} yearRange={[1990, 1999]} />
```
