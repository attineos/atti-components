Progress bar :

_Click on the progress bars to update their values_

```js
initialState = { progressValue: 0, up: false }
const onChangeSingleValue = () => {
  const step = 5
  let up = state.up
  if (state.progressValue >= 100) {
    up = false
  } else if (state.progressValue <= 0) {
    up = true
  }
  setState({
    progressValue: up ? state.progressValue + step : state.progressValue - step,
    up,
  })
}
;<div>
  <Text>With default properties</Text>
  <div onClick={onChangeSingleValue}>
    <ProgressBar value={state.progressValue} />
  </div>
  <br />
  <Text>Centered progression with no label</Text>
  <div onClick={onChangeSingleValue}>
    <ProgressBar
      id="secondProgress"
      value={state.progressValue}
      showLabel={false}
      fillingSpeed={500}
      fillingOrientation="center"
    />
  </div>
</div>
```
