Toggle :

```js
<div>
  <div style={{ paddingBottom: '30px' }}>
    <div style={{ marginLeft: '5%' }}>
      <Toggle id="toggleTest1" name="toggleTestGroup" value="ImChecked" />
    </div>
    <div style={{ marginLeft: '30%' }}>
      <Toggle
        id="toggleTest2"
        name="toggleTestGroup"
        value="ImChecked"
        variant="neutral"
        checked="true"
        sized="little"
      />
    </div>
    <div style={{ marginLeft: '55%' }}>
      <Toggle
        id="toggleTest3"
        name="toggleTestGroup"
        value="ImChecked"
        variant="disabled"
        click="false"
        sized="medium"
        checked="true"
      />
    </div>
    <div style={{ marginLeft: '80%' }}>
      <Toggle
        id="toggleTest4"
        name="toggleTestGroup"
        value="ImChecked"
        variant="on_off"
        sized="medium"
      />
    </div>
  </div>
</div>
```
