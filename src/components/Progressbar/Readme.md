Progess bar :

```js
initialState = { stepFirstProgress: 0, up: false }
const onChangeSingleValue = () => {
  let up = state.up
  if (state.stepFirstProgress >= 100) {
    up = false
  } else if (state.stepFirstProgress <= 0) {
    up = true
  }
  setState({
    stepFirstProgress: up ? state.stepFirstProgress + 5 : state.stepFirstProgress - 5,
    up,
  })
}
;<div>
  <div onClick={onChangeSingleValue}>
    <Progressbar step={state.stepFirstProgress} />
  </div>
  <br />
  <div onClick={onChangeSingleValue}>
    <Progressbar
      id="secondProgress"
      step={state.stepFirstProgress}
      showLabel={false}
      fillingSpeed={500}
      fillingOrientation="center"
    />
  </div>
</div>
```
