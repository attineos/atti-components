Breadcrumb :

```js
<Breadcrumb
  elements={[
    { name: 'Home', url: '/#' },
    { name: 'Components', url: '/#components' },
    { name: 'Breadcrumb' },
  ]}
/>
```

Breacrumb with larger margin and custom separator :

```js
const customTheme = {
  components: {
    breadcrumb: {
      breadcrumbSeparator: {
        spaces: {
          marginLeft: '16px',
          marginRight: '16px',
        },
      },
    },
  },
}
;<ThemeProvider otherTheme={customTheme}>
  <Breadcrumb
    elements={[
      { name: 'Home', url: '/#' },
      { name: 'Components', url: '/components' },
      { name: 'Breadcrumb' },
    ]}
    separator={'>'}
  />
</ThemeProvider>
```
