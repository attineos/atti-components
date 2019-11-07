Input Popdown:

Add popdown component to any input

```js
initialState = { date: new Date() }
;<React.Fragment>
  <InputPopdown
    enhancer={() => <InputCalendar value={state.date} onChange={date => setState({ date })} />}
  >
    <Input value={state.date} onChange={date => setState({ date })} />
  </InputPopdown>
  <Input value={state.date} onChange={date => setState({ date })} />
</React.Fragment>
```
