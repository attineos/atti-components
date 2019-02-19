Browsers inject some styles by default, usually an application want to disable that style to enable consistent styling across all browsers.

With atti-components, you can inject some CSS to reset default browser styles with the ResetCSS component:

```markdown
<ResetCSS />
```

This component is auto injected in each theme provider (unless `suppressResetCss` is set).

If you want to manage it yourself, it is best placed at the root of your application.
Don't forget to set `suppressResetCss` on every ThemeProvider.
Ideally each page should only have one.
