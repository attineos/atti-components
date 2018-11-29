# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Breaking Change**: Remove LayoutGridCell & LayoutContainer by [@akaala](https://github.com/akaala)
  - LayoutGridCell is replaced by Cell
  - LayoutContainer with type RAW is replaced by Container
  - LayoutContainer with type GRID is replaced by Grid
  - default number of columns in the grid has changed -> 12 cols in xldesktop & desktop / 6 cols in tablet & mobile
  - values of theme.layout has changed accordingly
  - Container & Grid now includes a default padding right & left


### Changed

- **Breaking Change**: Rename the following components by [@akaala](https://github.com/akaala)
  - Checkbox -> CheckBox
  - Progressbar -> ProgressBar

- Allow [extending](https://www.styled-components.com/docs/basics#extending-styles) and [referring](https://www.styled-components.com/docs/advanced#referring-to-other-components) of the following components by [@akaala](https://github.com/akaala)
  - Alert
  - Badge
  - Button
  - CheckBox
  - Input
  - Image
  - LayoutContainer
  - LayoutGridCell
  - Link
  - Loader
  - Option
  - OptionPanel
  - ProgressBar
  - Radio
  - Select
  - TextArea

### Removed
- **Breaking Change**: The following component don't support `label` property anymore. You should combine them with a Label component. By [@akaala](https://github.com/akaala)
  - CheckBox
  - Input
  - Radio
  - Select
  - TextArea


## [0.0.1] - 2018-11-21

### Added

- First version of multiple components:
  - Alert
  - Badge
  - BigText
  - Breadcrumb
  - Button
  - Checkbox
  - Header1
  - Header2
  - Header3
  - Image
  - Input
  - InputFile
  - Label
  - LayoutContainer
  - LayoutGridCell
  - Link
  - Loader
  - Menu
  - Option
  - OptionPanel
  - ProgressBar
  - Radio
  - Select
  - SmallText
  - Text
  - TextArea
  - ThemeProvider
