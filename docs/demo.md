## Quick demo

```js
<Grid>
  <Cell cols={[[1, 6],[1, 6],[1, 12]]}>
    <Header2>This is some title</Header2>
  </Cell>
  <Cell cols={[[1, 6],[1, 6],[1, 12]]}>
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
  <Cell cols={[[1, 6],[1, 6],[1, 12]]}>
    <Alert type="success">
      This is a success <Link href="#/">with a link</Link>
    </Alert>
  </Cell>
  <Cell cols={[[1, 6],[1, 6],[1, 4]]}>
    <Button onClick={() => alert('Hello !')}>Click me !</Button>
  </Cell>
  <Cell cols={[[1, 6],[1, 6],[6, 12]]}>
    <InputFile placeholder="Browse a file" onChange={e => console.log(e)} />
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [1, 4]]}>
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
  <Cell cols={[[1, 6], [1, 6], [6, 12]]}>
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
  <Cell cols={[[1, 6], [1, 6], [1, 4]]}>
    <Input id="inputTestTxt" name="inputTestTxt" placeholder="input text" type="text" />
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [4, 8]]}>
    <Select id="single" options={['less than 1 year', 'Between 1 and 3 years', 'More than 3 years']} />
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [8, 12]]}>
    <Text lh="form">
      Let's try some features
      <Badge exponent={true} type="info">
        NEW!
      </Badge>
    </Text>
  </Cell>
  <Cell cols={[[1, 6], [1, 6], [1, 12]]}>
    <Table
      cols={[
        { name: 'ident', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'someData', label: 'SomeData' },
        { name: 'moreData', label: 'MoreData' },
        { name: 'In Stock', label: 'inStock' },
      ]}
      elements={[
        { ident: 1, name: 'Product 1', someData: '17', moreData: '42', inStock: true },
        { ident: 3, name: 'Product 13', someData: 'NA', moreData: '43', inStock: false},
        { ident: 7, name: 'Product abc', inStock: true },
      ]}
    /> 
  </Cell>
  
</Grid>
```
