Normal Input type text :

```js
initialState = { value: '' }
onChangeFunction = e => {
  setState({ value: e.target.value })
}
;<div>
  <p>Value Selected : {state.value}</p>
  <p>
    <Input
      id="inputTestTxt"
      label="Input type text :"
      name="inputTestTxt"
      onChange={onChangeFunction}
      placeholder="input text"
      type="text"
      value={state.value}
    />
  </p>
</div>
```

Normal Input type password:

```js
<Input id="inputTest" name="inputTest" placeholder="Password" type="password" />
```

Normal Input type tel:

```js
<Input id="inputTest" name="inputTestTel" type="tel" />
```
