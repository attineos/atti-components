Input Time:

Uncontrolled component:

```js
<InputTime onChange={date => console.log(date)} />
```

Controlled component:

```js
initialState = { date: new Date() }
;<InputTime value={state.date} onChange={date => setState({ date })} />
```
