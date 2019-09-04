Basic example. The Tooltip's default position is 'top'.

```js
<Tooltip message="Atti-Components rocks !">
  <Text style={{ cursor: 'pointer', textDecoration: 'underline' }}>Hover me</Text>
</Tooltip>
```

You can either set a string in the tooltip's message bubble, or a custom component,
as follow.

```js
<Tooltip
  message={
    <Text>
      I am a custom <strong>text component</strong>
    </Text>
  }
>
  <Text style={{ cursor: 'pointer', textDecoration: 'underline' }}>Hover me</Text>
</Tooltip>
```

Advanced example. You can set the tooltip's position.

```js
initialState = { position: 'top' }
const onChangePosition = e => {
  setState({ position: e.target.value })
}
;<div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ width: '150px' }}>
    <Select
      id="position"
      onChange={onChangePosition}
      options={['top', 'right', 'bottom', 'left']}
      value={state.position}
    />
  </div>
  <div style={{ textAlign: 'center', flexGrow: '1' }}>
    <Tooltip position={state.position} message="Atti-Components rocks !">
      <Text style={{ cursor: 'pointer', textDecoration: 'underline' }}>Hover me</Text>
    </Tooltip>
  </div>
</div>
```

You can use the tooltip around an inline or a block element.

```js
<Tooltip message="Atti-Components rocks !">
  <div>
    <Text style={{ cursor: 'pointer', textDecoration: 'underline' }}>
      This is a very long text inside a block element. Its purpose is to show that a tooltip can be
      placed around a block element as well. This is a very long text inside a block element. Its
      purpose is to show that a tooltip can be placed around a block element as well. This is a very
      long text inside a block element. Its purpose is to show that a tooltip can be placed around a
      block element as well.
    </Text>
    <br />
    <Text style={{ cursor: 'pointer', textDecoration: 'underline' }}>
      This is a very long text inside a block element. Its purpose is to show that a tooltip can be
      placed around a block element as well. This is a very long text inside a block element. Its
      purpose is to show that a tooltip can be placed around a block element as well. This is a very
      long text inside a block element. Its purpose is to show that a tooltip can be placed around a
      block element as well.
    </Text>
  </div>
</Tooltip>
```
