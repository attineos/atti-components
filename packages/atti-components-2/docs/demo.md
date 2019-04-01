## Quick demo

```js
<Grid>
  <Cell cols={[[1, 6],[1, 6],[1, 13]]}>
    <Header2>This is some title</Header2>
  </Cell>
  <Cell cols={[[1, 6],[1, 6],[1, 13]]}>
    <Menu
      elements={[
        { url: '/#/', name: 'Item 1' },
        { url: '/#/', name: 'Item 2' },
        { url: '/#/', name: 'Item 3' },
        { url: '/#/', name: 'Item 4' },
        { url: '/#/', name: 'Item 5' },
      ]}
    />
  </Cell>
  <Cell cols={[[1, 6],[1, 6],[1, 13]]}>
    <Alert type="success">
      This is a success <Link href="#/">with a link</Link>
    </Alert>
  </Cell>
  <Cell cols={[[1, 6],[1, 6],[1, 6]]}>
    <Button onClick={() => alert('Hello !')}>Click me !</Button>
  </Cell>
  <Cell cols={[[1, 6],[1, 6],[7, 13]]}>
    <InputFile placeholder="Browse a file" onChange={e => console.log(e)} />
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [1, 6]]}>
    <Label htmlFor="checkboxTest">
      <CheckBox id="checkboxTest" name="checkboxTestGroup" value="ImChecked" />
      Some checkbox
    </Label>
    <br />
    <Label htmlFor="checkboxTest2">
      <CheckBox id="checkboxTest2" name="checkboxTestGroup" value="ImCheckedToo" />
      Some other checkbox
    </Label>
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [7, 13]]}>
      <div>
        <Label htmlFor="radioTest">
          <Radio id="radioTest" value="radioTest" name="radioTestGroup" />
          Some option
        </Label>
        <br />
        <Label htmlFor="radioTest2">
          <Radio id="radioTest2" value="radioTest2" name="radioTestGroup" />
          Some other option
        </Label>
      </div>
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [1, 5]]}>
    <Input id="inputTestTxt" name="inputTestTxt" placeholder="input text" type="text" />
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [5, 9]]}>
    <Select id="single" options={['less than 1 year', 'Between 1 and 3 years', 'More than 3 years']} />
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [9, 13]]}>
    <Text lh="form">
      Let's try some features
      <Badge exponent={true} type="info">
        NEW!
      </Badge>
    </Text>
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [1, 13]]}>
    <Table
      cols={[
        { name: 'ident', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'someData', label: 'Some Data' },
        { name: 'moreData', label: 'More Data' },
        { name: 'inStock', label: 'In Stock' },
      ]}
      elements={[
        { ident: 1, name: 'Product 1', someData: '17', moreData: '42', inStock: true },
        { ident: 3, name: 'Product 13', someData: 'NA', moreData: '43', inStock: false},
        { ident: 7, name: 'Product abc', inStock: true },
      ]}
      renderCell={(col, element) => col.name === "inStock" ? (<td>
        {element.inStock ? <Badge>Oui</Badge>:<Badge type="danger">Non</Badge>}
      </td>): null}
    />
  </Cell>
  
</Grid>
```
