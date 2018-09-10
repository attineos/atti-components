Button :

```js
<Button label="Button" onClick={() => console.log('Hello !')}>
  Normal
</Button>
```

Dark theme example :

```js
const darkTheme = { colors: { primary: '#666666', grey: 'black', white: '#222222' } }
;<ThemeProvider otherTheme={darkTheme}>
  <Button onClick={() => console.log('Hello !')}>Dark</Button>
</ThemeProvider>
```

Secondary button example :

```js
const secondaryButtonTheme = {
  components: {
    button: {
      border: { borderWidth: '4px', borderRadius: '50%' },
      colors: { background: 'pink', text: 'purple' },
      spaces: { padding: '24px' },
    },
  },
}

const SecondaryButton = props => (
  <ThemeProvider otherTheme={secondaryButtonTheme}>
    <Button {...props} />
  </ThemeProvider>
)
;<SecondaryButton onClick={() => console.log('Hello !')}>Secondary</SecondaryButton>
```
