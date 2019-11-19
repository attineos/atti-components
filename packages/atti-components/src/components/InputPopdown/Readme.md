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
  Here the Popdown create a Datepicker functionnality by adding an InputCalendar on top of a standard
  Input.
</React.Fragment>
```

```js
initialState = { date: new Date() }
;<React.Fragment>
  <InputPopdown
    enhancer={() => (
      <React.Fragment>
        <InputCalendar value={state.date} onChange={date => setState({ date })} />
        <InputTime value={state.date} onChange={date => setState({ date })} />
      </React.Fragment>
    )}
  >
    <Input value={state.date} onChange={date => setState({ date })} />
  </InputPopdown>
  Here the Popdown create a Datepicker functionnality by adding an InputCalendar on top of a standard
  Input.
</React.Fragment>
```

```js
initialState = { value: 50 }
;<React.Fragment>
  <InputPopdown enhancer={() => <ProgressBar value={state.value} />}>
    <InputGroup>
      <Button onClick={() => setState({ value: state.value + 1 })}>More</Button>
      <Input onChange={value => setState({ value })} value={state.value} />
      <Button onClick={() => setState({ value: state.value - 1 })}>Less</Button>
    </InputGroup>
  </InputPopdown>
  Here we enhance the stardard input with a loader and More/Less buttons for more sexyness !
</React.Fragment>
```
