Input Month:

Uncontrolled component:

```js
<InputMonth onChange={date => console.log(date)} />
```

Controlled component:

```js
initialState = { date: new Date() }
;<InputMonth value={state.date} onChange={date => setState({ date })} />
```
