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
