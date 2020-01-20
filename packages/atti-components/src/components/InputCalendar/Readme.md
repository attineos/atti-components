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
var _locale = require('date-fns/locale')
var fr = _locale.fr
;<InputCalendar onChange={date => console.log(date)} locale={fr} yearRange={[1990, 1999]} />
```
