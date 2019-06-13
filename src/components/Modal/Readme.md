A Modal :

```js
initialState = { isOpen: false }
;<div>
  <Button onClick={() => setState({ isOpen: true })}>Open Modal</Button>
  <Modal
    isOpened={state.isOpen}
    onClose={() => setState({ isOpen: false })}
    title="This is the modal's title"
  >
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis felis quis lorem lobortis
      lobortis vel non tortor. Aliquam tempor ullamcorper dolor vel ultricies. Etiam molestie ut mi
      ut posuere. Cras ut purus aliquam, rhoncus lacus quis, tristique mi. Nunc at arcu et nisi
      rutrum tristique. Aenean ullamcorper cursus rutrum. Praesent id maximus mauris. Sed eros
      justo, volutpat a placerat lobortis, posuere nec neque. Ut condimentum placerat lacinia. Nam
      vitae lorem risus.{' '}
    </Text>
    <br />
    <Text>
      Etiam finibus congue cursus. Aliquam vel metus at leo vestibulum rhoncus ac nec purus. Sed
      feugiat dolor id libero pharetra lobortis. Nullam vulputate pharetra odio ac malesuada. Nulla
      consequat sem vitae enim cursus, eget feugiat lectus tincidunt. Quisque at placerat lectus.
      Fusce vel metus ac tellus rhoncus varius.
    </Text>
  </Modal>
</div>
```
