Normal Input type password:

```js
<Input id="inputTest" name="inputTest" placeholder="Password" type="password" />
```

Normal Input type text :

```js
initialState = { value: '' }
onChangeFunction = e => {
  setState({ value: e.target.value })
}
;<div>
  <div>Value Selected : {state.value}</div>
  <div>
    <Input
      id="inputTestTxt"
      name="inputTestTxt"
      onChange={onChangeFunction}
      placeholder="input text"
      type="text"
      value={state.value}
    />
  </div>
</div>
```

Normal Input type tel:

```js
<Input id="inputTest" name="inputTestTel" type="tel" />
```
